import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
from datetime import datetime

# Configuração do App Flask
app = Flask(__name__)
# Habilita o CORS para permitir requisições do seu frontend
CORS(app)


usuarios_cadastrados = {
    'otavio': {'senha': '123', 'perfil': 'admin'},
    'dani': {'senha': '123', 'perfil': 'admin'},
    'ivano': {'senha': '123', 'perfil': 'funcionario'},
    'luiz': {'senha': '123', 'perfil': 'funcionario'},
    'gustavo': {'senha': '123', 'perfil': 'funcionario'},
    'thiago': {'senha': '123', 'perfil': 'funcionario'},
    'joao': {'senha': '123', 'perfil': 'funcionario'}
}

# --- ROTA DE LOGIN ---
@app.route('/login', methods=['POST'])
def login():
    """
    Endpoint de API para autenticar usuários.
    """
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"error": "Requisição inválida. 'username' e 'password' são obrigatórios."}), 400

    username = data['username'].lower()
    password = data['password']

    usuario = usuarios_cadastrados.get(username)

    if usuario and usuario['senha'] == password:
        # Autenticação bem-sucedida
        return jsonify({
            "success": True,
            "username": username,
            "perfil": usuario['perfil']
        })
    else:
        # Credenciais inválidas
        return jsonify({
            "success": False,
            "error": "Usuário ou senha inválidos."
        }), 401 # 401 Unauthorized é o código HTTP correto para falha na autenticação

# --- ROTA DE PROCESSAMENTO DE PDF (Lógica existente) ---
def parse_nfe_summary_from_text(text):
    """
    Função aprimorada para extrair e agrupar dados de notas fiscais por dia.
    """
    daily_summaries = {}
    lines = text.split('\n')
    
    in_sales_section = False

    invoice_line_regex = re.compile(
        r'^\s*\d+\.\d+\s+(\d{2}/\d{2}/\d{2,4})\s+.*?\s+([\d.,]+)\s+[\d.,]+\s*$'
    )

    for line in lines:
        if "VENDAS DE MERCADORIAS" in line:
            in_sales_section = True
            continue
        
        if line.strip() and "VENDAS DE MERCADORIAS" not in line and in_sales_section and line.isupper():
            if "DEVOLUÇÃO" in line or "BAIXA DE ESTOQUE" in line:
                in_sales_section = False
                continue

        if in_sales_section:
            match = invoice_line_regex.search(line)
            if match:
                date_str = match.group(1)
                value_str = match.group(2)
                
                try:
                    if len(date_str) == 8:
                        dt_obj = datetime.strptime(date_str, '%d/%m/%y')
                        full_date_str = dt_obj.strftime('%d/%m/%Y')
                    else:
                        full_date_str = date_str

                    value = float(value_str.replace('.', '').replace(',', '.'))
                    
                    if full_date_str in daily_summaries:
                        daily_summaries[full_date_str]['count'] += 1
                        daily_summaries[full_date_str]['totalValue'] += value
                    else:
                        daily_summaries[full_date_str] = {
                            "date": full_date_str,
                            "count": 1,
                            "totalValue": value
                        }
                except (ValueError, IndexError):
                    continue

    return list(daily_summaries.values())

@app.route('/process_pdf', methods=['POST'])
def process_pdf():
    """
    Endpoint da API que recebe o arquivo PDF.
    """
    if 'pdf_file' not in request.files:
        return jsonify({"error": "Nenhum arquivo PDF enviado"}), 400

    file = request.files['pdf_file']
    
    if file.filename == '':
        return jsonify({"error": "Nenhum arquivo selecionado"}), 400

    try:
        pdf_bytes = file.read()
        pdf_document = fitz.open(stream=pdf_bytes, filetype="pdf")
        
        full_text = ""
        for page in pdf_document:
            full_text += page.get_text("text", sort=True) + "\n"
        
        pdf_document.close()
        
        data = parse_nfe_summary_from_text(full_text)
        
        if not data:
            return jsonify({"error": "Não foram encontrados dados de vendas no formato esperado dentro do PDF."}), 404

        return jsonify(data)

    except Exception as e:
        print(f"Erro ao processar o PDF: {e}")
        return jsonify({"error": f"Ocorreu um erro interno ao processar o arquivo: {e}"}), 500

# --- INICIALIZAÇÃO DO SERVIDOR ---
if __name__ == '__main__':
    # Use 0.0.0.0 para tornar o servidor acessível na sua rede local
    app.run(host='0.0.0.0', port=5000, debug=True)