// LISTA DE PRODUTOS EXTRAÍDA DO PDF
const produtosDoEstoque = [
    { codigo: '788', descricao: 'ABAIXADOR DE LINGUA MADEIRA PACOTE' },
    { codigo: '3663', descricao: 'ABAIXADOR DE LINGUA MADEIRA PACOTE' },
    { codigo: '1421', descricao: 'ABAIXADOR DE LINGUA PLÁSTICO C/ SABOR EMB INDIVIDU' },
    { codigo: '4137', descricao: 'ABAIXADOR DE LINGUA PLÁSTICO C/ SABOR EMB INDIVIDU' },
    { codigo: '3406', descricao: 'ACETATO CIPROTERONA 2MG + ETINILESTRADIOL 0,035M' },
    { codigo: '2972', descricao: 'teste 30043290' },
    { codigo: '2015', descricao: 'ACETATO DE RACEALFATOCOFEROL (VITAMINA E) 400MG' },
    { codigo: '3954', descricao: 'ACETILCISTEINA 100MG/ML 3ML' },
    { codigo: '5691', descricao: 'ACETILCISTEINA XPE 40MG 120ML SABOR' },
    { codigo: '2113', descricao: 'ACICLOVIR 200MG' },
    { codigo: '2691', descricao: 'ACIDO ASCORBICO 100 MG/ML 1ML - VITAMINA C' },
    { codigo: '5233', descricao: 'ACIDO TRANEXAMICO 50MG/ML 5ML CX/50AMP' },
    { codigo: '1687', descricao: 'ACIDO TRANEXAMICO 50MG/ML 5ML' },
    { codigo: '5673', descricao: 'ACIDO URSODESOXICOLICO 150MG CX C/30 CPR' },
    { codigo: '5531', descricao: 'ACIDO URSODESOXICOLICO 150MG CX C/30 CPR' },
    { codigo: '5662', descricao: 'ADENOSINA 3MG/ML 2ML' },
    { codigo: '3119', descricao: 'ADRENALINA / EPINEFRINA 1MG/ML 1ML' },
    { codigo: '5125', descricao: 'AFASTADOR FARABEUF150MM 28X16MM' },
    { codigo: '1', descricao: 'AGE DERMAEX 200ML' },
    { codigo: '475', descricao: 'AGUA DESTILADA 5L' },
    { codigo: '3595', descricao: 'AGUA OXIGENADA 10V 1000ML' },
    { codigo: '4872', descricao: 'AGUA OXIGENADA 10V 100ML' },
    { codigo: '1422', descricao: 'AGUA PARA INJECAO 1000ML CX/10BOLSAS' },
    { codigo: '3186', descricao: 'AGUA PARA INJECÃO 10ML' },
    { codigo: '3062', descricao: 'AGUA PARA INJECAO 500 ML' },
    { codigo: '434', descricao: 'AGULHA DESCARTAVEL 13X0,30' },
    { codigo: '3659', descricao: 'AGULHA DESCARTAVEL 13X0,30' },
    { codigo: '4630', descricao: 'AGULHA DESCARTAVEL 13X0,40MM' },
    { codigo: '2775', descricao: 'AGULHA DESCARTAVEL 13X4,5' },
    { codigo: '4673', descricao: 'AGULHA DESCARTAVEL 20X0,55 C/DISPOSITIVO' },
    { codigo: '5582', descricao: 'AGULHA DESCARTAVEL 20X5,5 (ROXA)' },
    { codigo: '913', descricao: 'AGULHA DESCARTAVEL 20X5,5' },
    { codigo: '435', descricao: 'AGULHA DESCARTAVEL 25X07 (CINZA)' },
    { codigo: '4299', descricao: 'AGULHA DESCARTAVEL 25X07' },
    { codigo: '2187', descricao: 'AGULHA DESCARTAVEL 25X08 (VERDE)' },
    { codigo: '4426', descricao: 'AGULHA DESCARTAVEL 25X12 ASPIRACAO' },
    { codigo: '3304', descricao: 'AGULHA DESCARTAVEL 30X07' },
    { codigo: '436', descricao: 'AGULHA DESCARTAVEL 30X08' },
    { codigo: '4520', descricao: 'AGULHA DESCARTAVEL 40X12 ASPIRAÇÃO' },
    { codigo: '914', descricao: 'AGULHA DESCARTAVEL 40X12' },
    { codigo: '4396', descricao: 'AGULHA SPINAL P/RAQUI QUINCKE 22G X 2.5' },
    { codigo: '3203', descricao: 'AGULHA SPINAL P/RAQUI QUINCKE 22G X 3.5' },
    { codigo: '5321', descricao: 'ALBUMINA HUMANA 200G/L 50ML' },
    { codigo: '4721', descricao: 'ALBUMINA HUMANA 200G/L 50ML' },
    { codigo: '1812', descricao: 'ALCOOL 70% 1000ML' },
    { codigo: '2613', descricao: 'ALCOOL ETILICO 70% 100ML' },
    { codigo: '2648', descricao: 'ALCOOL ETILICO DE CEREAIS-1 LITRO' },
    { codigo: '3613', descricao: 'ALCOOL SWAB 70%' },
    { codigo: '4419', descricao: 'ALGODÃO EM ROLETE ULTRACOTTON' },
    { codigo: '2268', descricao: 'ALGODAO HIDROFILO EM BOLAS 100G' },
    { codigo: '4638', descricao: 'ALGODAO HIDROFILO EM BOLAS 95G' },
    { codigo: '25', descricao: 'ALGODAO HIDROFILO EM ROLO 500G' },
    { codigo: '3986', descricao: 'ALGODAO ROLO DENTAL N.1' },
    { codigo: '4720', descricao: 'ALMOTOLIA 125ML TRANSPARENTE BICO RETO' },
    { codigo: '2852', descricao: 'ALMOTOLIA 250ML AMBAR' },
    { codigo: '648', descricao: 'ALMOTOLIA 250ML TRANSPARENTE' },
    { codigo: '4318', descricao: 'ALMOTOLIA 500ML AMBAR' },
    { codigo: '1806', descricao: 'ALMOTOLIA 500ML TRANSPARENTE' },
    { codigo: '3120', descricao: 'ALOPURINOL 100MG CX C/30 CPR' },
    { codigo: '1641', descricao: 'ALPRAZOLAM 2MG CX C/30 CPR' },
    { codigo: '4028', descricao: 'AMINOFILINA 24MG/ML 10ML' },
    { codigo: '2151', descricao: 'AMIODARONA 100MG' },
    { codigo: '4539', descricao: 'AMOXICILINA + CLAV DE POTASSIO 1GR+200MG IV S/DIL' },
    { codigo: '32', descricao: 'AMOXICILINA + CLAV DE POTASSIO 250+62,5MG/5ML 75M' },
    { codigo: '4125', descricao: 'ΑΜΟXICILINA + CLAV DE POTASSIO 875MG + 125MG' },
    { codigo: '4777', descricao: 'AMOXICILINA + CLAV POTASSIO 400+57MG/5ML 70ML' },
    { codigo: '4884', descricao: 'AMOXICILINA 250MG/5ML 150ML' },
    { codigo: '5334', descricao: 'AMPICILINA SODICA + SULBACTAM $1G+0,5G$' },
    { codigo: '4912', descricao: 'AMPICILINA SODICA + SULBACTAM $2G+1G$' },
    { codigo: '5316', descricao: 'AMPICILINA SODICA 1G' },
    { codigo: '5678', descricao: 'ANLODIPINO 2,5MG C/30CPR' },
    { codigo: '2561', descricao: 'APARELHO DE PRESSAO DIGITAL AUTOMATICO DE BRACO' },
    { codigo: '3093', descricao: 'APARELHO DE PRESSAO DIGITAL AUTOMATICO DE PULSO' },
    { codigo: '1899', descricao: 'APARELHO DE TRICOTOMIA 1 LAMINA C/5' },
    { codigo: '494', descricao: 'APARELHO DE TRICOTOMIA 2 LAMINAS C/5' },
    { codigo: '347', descricao: 'APLICADOR VAGINAL DESCARTAVEL 5G' },
    { codigo: '488', descricao: 'ATADURA DE CREPОМ 08СМ Х 1,8M 13FIOS' },
    { codigo: '5658', descricao: 'ATADURA DE CREPOМ 10СМ Х 1,25M 13FIOS' },
    { codigo: '1014', descricao: 'ATADURA DE CREPOM 10CM X 1,8M 13FIOS' },
    { codigo: '2585', descricao: 'ATADURA DE CREPOM 12CM X 1,8M 13 FIOS' },
    { codigo: '5246', descricao: 'ATADURA DE CREPOМ 12CMX1,8M 13FIOS' },
    { codigo: '4272', descricao: 'ATADURA DE CREPOM 13 FIOS 08CMX1,8M' },
    { codigo: '3533', descricao: 'ATADURA DE CREPOM 13 FIOS 10CMX1,8M - INA' },
    { codigo: '2760', descricao: 'ATADURA DE CREPOM 13 FIOS 10CMX1,8M' },
    { codigo: '3391', descricao: 'ATADURA DE CREPOM 13 FIOS 12CMX1,8M' },
    { codigo: '4557', descricao: 'ATADURA DE CREPOM 13 FIOS 15CMX1,8M - INA' },
    { codigo: '3760', descricao: 'ATADURA DE CREPOM 13 FIOS 15CMX1,8M' },
    { codigo: '1005', descricao: 'ATADURA DE CREPOM 13 FIOS 20CMX1,80M' },
    { codigo: '4252', descricao: 'ATADURA DE CREPOМ 15CMX1,8M' },
    { codigo: '5247', descricao: 'ATADURA DE CREPOM 15CMX1,8M PCT' },
    { codigo: '5635', descricao: 'ATADURA ELASTICA 10CM X 4,5M BRANCA' },
    { codigo: '4517', descricao: 'ATADURA ELASTICA 10CM X 4,5M PRETA' },
    { codigo: '5085', descricao: 'ATADURA ELASTICA 10CM X 4,5M ROXA ESCURA' },
    { codigo: '4122', descricao: 'ATADURA ELASTICA 10CM X 4,5M V-TRAP VERMELHA' },
    { codigo: '5090', descricao: 'ATADURA ELASTICA 10CM X 4,5M VERDE AGUA AMARGA' },
    { codigo: '3514', descricao: 'ATADURA ELASTICA 12CM X 2,2M' },
    { codigo: '4296', descricao: 'ATADURA ELASTICA 15CM X 2,2M' },
    { codigo: '4519', descricao: 'ATADURA ELASTICA 15CM X 4,5M AZUL' },
    { codigo: '5637', descricao: 'ATADURA ELASTICA 2,5CM X 4,5M PRETA' },
    { codigo: '4793', descricao: 'ATADURA ELASTICA 20CM X 2,2M' },
    { codigo: '5744', descricao: 'ATADURA ELASTICA 5CM X 4,5M AZUL ESCURA' },
    { codigo: '5745', descricao: 'ATADURA ELASTICA 5CM X 4,5M BRANCA' },
    { codigo: '4518', descricao: 'ATADURA ELASTICA 5CM X 4,5M PRETA' },
    { codigo: '5091', descricao: 'ATADURA ELASTICA 5CM X 4,5M VERDE AGUA AMARGA' },
    { codigo: '5355', descricao: 'ATADURA ELASTICA 5CM X 4,5M VERMELHA' },
    { codigo: '4792', descricao: 'ATADURA ELASTICA 8CM X 2,2M' },
    { codigo: '2294', descricao: 'ATADURA GESSADA 06CM X 2 CM CX/20UN' },
    { codigo: '498', descricao: 'ATADURA GESSADA 10CMX3M' },
    { codigo: '499', descricao: 'ATADURA GESSADA 15CMX3M' },
    { codigo: '497', descricao: 'ATADURA GESSADA 8CMX2M' },
    { codigo: '3182', descricao: 'ATADURA ORTOPEDICA 10CM X 1.0M' },
    { codigo: '500', descricao: 'ATADURA ORTOPEDICA 10CM X 1.80M' },
    { codigo: '3875', descricao: 'ATENOLOL 25MG' },
    { codigo: '1253', descricao: 'ATENOLOL 50MG C/30CPR' },
    { codigo: '3165', descricao: 'ATROPINA 0,25MG/ML 1ML' },
    { codigo: '4811', descricao: 'ATROPINA 0,50MG/ML 2ML' },
    { codigo: '4916', descricao: 'ATROPINA 5MG/ML SOL OFT 5 ML' },
    { codigo: '5154', descricao: 'AVENTAL CIRURGICO DESCARTAVEL C/TOALHA TAM EG' },
    { codigo: '3767', descricao: 'AVENTAL CIRURGICO DESCARTAVEL C/TOALHA TAM G' },
    { codigo: '5684', descricao: 'AVENTAL MANGA LONGA DESCARTAVEL 30G' },
    { codigo: '4768', descricao: 'AVENTAL MANGA LONGA DESCARTAVEL 40G' },
    { codigo: '1804', descricao: 'AVENTAL MANGA LONGA DESCARTAVEL' },
    { codigo: '5165', descricao: 'AVENTAL MANGA LONGA DESCARTAVEL ROSA PINK' },
    { codigo: '5166', descricao: 'AVENTAL MANGA LONGA DESCARTAVEL ROSA' },
    { codigo: '5712', descricao: 'AVENTAL TNT DESCATAVEL MANGA CURTA 20GR' },
    { codigo: '4733', descricao: 'AZUL DE METILENO 6ML' },
    { codigo: '5781', descricao: 'BABADOR ODONTOLOGICO SS PLUS' },
    { codigo: '1460', descricao: 'BALANÇA DIGITAL 150KG' },
    { codigo: '3964', descricao: 'BALANCA DIGITAL ANTOPOMETRICA' },
    { codigo: '1428', descricao: 'BANDAGEM TRIANGULAR TAMANHO P' },
    { codigo: '2121', descricao: 'ΒΕΝΖOILMETRONIDAZOL 4% SUSP 120ML' },
    { codigo: '98', descricao: 'BETAMETASONA 5MG/ML+BETAMETASONA 2MG/ML 1ML' },
    { codigo: '277', descricao: 'BICARBONATO DE SODIO 8,4% 10ML' },
    { codigo: '4341', descricao: 'BICARBONATO DE SODIO 8,4% 250ML' },
    { codigo: '4086', descricao: 'BISACODIL 5MG CPR CX C/20 CPR' },
    { codigo: '5192', descricao: 'BISGLICINATO FERROSO 500MG CX/30 CPR' },
    { codigo: '4458', descricao: 'BISOPROLOL 2.5MG CX C/30CPR' },
    { codigo: '4065', descricao: 'BISTURI DESCARTAVEL N 22' },
    { codigo: '1023', descricao: 'BOLSA COLETA DE SANGUE SIMPLES 500ML' },
    { codigo: '5425', descricao: 'BOLSA P/ TRANSFERENCIA DE SANGUE 150ML' },
    { codigo: '991', descricao: 'BOMBA VACUO ASPIRADORA 1 LITRO' },
    { codigo: '4887', descricao: 'BOTA DE UNNA 10,2CMX9,2M' },
    { codigo: '5716', descricao: 'BROMETO DE ROCURONIO 10MG/ML 5ML C/25' },
    { codigo: '3293', descricao: 'BROMOPRIDA 5MG/ML 2ML' },
    { codigo: '4524', descricao: 'BUPIVACAINA 0,5% 5MG/ML 20M S/VASO CX/25 AMP' },
    { codigo: '4373', descricao: 'BUTIL. ESCOPOLAMINA + DIP 4+500MG/ML 5ML' },
    { codigo: '2981', descricao: 'BUTIL. ESCOPOLAMINA + DIP 6,67+333,4MG/ML 20 ML' },
    { codigo: '959', descricao: 'BUTIL. ESCOPOLAMINA 10 MG+ DIPIPIRONA SODICA 250M' },
    { codigo: '2454', descricao: 'BUTIL. ESCOPOLAMINA 10MG/ML 20ML' },
    { codigo: '290', descricao: 'BUTIL. ESCOPOLAMINA 20MG/ML 1ML' },
    { codigo: '2990', descricao: 'BUTIL. ESCOPOLAMINA 20MG/ML 1ML' },
    { codigo: '4567', descricao: 'BUTIL. ESCOPOLAMINA 20MG/ML 1ML' },
    { codigo: '2324', descricao: 'CABO PARA BISTURI N. 3' },
    { codigo: '1541', descricao: 'CABO PARA BISTURI N. 4' },
    { codigo: '3597', descricao: 'CABO PARA BISTURI N. 7' },
    { codigo: '3609', descricao: 'CAMPO OPERATORIO 45CM X 50CM PREMIUM C/CADARCO' },
    { codigo: '4964', descricao: 'CAMPO OPERATORIO ESTERIL 120 X 150CM C/FENESTRA N' },
    { codigo: '3436', descricao: 'CAMPO OPERATORIO ESTERIL 25CM X 28CM C/ FIO RADIO' },
    { codigo: '5696', descricao: 'CAMPO OPERATORIO ESTERIL 40CM X 40CM C/FENESTRA' },
    { codigo: '4232', descricao: 'CAMPO OPERATORIO ESTERIL 50CM X 50CM C/FENESTRA' },
    { codigo: '5697', descricao: 'CAMPO OPERATORIO ESTERIL 50CM X 50CM S/FENESTRA' },
    { codigo: '4554', descricao: 'CAMPO OPERATORIO ESTERIL 50CM X 50CM S/FENESTRA' },
    { codigo: '5381', descricao: 'CAMPO OPERATORIO ESTERIL 75CM X 75CM C/FENESTRA' },
    { codigo: '5685', descricao: 'CAMPO OPERATORIO ESTERIL 75CM X 75CM C/FENESTRA' },
    { codigo: '4538', descricao: 'CAMPO OPERATORIO ESTERIL 80CM X 80CM C/FENESTRA' },
    { codigo: '4948', descricao: 'CAMPO OPERATORIO ESTERIL 80CM X 80CM C/FENESTRA' },
    { codigo: '4063', descricao: 'CAMPO OPERATORIO ESTERIL 80CM X 80CM' },
    { codigo: '4781', descricao: 'CAMPO OPERATORIO ESTERIL 80CM X 80CM S/FENESTRA' },
    { codigo: '3105', descricao: 'CAMPO OPERATORIO ESTERIL 90CM X 120CM' },
    { codigo: '4801', descricao: 'CAMPO OPERATORIO N/ESTERIL 23CM X 25CM S/ FIO RADI' },
    { codigo: '3719', descricao: 'CANULA+AGULHA 22GX50MM' },
    { codigo: '909', descricao: 'CAPTOPRIL 25MG' },
    { codigo: '2183', descricao: 'CARBOCISTEINA 20MG/ML 100ML' },
    { codigo: '5131', descricao: 'CARBOCISTEINA 50MG/ML 100ML' },
    { codigo: '5403', descricao: 'CARMELOSE SODICA 5MG/ML 15ML SOL OFT' },
    { codigo: '2638', descricao: 'CASTANHA DA INDIA (AESCULUS HIPPOCASTANUM) 100MG' },
    { codigo: '2571', descricao: 'CASTANHA DA INDIA (AESCULUS HIPPOCASTANUM) 100MG' },
    { codigo: '3917', descricao: 'CASTANHA DA INDIA (AESCULUS HIPPOCASTANUM) 300MG' },
    { codigo: '5362', descricao: 'CATETER BLISTER PLUSCAN ALPHA 18G X 45MM' },
    { codigo: '5363', descricao: 'CATETER BLISTER PLUSCAN ALPHA 20G X 32MM' },
    { codigo: '5364', descricao: 'CATETER BLISTER PLUSCAN ALPHA 24G X 19MM' },
    { codigo: '5365', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 14G X 45MM' },
    { codigo: '5366', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 16G X 45MM' },
    { codigo: '5367', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 18G X 45MM' },
    { codigo: '5368', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 20G X 32MM' },
    { codigo: '5369', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 22G X 25MM' },
    { codigo: '5370', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 24G X 19MM' },
    { codigo: '5371', descricao: 'CATETER COM ABAS E VALVULA PLUSVEIN 26G X 19MM' },
    { codigo: '2706', descricao: 'CATETER INTRAVENOSO N 14G C/DISP. SEGURANCA' },
    { codigo: '1624', descricao: 'CATETER INTRAVENOSO N 14G' },
    { codigo: '1622', descricao: 'CATETER INTRAVENOSO N 16G' },
    { codigo: '1732', descricao: 'CATETER INTRAVENOSO N 18G C/DISP. SEGURANCA' },
    { codigo: '1626', descricao: 'CATETER INTRAVENOSO N 18G' },
    { codigo: '1174', descricao: 'CATETER INTRAVENOSO N 18G' },
    { codigo: '2773', descricao: 'CATETER INTRAVENOSO N 20G C/DISP. SEGURANCA' },
    { codigo: '1627', descricao: 'CATETER INTRAVENOSO N 20G' },
    { codigo: '5083', descricao: 'CATETER INTRAVENOSO N 20G' },
    { codigo: '3350', descricao: 'CATETER INTRAVENOSO N 20G' },
    { codigo: '4453', descricao: 'CATETER INTRAVENOSO N 20G' },
    { codigo: '1733', descricao: 'CATETER INTRAVENOSO N 22G C/DISP. SEGURANCA' },
    { codigo: '3303', descricao: 'CATETER INTRAVENOSO N 22G' },
    { codigo: '5164', descricao: 'CATETER INTRAVENOSO N 22G' },
    { codigo: '4374', descricao: 'CATETER INTRAVENOSO N 22G' },
    { codigo: '2707', descricao: 'CATETER INTRAVENOSO N 24G C/DISP. SEGURANCA' },
    { codigo: '1623', descricao: 'CATETER INTRAVENOSO N 24G' },
    { codigo: '3302', descricao: 'CATETER INTRAVENOSO N 24G' },
    { codigo: '4449', descricao: 'CATETER INTRAVENOSO N 24G' },
    { codigo: '387', descricao: 'CATETER INTRAVENOSO PERIFERICO 18G (ANGIOCATH)' },
    { codigo: '382', descricao: 'CATETER INTRAVENOSO PERIFERICO 22G (ANGIOCATH)' },
    { codigo: '943', descricao: 'CATETER NASAL P/OXIGENIO TIPO OCULOS ADULTO 12FR' },
    { codigo: '3212', descricao: 'CATETER NASAL P/OXIGENIO TIPO OCULOS ADULTO' },
    { codigo: '3618', descricao: 'CATETER NASAL P/OXIGENIO TIPO OCULOS PEDIATRICO 8' },
    { codigo: '5360', descricao: 'CATETER TIPO CANETA PLUSPEN 18G X 45MM' },
    { codigo: '5361', descricao: 'CATETER TIPO CANETA PLUSPEN 20G X 32MM' },
    { codigo: '5372', descricao: 'CATETER VETERINÁRIO 12G X 80MM' },
    { codigo: '4568', descricao: 'CEFALEXINA 250MG/5ML 100ML' },
    { codigo: '1681', descricao: 'CEFALEXINA 500MG CX/10 CAPSULAS' },
    { codigo: '555', descricao: 'CEFALEXINA 500MG' },
    { codigo: '1660', descricao: 'CEFALOTINA SODICA 1G IM/IV' },
    { codigo: '2923', descricao: 'CEFAZOLINA SODICA 1G IM/IV' },
    { codigo: '2056', descricao: 'CEFTRIAXONA 1G IV S/DILUENTE' },
    { codigo: '4295', descricao: 'CEFTRIAXONA DISSODICA 1G IV SEM DILUENTE' },
    { codigo: '2783', descricao: 'CELECOXIBE 200MG C/30 CAPS' },
    { codigo: '5353', descricao: 'CETOCONAZOL + DIPROP BETAMETASONA 20MG/G+0,6441' },
    { codigo: '2177', descricao: 'CETOCONAZOL 20MG + BETAMETASONA 0,64 MG + NEOMI' },
    { codigo: '873', descricao: 'CETOPROFENO 100MG CX C/20 CPR' },
    { codigo: '3385', descricao: 'CETOPROFENO 100MG IV' },
    { codigo: '3442', descricao: 'CETOPROFENO 150MG CPR CX C/10CPR' },
    { codigo: '3271', descricao: 'CETOPROFENO 20MG/ML 20ML GOTAS' },
    { codigo: '639', descricao: 'CETOPROFENO 50MG/ML IM 2ML' },
    { codigo: '5266', descricao: 'CICLOBENZAPRINA 10MG' },
    { codigo: '5438', descricao: 'CICLOBENZAPRINA 10MG' },
    { codigo: '326', descricao: 'CICLOBENZAPRINA 10MG CX C/30 CPR' },
    { codigo: '1506', descricao: 'CICLOBENZAPRINA 5MG CX C/30 CPR' },
    { codigo: '384', descricao: 'CIMETIDINA 150MG/ML 2 ML' },
    { codigo: '5109', descricao: 'CIPROFIBRATO 100MG C/30 CPR' },
    { codigo: '4765', descricao: 'CIPROFLOXACINO 3,5MG/ML + DEXAMETASONA 1MG/ML' },
    { codigo: '4799', descricao: 'CIPROFLOXACINO 3,5MG/ML + DEXAMETASONA 1MG/ML' },
    { codigo: '3339', descricao: 'CIPROFLOXACINO 3,5MG/ML COLIRIO 5ML' },
    { codigo: '2806', descricao: 'CIPROFLOXACINO 3,5MG/ML COLIRIO 5ML' },
    { codigo: '5387', descricao: 'CIPROFLOXACINO 500MG C/14CPR' },
    { codigo: '1561', descricao: 'CLINDAMICINA 150MG/ML 4ML' },
    { codigo: '2595', descricao: 'CLOMIPRAMINA 25MG CX C/20 CPR' },
    { codigo: '3897', descricao: 'CLONIDINA 150MCG/ML 1ML' },
    { codigo: '3712', descricao: 'CLORETO DE SODIO 0,9% 10ML' },
    { codigo: '921', descricao: 'CLORETO DE SODIO 20% 10ML' },
    { codigo: '741', descricao: 'CLOREXIDINA 0,2% AQUOSA 1000ML' },
    { codigo: '2358', descricao: 'CLOREXIDINA 0,2% AQUOSA 100ML' },
    { codigo: '2084', descricao: 'CLOREXIDINA 0,5% ALCOOLICA 100ML' },
    { codigo: '5526', descricao: 'CLOREXIDINA 0,5% ALCOOLICA COLORIDA 1000ML' },
    { codigo: '5492', descricao: 'CLOREXIDINA 0,5% ALCOOLICA COLORIDA 100ML' },
    { codigo: '4508', descricao: 'CLOREXIDINA 1% 30ML' },
    { codigo: '432', descricao: 'CLOREXIDINA 1% AQUOSA 1000ML' },
    { codigo: '5413', descricao: 'CLOREXIDINA 1% TOPICA SPRAY 50 ML' },
    { codigo: '4847', descricao: 'CLOREXIDINA 1,0% 30ML' },
    { codigo: '4747', descricao: 'CLOREXIDINA 2% ALCOOLICA 100ML' },
    { codigo: '3540', descricao: 'CLOREXIDINA 2% DEGERMANTE 1000ML' },
    { codigo: '4546', descricao: 'CLOREXIDINA 4% DEGERMANTE 1000ML' },
    { codigo: '4490', descricao: 'CLORIDRATO DE CEFEPIMA 1G IM/IV' },
    { codigo: '5536', descricao: 'CLORIDRATO DE CICLOPENTOLATO 10MG/ML' },
    { codigo: '4667', descricao: 'CLORIDRATO DE DOXORRUBICINA 50MG' },
    { codigo: '3158', descricao: 'CLORIDRATO DE ESCETAMINA 50MG/ML 2ML' },
    { codigo: '4941', descricao: 'CLORIDRATO DE HIDROXOCOBALAMINA 5MG/ML' },
    { codigo: '4507', descricao: 'CLORIDRATO DE MOXIFLOXACINO 0,5% 5ML' },
    { codigo: '2687', descricao: 'CLORIDRATO DE MOXIFLOXACINO 0,5% 5ML' },
    { codigo: '2670', descricao: 'CLORIDRATO DE ROPIVACAINA 10MG/ML 20ML' },
    { codigo: '4135', descricao: 'COBALAMINA CRONOATIVA 5000MCG 2,5ML' },
    { codigo: '2252', descricao: 'COBAMAMIDA 1MG+ CLORIDRATO DE CIPROEPTADINA 4M' },
    { codigo: '584', descricao: 'COLAGENASE 0,6 U/G + CLORANFENICOL 0,01G/G BISNAGA' },
    { codigo: '1036', descricao: 'COLAR CERVICAL DE RESGATE G' },
    { codigo: '1586', descricao: 'COLAR CERVICAL DE RESGATE GG' },
    { codigo: '880', descricao: 'COLAR CERVICAL DE RESGATE INFANTIL' },
    { codigo: '1038', descricao: 'COLAR CERVICAL DE RESGATE M' },
    { codigo: '881', descricao: 'COLAR CERVICAL DE RESGATE NEONATO' },
    { codigo: '1037', descricao: 'COLAR CERVICAL DE RESGATE P' },
    { codigo: '1162', descricao: 'COLAR CERVICAL DE RESGATE PP' },
    { codigo: '5731', descricao: 'COLECALCIFEROL 15.000 UI' },
    { codigo: '5579', descricao: 'COLECALCIFEROL 50.000 UI CX/12CPS - VITAMINA D3' },
    { codigo: '5498', descricao: 'COLECALCIFEROL 50.000 UI CX/12CPS VITAMINA D3' },
    { codigo: '2975', descricao: 'COLECALCIFEROL 50.000 UI CX/8CPS-VITAMINA D3' },
    { codigo: '5342', descricao: 'COLECALCIFEROL 50.000 UI VITAMINA D3' },
    { codigo: '5758', descricao: 'COLECALCIFEROL 7.000 UI VITAMINA D3' },
    { codigo: '4037', descricao: 'COLECALCIFEROL 7.000 UI' },
    { codigo: '1451', descricao: 'COLECALCIFEROL 7.000 UI CX/30CPS - VITAMINA D3' },
    { codigo: '4525', descricao: 'COLETOR DE URINA 80 ML' },
    { codigo: '1035', descricao: 'COLETOR DE URINA TIPO BOLSA 2LTS SIS. FECHADO' },
    { codigo: '699', descricao: 'COLETOR DE URINA TIPO BOLSA 2LTS SIS. FECHADO' },
    { codigo: '5646', descricao: 'COLETOR PERFURO CORTANTE 1,5 LTS' },
    { codigo: '151', descricao: 'COLETOR PERFURO CORTANTE 13LTS' },
    { codigo: '2596', descricao: 'COLETOR PERFURO CORTANTE 13LTS' },
    { codigo: '439', descricao: 'COLETOR PERFURO CORTANTE 20LTS' },
    { codigo: '850', descricao: 'COLETOR PERFIRO CORTANTE 3LTS' },
    { codigo: '193', descricao: 'COLETOR PERFURO CORTANTE 7LTS' },
    { codigo: '3680', descricao: 'COLETOR PERFURO CORTANTE 7LTS' },
    { codigo: '751', descricao: 'COMADRE PLASTICA' },
    { codigo: '280', descricao: 'COMPLEXO B 2-B1/B2/B3/B5/B6 AMP 2ML' },
    { codigo: '4390', descricao: 'COMPLEXO B' },
    { codigo: '4754', descricao: 'CONECTOR PARA LUER MACHO E FEMEA' },
    { codigo: '4741', descricao: 'CREME PARA ASSADURAS 30G' },
    { codigo: '2759', descricao: 'CUBA RIM 500ML' },
    { codigo: '2115', descricao: 'CUBA RIM 750ML' },
    { codigo: '5794', descricao: 'CURATIVO TRANSPARENTE 10CM X 10M' },
    { codigo: '5560', descricao: 'CURATIVO TRANSPARENTE 5CM X 10M' },
    { codigo: '3205', descricao: 'CURATIVO ADESIVO HIPOALERGICO - BEGE' },
    { codigo: '4254', descricao: 'CURATIVO ADESIVO HIPOALERGICO REDONDO BEGE' },
    { codigo: '5000', descricao: 'CURATIVO ADESIVO HIPOALERGICO REDONDO BRANCO' },
    { codigo: '4326', descricao: 'CURATIVO ADESIVO HIPOALERGICO INFANTIL' },
    { codigo: '3332', descricao: 'CURATIVO ADESIVO HIPOALERGICO INFANTIL' },
    { codigo: '5211', descricao: 'CURATIVO AQUACEL EXTRA AG+ ESTERIL 10X10CM' },
    { codigo: '4740', descricao: 'CURATIVO BAND-AID C/10UN BEGE' },
    { codigo: '5672', descricao: 'CURATIVO DE ALGINATO DE CALCIO E PRATA 10CM X 10C' },
    { codigo: '4343', descricao: 'CURATIVO HIDROCOLOIDE ESTERIL 20X20CM' },
    { codigo: '5664', descricao: 'CURATIVO TRANSPARENTE CX C/35 UN' },
    { codigo: '4273', descricao: 'CURATIVO TRANSPARENTE CX C/ 40UN' },
    { codigo: '5388', descricao: 'DECANOATO DE NANDROLONA' },
    { codigo: '5001', descricao: 'DERMAFREEZE MINI' },
    { codigo: '4839', descricao: 'DERSANI ORIGINAL - VITAMINA A E E-ACIDOS GRAXOS' },
    { codigo: '273', descricao: 'DESLANOSIDEO 0,2MG/ML 2ML CX C/50 AMP' },
    { codigo: '4584', descricao: 'DESODORANTE REXONA MASCULINO AERO MEN 150ML' },
    { codigo: '5339', descricao: 'DESOXIRRIBONUCLEASE + FIBRINOLISINA + CLORANFENI' },
    { codigo: '5591', descricao: 'DETERGENTE ENZIMATICO 4 ENZIMAS 1000ML' },
    { codigo: '94', descricao: 'DETERGENTE ENZIMATICO 5 ENZIMAS 1000ML' },
    { codigo: '4511', descricao: 'DETERGENTE PRONTO USO 1000ML' },
    { codigo: '49', descricao: 'DEXAMETASONA + NEOMICINA 1,0+3,5MG/ML 5ML' },
    { codigo: '450', descricao: 'DEXAMETASONA 4MG/ML 2,5ML' },
    { codigo: '3915', descricao: 'DEXMEDETOMIDINA 100MCG/ML 2ML C/ 05 F/A IV' },
    { codigo: '2273', descricao: 'DEXTRANA 1MG/ML + HIPROMELOSE 3MG/ML COLIRIO 15' },
    { codigo: '305', descricao: 'DIAZEPAM 10MG/2ML' },
    { codigo: '3496', descricao: 'DICLOFENACO DIETILAMONIO 11,6MG/G 60G CX C/60 UNII' },
    { codigo: '4129', descricao: 'DICLOFENACO DIETILAMONIO 11,6MG/G 60G CX C/90 UNII' },
    { codigo: '1751', descricao: 'DICLOFENACO SODICO 0,1% 5ML SUSP OFT' },
    { codigo: '4275', descricao: 'DIMENIDRINATO 25MG/ML + CLORIDRATO DE PIRIDOXIN,' },
    { codigo: '3822', descricao: 'DIMENIDRINATO 25MG + CLORIDRATO DE PIRIDOXINA 5M' },
    { codigo: '4963', descricao: 'DIOSMINA 450MG + HESPERIDINA 50MG' },
    { codigo: '4062', descricao: 'DIPIRONA 500MG + PROMETAZINA 5MG + ADIFENINA 10M' },
    { codigo: '5015', descricao: 'DIPIRONA MONOIDRATADA 500MG CX C/30CPR' },
    { codigo: '4981', descricao: 'DIPIRONA MONOIDRATADA 500MG' },
    { codigo: '4556', descricao: 'DIPIRONA SODICA 500MG' },
    { codigo: '5215', descricao: 'DIPIRONA SODICA 500MG/ML 10ML' },
    { codigo: '4573', descricao: 'DIPIRONA SODICA 500MG/ML 20ML' },
    { codigo: '651', descricao: 'DIPIRONA SODICA 500MG/ML 2ML' },
    { codigo: '2258', descricao: 'DIPIRONA SODICA 500MG/ML 2ML' },
    { codigo: '3488', descricao: 'DIPIRONA SODICA 50MG 100ML SOLUCAO' },
    { codigo: '730', descricao: 'DOBUTAMINA 250MG/ML 20ML' },
    { codigo: '4698', descricao: 'DOMPERIDONA 10MG CPR' },
    { codigo: '4700', descricao: 'DOMPERIDONA 1MG/ML 100 ML' },
    { codigo: '81', descricao: 'DRENO DE PENROSE N.2 S/GAZE' },
    { codigo: '861', descricao: 'ELETRODO DESC ADULTO C/GEL' },
    { codigo: '3568', descricao: 'ELETRODO DESC ECG ADULTO' },
    { codigo: '5505', descricao: 'ELETRODO DESC ECG ADULTO PCT C/100' },
    { codigo: '3826', descricao: 'ENVELOPE P/ ESTERILIZACAO 15CM X 25CM' },
    { codigo: '5101', descricao: 'ENVELOPE P/ ESTERILIZACAO 15CM X 27CM' },
    { codigo: '5102', descricao: 'ENVELOPE P/ ESTERILIZACAO 9CM X 24,5CM' },
    { codigo: '2036', descricao: 'EQUIPO BURETA' },
    { codigo: '5172', descricao: 'EQUIPO MACRO FLEX C/INJ E RESP LL' },
    { codigo: '1417', descricao: 'EQUIPO MACROGOTAS C/ RESPIRO E FILTRO LUER SLIP (S)' },
    { codigo: '3962', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO C/ FILTRO LI' },
    { codigo: '1544', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO C/ FILTRO LL' },
    { codigo: '5434', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO C/ FILTRO LI' },
    { codigo: '4876', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO LL' },
    { codigo: '1135', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO LS' },
    { codigo: '4239', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO LS' },
    { codigo: '291', descricao: 'EQUIPO MACROGOTAS C/INJETOR E RESPIRO LS' },
    { codigo: '5253', descricao: 'EQUIPO MACROGOTAS FOTOSSENSIVEL' },
    { codigo: '2035', descricao: 'EQUIPO MACROGOTAS FOTOSSENSIVEL' },
    { codigo: '5699', descricao: 'EQUIPO MACROGOTAS FOTOSSENSIVEL' },
    { codigo: '1140', descricao: 'EQUIPO MICROGOTAS C/INJETOR E RESPIRO LS' },
    { codigo: '765', descricao: 'EQUIPO P/ NUTRICAO ENTERAL ESCALONADO' },
    { codigo: '2865', descricao: 'EQUIPO TRANSFUSAO CAMARA DUPLA FILTRO LL 1,5MT' },
    { codigo: '2823', descricao: 'EQUIPO TRANSFUSAO CAMARA DUPLA FILTRO LS 1,5MT' },
    { codigo: '3495', descricao: 'ERITROPOETINA HUMANA 4000UI 1FA + DIL 2ML' },
    { codigo: '2671', descricao: 'ESCOVA DESCARTAVEL C/CLOREXIDINA' },
    { codigo: '3031', descricao: 'ESCOVA DESCARTAVEL C/PVPI' },
    { codigo: '2107', descricao: 'ESFIGMOMANOMETRO DE MESA' },
    { codigo: '1538', descricao: 'ESFIGMOMANOMETRO INFANTIL FECHO VELCRO' },
    { codigo: '1917', descricao: 'ESFIGMOMANOMETRO OBESO' },
    { codigo: '1592', descricao: 'ESFIGMOMANOMETRO S/ESTETO ADULTO FECHO VELCRO' },
    { codigo: '3743', descricao: 'ESPACADOR ADULTO/INFANTIL' },
    { codigo: '3721', descricao: 'ESPACADOR ADULTO/INFANTIL' },
    { codigo: '491', descricao: 'ESPARADRAPO 10CM X 4,5M' },
    { codigo: '4472', descricao: 'ESPARADRAPO 10CM X 4,5M' },
    { codigo: '4168', descricao: 'ESPARADRAPO 5CM X 4,5M' },
    { codigo: '249', descricao: 'ESPATULA DE AYRE' },
    { codigo: '4512', descricao: 'ESPECULO DESCARTAVEL LUBRIFICADO ESTERIL TAM G' },
    { codigo: '1905', descricao: 'ESPECULO DESCARTAVEL N/LUBRIFICADO ESTERIL TAM G' },
    { codigo: '566', descricao: 'ESPECULO DESCARTAVEL N/LUBRIFICADO ESTERIL TAM M' },
    { codigo: '4243', descricao: 'ESPECULO DESCARTAVEL N/LUBRIFICADO ESTERIL TAM M' },
    { codigo: '679', descricao: 'ESPECULO DESCARTAVEL N/LUBRIFICADO ESTERIL TAM P' },
    { codigo: '4230', descricao: 'ESPECULO NASAL INFANTIL DESCARTAVEL' },
    { codigo: '5597', descricao: 'ESPONJA HEMOSTATICA 125X80X10' },
    { codigo: '1767', descricao: 'ESTETOSCOPIO ADULTO DUPLO' },
    { codigo: '2726', descricao: 'ESTETOSCOPIO ADULTO DUPLO' },
    { codigo: '4639', descricao: 'ESTETOSCOPIO ADULTO SIMPLES C/ PROTETOR' },
    { codigo: '1030', descricao: 'ESTETOSCOPIO ADULTO SIMPLES' },
    { codigo: '2089', descricao: 'ESTETOSCOPIO INFANTIL DUPLO C/ PROTETOR' },
    { codigo: '4494', descricao: 'ESTOJO P/INSTRUMENTAL 20X10X5CM' },
    { codigo: '4495', descricao: 'ESTOJO P/INSTRUMENTAL 28X14X6CM' },
    { codigo: '2085', descricao: 'ESTROGENIOS CONJUGADOS 0,625MG' },
    { codigo: '57', descricao: 'ETILEFRINA 10MG/ML 1 ML' },
    { codigo: '2917', descricao: 'EXTENSOR 120CM LL' },
    { codigo: '5277', descricao: 'EXTENSOR 120CM LL' },
    { codigo: '2786', descricao: 'EXTENSOR 120CM LL' },
    { codigo: '5229', descricao: 'EXTENSOR 120CM LS' },
    { codigo: '3427', descricao: 'EXTENSOR 120CM NEONATAL' },
    { codigo: '5390', descricao: 'EXTENSOR 120CM PEDIATRICO' },
    { codigo: '4434', descricao: 'EXTENSOR 20CM LL' },
    { codigo: '5528', descricao: 'EXTENSOR 20CM LL' },
    { codigo: '5682', descricao: 'EXTENSOR 40CM LL' },
    { codigo: '5423', descricao: 'EXTENSOR 40CM LL' },
    { codigo: '3050', descricao: 'EXTENSOR 60CM LL' },
    { codigo: '3640', descricao: 'EXTENSOR 60CM LL' },
    { codigo: '5717', descricao: 'EXTENSOR 60CM LL' },
    { codigo: '5177', descricao: 'FAMOTIDINA PÓ 8MG/ML 53 ML' },
    { codigo: '73', descricao: 'FENITOINA 50MG/ML 5ML' },
    { codigo: '4734', descricao: 'FENOBARBITAL 100MG CX C/20 CPR' },
    { codigo: '259', descricao: 'FENOBARBITAL 100MG/ML 2ML' },
    { codigo: '4621', descricao: 'FENTANILA 50MCG/ML 5ML' },
    { codigo: '5477', descricao: 'FENTANILA 50MCG/ML 5ML' },
    { codigo: '3601', descricao: 'FENTANILA 50MCG/ML 5ML' },
    { codigo: '5110', descricao: 'FERRIPOLIMALTOSE 50MG/ML 30 ML' },
    { codigo: '4229', descricao: 'FEXOFENADINA 120MG CX C/10 CPR' },
    { codigo: '5784', descricao: 'FEXOFENADINA 120MG CX C/10 CPR' },
    { codigo: '4228', descricao: 'FEXOFENADINA 180MG CX C/10CPR' },
    { codigo: '5017', descricao: 'FEXOFENADINA 180MG CX C/10CPR' },
    { codigo: '5642', descricao: 'FEXOFENADINA 180MG CX C/10CPR' },
    { codigo: '5409', descricao: 'FEXOFENADINA 6MG/ML FR 60ML' },
    { codigo: '3267', descricao: 'FIO CATGUT CROMADO 4-0 3.0CM 3/8-75 CM' },
    { codigo: '3794', descricao: 'FIO GUIA HIDROFILICO 0,035 X 150CM' },
    { codigo: '5701', descricao: 'FIO GUIA PARA INTUBACAO 15FR 5.0MM' },
    { codigo: '3676', descricao: 'FIO MONONYLON 0-0 AG 30MM 3/8-45 CM' },
    { codigo: '960', descricao: 'FIO MONONYLON 0-0 AG 30MM 3/8' },
    { codigo: '2639', descricao: 'FIO MONONYLON 1-0 AG 30MM 3/8' },
    { codigo: '3681', descricao: 'FIO MONONYLON 2-0 AG 20MM 3/8-45 CM' },
    { codigo: '2587', descricao: 'FIO MONONYLON 2-0 AG 20MM 3/8-45 CM' },
    { codigo: '554', descricao: 'FIO MONONYLON 2-0 AG 20MM 3/8' },
    { codigo: '3651', descricao: 'FIO MONONYLON 2-0 AG 30MM 3/8-45 CM' },
    { codigo: '2589', descricao: 'FIO MONONYLON 2-0 AG 30MM 3/8-45 CM' },
    { codigo: '839', descricao: 'FIO MONONYLON 2-0 AG 30MM 3/8' },
    { codigo: '251', descricao: 'FIO MONONYLON 3-0 AG 20MM 3/8-45 CM' },
    { codigo: '3641', descricao: 'FIO MONONYLON 3-0 AG 20MM 3/8-45 CM' },
    { codigo: '2590', descricao: 'FIO MONONYLON 3-0 AG 20MM 3/8-45 CM' },
    { codigo: '840', descricao: 'FIO MONONYLON 3-0 AG 25MM 3/8-45 CM' },
    { codigo: '3610', descricao: 'FIO MONONYLON 3-0 AG 30MM 3/8-45 CM' },
    { codigo: '834', descricao: 'FIO MONONYLON 3-0 AG 30MM 3/8' },
    { codigo: '3642', descricao: 'FIO MONONYLON 4-0 AG 20MM 3/8-45 CM' },
    { codigo: '1873', descricao: 'FIO MONONYLON 4-0 AG 20MM 3/8-45 CM' },
    { codigo: '84', descricao: 'FIO MONONYLON 4-0 AG 20MM 3/8' },
    { codigo: '2921', descricao: 'FIO MONONYLON 4-0 AG 24MM 3/8-45 CM' },
    { codigo: '1987', descricao: 'FIO MONONYLON 4-0 AG 25MM 3/8-45 CM' },
    { codigo: '3672', descricao: 'FIO MONONYLON 4-0 AG 30MM 3/8-45 CM' },
    { codigo: '841', descricao: 'FIO MONONYLON 4-0 AG 30MM 3/8' },
    { codigo: '2656', descricao: 'FIO MONONYLON 5-0 AG 15MM 3/8-45 CM' },
    { codigo: '2673', descricao: 'FIO MONONYLON 5-0 AG 16,5MM 3/8-45 CM' },
    { codigo: '701', descricao: 'FIO MONONYLON 5-0 AG 20MM 3/8-45 CM' },
    { codigo: '3643', descricao: 'FIO MONONYLON 5-0 AG 20MM 3/8-45 CM' },
    { codigo: '1445', descricao: 'FIO MONONYLON 5-0 AG 20MM 3/8-45 CM' },
    { codigo: '2592', descricao: 'FIO MONONYLON 5-0 AG 20MM 3/8-45 CM' },
    { codigo: '509', descricao: 'FIO MONONYLON 6-0 AG 20MM 3/8-45 CM' },
    { codigo: '2954', descricao: 'FIO MONONYLON 6-0 AG 20MM 3/8-45 CM' },
    { codigo: '936', descricao: 'FIO MONONYLON 6-0 AG 25MM 3/8-45 CM' },
    { codigo: '3664', descricao: 'FIO POLI-VICRIL 3-0 C/AG 2.0CM 1/2 CC-70 CM' },
    { codigo: '5739', descricao: 'FIO POLIDIOXANONA 2-0/AG 2.6CM 1/2-70CM' },
    { codigo: '5235', descricao: 'FIO POLIDIOXANONA 2-0/AG 3.5CM 1/2-70CM' },
    { codigo: '5740', descricao: 'FIO POLIDIOXANONA 3-0/AG 2.6CM 1/2-70CM' },
    { codigo: '5236', descricao: 'FIO POLIDIOXANONA 3-0/AG 3.5CM 1/2-70CM' },
    { codigo: '5238', descricao: 'FIO POLIDIOXANONA 4-0/AG 2.0CM 1/2-70CM' },
    { codigo: '5741', descricao: 'FIO POLIDIOXANONA 5-0/AG 1.7CM 1/2-70CM' },
    { codigo: '5026', descricao: 'FIO POLIGLACTINA 3-0 C/AG 3.0CM 1/2 CC-70 CM' },
    { codigo: '5185', descricao: 'FIO POLIGLACTINA 4-0 C/AG 3.0CM 1/2 CC-70 CM' },
    { codigo: '5319', descricao: 'FIO POLIGLECAPRONE 0-0/AG 3.5CM 1/2-70CM' },
    { codigo: '5738', descricao: 'FIO POLIGLECAPRONE 0-0/AG 3.6CM 1/2-70CM' },
    { codigo: '5352', descricao: 'FIO POLIGLECAPRONE 1-0/AG 3.5CM 1/2-70CM' },
    { codigo: '5237', descricao: 'FIO POLIGLECAPRONE 2-0/AG 3.1CM 3/8-70CM' },
    { codigo: '5022', descricao: 'FIO POLIGLECAPRONE 2-0/AG 3.5CM 1/2 - 70CM' },
    { codigo: '5021', descricao: 'FIO POLIGLECAPRONE 3-0/AG 3.1CM 3/8-70CM' },
    { codigo: '5122', descricao: 'FIO POLIGLECAPRONE 3-0/AG 3.5CM 1/2-70CM' },
    { codigo: '5737', descricao: 'FIO POLIGLECAPRONE 4-0/AG 2.6CM 1/2-70CM' },
    { codigo: '5227', descricao: 'FIO POLIGLECAPRONE 5-0/AG 1,9CM 3/8-45CM' },
    { codigo: '5023', descricao: 'FIO POLIGLICOLICO 0-0 C/AG 3.0CM 3/8 CC-70 CM' },
    { codigo: '5184', descricao: 'FIO POLIGLICOLICO 1-0 C/AG 3.7CM 1/2 CC-70 CM' },
    { codigo: '5024', descricao: 'FIO POLIGLICOLICO 2-0 C/AG 3.0CM 1/2 CC-70 CM' },
    { codigo: '5025', descricao: 'FIO POLIGLICOLICO 3-0 C/AG 3.0CM 3/8 CC-70 CM' },
    { codigo: '5743', descricao: 'FIO POLIPROPILENO 3-0 C/AG 2.6CM 1/2 CC-75 CM' },
    { codigo: '5694', descricao: 'FITA ADESIVA CREPE 19MM X 50M' },
    { codigo: '5667', descricao: 'FITA ELASTICA PARA FIXACAO DE CURATIVOS HYPAFIX BSI' },
    { codigo: '4818', descricao: 'FITA MICROPORE 10CM X 10M' },
    { codigo: '2932', descricao: 'FITA MICROPORE 10CM X 4,5M' },
    { codigo: '4927', descricao: 'FITA MICROPORE 10CM X 4,5M' },
    { codigo: '4726', descricao: 'FITA MICROPORE 12,5MM X 10M' },
    { codigo: '926', descricao: 'FITA MICROPORE 2,5CM X 10M - BEGE' },
    { codigo: '4510', descricao: 'FITA MICROPORE 2,5CM X 10M-BRANCA' },
    { codigo: '397', descricao: 'FITA MICROPORE 2,5CM X 10M' },
    { codigo: '1857', descricao: 'FITA MICROPORE 2,5CM X 10M' },
    { codigo: '4886', descricao: 'FITA MICROPORE 2,5CM X 4,0M' },
    { codigo: '4057', descricao: 'FITA MICROPORE 5CM X 10M BRANCA' },
    { codigo: '3802', descricao: 'FITA MICROPORE 5CM X 10M' },
    { codigo: '4475', descricao: 'FITA TRANSPORE 10CM X 4,5M' },
    { codigo: '1434', descricao: 'FIXADOR CITOLOGICO 100ML' },
    { codigo: '2755', descricao: 'FLUCONAZOL 150MG CX C/02' },
    { codigo: '5176', descricao: 'FLUMAZENIL 0,1MG/ML 5ML' },
    { codigo: '288', descricao: 'FLUOCINOLONA 0,250 MG+ NEOMICINA 3,50MG+ POLIMI' },
    { codigo: '5099', descricao: 'FLUORESCEINA SODICA 10MG FR/3 ML' },
    { codigo: '3150', descricao: 'FOSFATO DE SÓDIO MONOBASICO 0,16G/ML + DIBASICO (' },
    { codigo: '3968', descricao: 'FRALDA GERIATRICA TAM G' },
    { codigo: '5394', descricao: 'FRALDA GERIATRICA TAM M' },
    { codigo: '5357', descricao: 'FRALDA GERIATRICA TAM P' },
    { codigo: '5118', descricao: 'FRALDA INFANTIL TAM G' },
    { codigo: '4245', descricao: 'FRALDA INFANTIL TAM MB DAY MEGA PCT C/70 UN' },
    { codigo: '4244', descricao: 'FRALDA INFANTIL TAM P B DAY MEGA PCT C/80 UN' },
    { codigo: '5485', descricao: 'FRALDA INFANTIL TAM XXG B DAY MEGA PCT C/40 UN' },
    { codigo: '184', descricao: 'FRASCO DE ALIMENTACAO NUTRI ENTERAL 300ML' },
    { codigo: '3198', descricao: 'FUROSEMIDA 10MG/ML 2ML' },
    { codigo: '2259', descricao: 'FUROSEMIDA 10MG/ML 2ML' },
    { codigo: '5547', descricao: 'GARROTE ADULTO AZUL C/TRAVA' },
    { codigo: '2288', descricao: 'GARROTE INFANTIL AZUL C/TRAVA' },
    // A lista continua...
    { codigo: '1988', descricao: 'PINCA ADSON 12CM COM DENTE' }
];

document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    const perfilUsuario = sessionStorage.getItem('perfilUsuario');

    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('welcome-user').textContent = `Bem-vindo(a), ${usuarioLogado}!`;
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });

    function controlarAcesso() {
        const todosElementosComPerfil = document.querySelectorAll('[data-perfil]');
        todosElementosComPerfil.forEach(el => {
            const perfisPermitidos = el.dataset.perfil.split(',');
            if (!perfisPermitidos.includes(perfilUsuario)) {
                el.style.display = 'none';
            }
        });
        const primeiraAbaVisivel = document.querySelector('.nav-link:not([style*="display: none"])');
        if (primeiraAbaVisivel) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            primeiraAbaVisivel.classList.add('active');
            showSection(primeiraAbaVisivel.getAttribute('href').substring(1));
        }
    }

    const mockData = {
        fornecedores: [ { id: 1, nome: 'Fornecedor Exemplo', tipo: 'Fornecedor', documento: null } ],
        registros: [
            { id: 1, data: '2025-07-01', produto: 'DIPIRONA SODICA 500MG/ML 20ML (Código: 4573)', lote: 'LOTE001', validade: '2027-01-01', fornecedor: 'Fornecedor Exemplo', responsavel: 'otavio', status: 'Conforme', observacoes: 'Tudo OK.'}
        ],
        pops: [
            { id: 1, titulo: 'POP-001: Higienização das Mãos', setor: 'Qualidade', versao: 1, objetivo: 'Garantir a correta assepsia.', conteudo: 'Procedimento detalhado aqui.', historico: [{ versao: 1, data: new Date().toLocaleDateString('pt-BR'), descricao: 'Versão inicial criada.', responsavel: 'danieli' }] }
        ],
        proximoIdFornecedor: 2, proximoIdRegistro: 2, proximoIdPop: 2,
    };

    let fornecedores = JSON.parse(localStorage.getItem('fornecedoresQualidade')) || mockData.fornecedores;
    let registros = JSON.parse(localStorage.getItem('registrosQualidade')) || mockData.registros;
    let pops = JSON.parse(localStorage.getItem('popsQualidade')) || mockData.pops;
    let proximoIdFornecedor = parseInt(localStorage.getItem('proximoIdFornecedorQualidade')) || mockData.proximoIdFornecedor;
    let proximoIdRegistro = parseInt(localStorage.getItem('proximoIdRegistroQualidade')) || mockData.proximoIdRegistro;
    let proximoIdPop = parseInt(localStorage.getItem('proximoIdPopQualidade')) || mockData.proximoIdPop;

    function salvarDadosNoStorage() {
        localStorage.setItem('fornecedoresQualidade', JSON.stringify(fornecedores));
        localStorage.setItem('registrosQualidade', JSON.stringify(registros));
        localStorage.setItem('popsQualidade', JSON.stringify(pops));
        localStorage.setItem('proximoIdFornecedorQualidade', proximoIdFornecedor.toString());
        localStorage.setItem('proximoIdRegistroQualidade', proximoIdRegistro.toString());
        localStorage.setItem('proximoIdPopQualidade', proximoIdPop.toString());
    }

    const mainNavLinks = document.querySelectorAll('#main-nav a');
    const mainSections = document.querySelectorAll('main > .card');
    const messageArea = document.getElementById('message-area-notifications');
    const resumoDiv = document.getElementById('resumo');
    const tabelaRegistrosBody = document.querySelector('#tabela-registros tbody');
    const registroForm = document.getElementById('registroForm');
    const gotoAddInspectionBtn = document.getElementById('goto-add-inspection-btn');
    const dropdownFornecedores = document.getElementById('fornecedor');
    const produtoCodigoInput = document.getElementById('produtoCodigo');
    const produtoDescricaoSpan = document.getElementById('produtoDescricao');
    const produtoHiddenInput = document.getElementById('produto');
    const fornecedorForm = document.getElementById('fornecedorForm');
    const tabelaFornecedoresBody = document.querySelector('#tabela-fornecedores tbody');
    const popForm = document.getElementById('popForm');
    const tabelaPopsBody = document.querySelector('#tabela-pops tbody');
    const popModal = document.getElementById('popModal');
    const historicoPopModal = document.getElementById('historicoPopModal');
    const cancelarEdicaoPopBtn = document.getElementById('cancelarEdicaoPop');

    function displayMessage(message, type, duration = 4000) {
        messageArea.textContent = message;
        messageArea.className = `message ${type}`;
        messageArea.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => { messageArea.style.display = 'none'; }, duration);
    }

    function showSection(sectionId) {
        mainSections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            mainNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    gotoAddInspectionBtn.addEventListener('click', () => {
        const responsavelInput = document.getElementById('responsavel');
        responsavelInput.value = usuarioLogado;
        responsavelInput.readOnly = true;
        showSection('formulario-card');
        mainNavLinks.forEach(l => l.classList.remove('active'));
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    produtoCodigoInput.addEventListener('input', () => {
        const codigo = produtoCodigoInput.value;
        const produtoEncontrado = produtosDoEstoque.find(p => p.codigo === codigo);

        if (produtoEncontrado) {
            produtoDescricaoSpan.textContent = produtoEncontrado.descricao;
            produtoHiddenInput.value = `${produtoEncontrado.descricao} (Código: ${produtoEncontrado.codigo})`;
        } else {
            produtoDescricaoSpan.textContent = 'Produto não encontrado.';
            produtoHiddenInput.value = '';
        }
    });

    function renderRegistros() {
         resumoDiv.innerHTML = `<p>Total de Inspeções: ${registros.length}</p>`;
         tabelaRegistrosBody.innerHTML = '';
         registros.forEach(r => {
             const row = tabelaRegistrosBody.insertRow();
             row.innerHTML = `<td>${r.id}</td><td>${r.data}</td><td>${r.produto}</td><td>${r.lote}</td><td>${r.validade}</td><td>${r.fornecedor}</td><td>${r.responsavel}</td><td>${r.status}</td><td>-</td>`;
         });
    }

    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!produtoHiddenInput.value) {
            displayMessage('Código de produto inválido ou não encontrado.', 'error');
            return;
        }
        const novoRegistro = {
            id: proximoIdRegistro++,
            data: document.getElementById('data').value,
            produto: produtoHiddenInput.value,
            lote: document.getElementById('lote').value,
            validade: document.getElementById('validade').value,
            fornecedor: document.getElementById('fornecedor').value,
            responsavel: document.getElementById('responsavel').value,
            status: document.getElementById('status').value,
            observacoes: document.getElementById('observacoes').value
        };
        registros.push(novoRegistro);
        salvarDadosNoStorage();
        renderRegistros();
        showSection('resumo-card');
        displayMessage('Inspeção salva com sucesso!', 'success');
        registroForm.reset();
        produtoDescricaoSpan.textContent = '';
        document.getElementById('responsavel').value = usuarioLogado;
    });

    function renderFornecedores() {
        tabelaFornecedoresBody.innerHTML = '';
        fornecedores.forEach(f => {
            const docHTML = f.documento ? `<a href="#" onclick="alert('Simulação de visualização: ${f.documento}')">${f.documento}</a>` : 'Nenhum';
            const row = tabelaFornecedoresBody.insertRow();
            row.innerHTML = `<td>${f.id}</td><td>${f.nome}</td><td>${f.tipo}</td><td>${docHTML}</td><td><button class="action-button remove-fornecedor-btn" data-id="${f.id}">Remover</button></td>`;
        });
    }

    function popularDropdownFornecedores() {
        dropdownFornecedores.innerHTML = '<option value="">-- Selecione --</option>';
        fornecedores.forEach(f => dropdownFornecedores.innerHTML += `<option value="${f.nome}">${f.nome}</option>`);
    }

    fornecedorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('fornecedorNome').value;
        const tipo = document.getElementById('fornecedorTipo').value;
        const arquivo = document.getElementById('fornecedorDoc').files[0];
        fornecedores.push({ id: proximoIdFornecedor++, nome: nome.trim(), tipo: tipo, documento: arquivo ? arquivo.name : null });
        salvarDadosNoStorage();
        renderFornecedores();
        popularDropdownFornecedores();
        fornecedorForm.reset();
        displayMessage('Fornecedor salvo!', 'success');
    });

    tabelaFornecedoresBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-fornecedor-btn')) {
            const id = parseInt(e.target.dataset.id);
            if (confirm('Deseja remover este fornecedor?')) {
                fornecedores = fornecedores.filter(f => f.id !== id);
                salvarDadosNoStorage();
                renderFornecedores();
                popularDropdownFornecedores();
            }
        }
    });
    
    function renderPops() {
        tabelaPopsBody.innerHTML = '';
        pops.forEach(p => {
            const ultimaAlteracao = p.historico[0];
            const row = tabelaPopsBody.insertRow();
            row.innerHTML = `
                <td>${p.id}</td><td>${p.titulo}</td><td>${p.setor}</td><td>${p.versao}</td>
                <td>${ultimaAlteracao.responsavel}</td>
                <td>
                    <button class="action-button view-pop-btn" data-id="${p.id}">Ver</button>
                    <button class="action-button edit-pop-btn" data-id="${p.id}">Editar</button>
                    <button class="action-button hist-pop-btn" data-id="${p.id}">Histórico</button>
                </td>`;
        });
    }

    function resetPopForm() {
        popForm.reset();
        document.getElementById('popId').value = '';
        document.getElementById('popAlteracao-group').style.display = 'none';
        cancelarEdicaoPopBtn.style.display = 'none';
    }

    popForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('popId').value;
        const titulo = document.getElementById('popTitulo').value;
        const setor = document.getElementById('popSetor').value;
        const objetivo = document.getElementById('popObjetivo').value;
        const conteudo = document.getElementById('popConteudo').value;
        const alteracaoDesc = document.getElementById('popAlteracao').value;

        if (id) {
            if (!alteracaoDesc) {
                displayMessage('A descrição da alteração é obrigatória para editar um POP.', 'error');
                return;
            }
            const index = pops.findIndex(p => p.id == id);
            if (index > -1) {
                const pop = pops[index];
                pop.titulo = titulo;
                pop.setor = setor;
                pop.objetivo = objetivo;
                pop.conteudo = conteudo;
                pop.versao += 1;
                pop.historico.unshift({ versao: pop.versao, data: new Date().toLocaleDateString('pt-BR'), descricao: alteracaoDesc, responsavel: usuarioLogado });
            }
        } else {
            const novoPop = {
                id: proximoIdPop++,
                titulo, setor, objetivo, conteudo, versao: 1,
                historico: [{ versao: 1, data: new Date().toLocaleDateString('pt-BR'), descricao: 'Versão inicial criada.', responsavel: usuarioLogado }]
            };
            pops.push(novoPop);
        }
        salvarDadosNoStorage();
        renderPops();
        resetPopForm();
        displayMessage('POP salvo com sucesso!', 'success');
    });

    tabelaPopsBody.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (!id) return;
        const pop = pops.find(p => p.id == id);
        if (!pop) return;

        if (e.target.classList.contains('edit-pop-btn')) {
            document.getElementById('popId').value = pop.id;
            document.getElementById('popTitulo').value = pop.titulo;
            document.getElementById('popSetor').value = pop.setor;
            document.getElementById('popObjetivo').value = pop.objetivo;
            document.getElementById('popConteudo').value = pop.conteudo;
            document.getElementById('popAlteracao-group').style.display = 'block';
            cancelarEdicaoPopBtn.style.display = 'inline-block';
            popForm.scrollIntoView({ behavior: 'smooth' });
        }
        // A lógica para os botões 'Ver' e 'Histórico' pode ser adicionada aqui.
    });

    cancelarEdicaoPopBtn.addEventListener('click', resetPopForm);
    
    // --- INÍCIO DA NOVA LÓGICA DE RELATÓRIOS ---

    const gerarRelatorioBtn = document.getElementById('gerar-relatorio-btn');
    const relatorioConteudoDiv = document.getElementById('relatorio-conteudo');
    const graficosContainer = document.getElementById('graficos-container');
    let inspecoesChartInstance = null;
    let popsChartInstance = null;

    function gerarRelatorioCompleto() {
        // 1. Limpa o relatório e gráficos anteriores para evitar duplicidade
        relatorioConteudoDiv.innerHTML = '';
        graficosContainer.style.display = 'none';
        if (inspecoesChartInstance) {
            inspecoesChartInstance.destroy();
        }
        if (popsChartInstance) {
            popsChartInstance.destroy();
        }

        // 2. Gera a tabela de Não Conformidades
        const naoConformes = registros.filter(r => r.status === 'Não Conforme');
        let htmlRelatorio = '<h3>Relatório de Não Conformidades</h3>';
        if (naoConformes.length > 0) {
            htmlRelatorio += `
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>ID</th><th>Data</th><th>Produto</th><th>Lote</th><th>Fornecedor</th><th>Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${naoConformes.map(r => `
                            <tr>
                                <td>${r.id}</td>
                                <td>${new Date(r.data).toLocaleDateString('pt-BR')}</td>
                                <td>${r.produto}</td>
                                <td>${r.lote}</td>
                                <td>${r.fornecedor}</td>
                                <td>${r.responsavel}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>`;
        } else {
            htmlRelatorio += '<p>Nenhuma não conformidade registrada.</p>';
        }

        // 3. Gera a tabela de POPs
        htmlRelatorio += '<h3 style="margin-top: 30px;">Relatório de POPs Cadastrados</h3>';
        if (pops.length > 0) {
            htmlRelatorio += `
                <table class="report-table">
                    <thead>
                        <tr>
                            <th>ID</th><th>Título</th><th>Setor</th><th>Versão</th><th>Última Alteração por</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pops.map(p => `
                            <tr>
                                <td>${p.id}</td>
                                <td>${p.titulo}</td>
                                <td>${p.setor}</td>
                                <td>${p.versao}</td>
                                <td>${p.historico[0].responsavel}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>`;
        } else {
            htmlRelatorio += '<p>Nenhum POP cadastrado.</p>';
        }
        
        relatorioConteudoDiv.innerHTML = htmlRelatorio;

        // 4. Gera os gráficos e exibe o container
        gerarGraficos();
        graficosContainer.style.display = 'block';

        displayMessage('Relatório completo gerado com sucesso!', 'success', 3000);
    }

    function gerarGraficos() {
        // Dados para o Gráfico de Inspeções (Pizza)
        const conformesCount = registros.filter(r => r.status === 'Conforme').length;
        const naoConformesCount = registros.filter(r => r.status === 'Não Conforme').length;
        
        const inspecoesCtx = document.getElementById('inspecoesChart').getContext('2d');
        inspecoesChartInstance = new Chart(inspecoesCtx, {
            type: 'pie',
            data: {
                labels: ['Conforme', 'Não Conforme'],
                datasets: [{
                    label: 'Status das Inspeções',
                    data: [conformesCount, naoConformesCount],
                    backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(220, 53, 69, 0.8)'],
                    borderColor: ['#ffffff', '#ffffff'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: 'top' } }
            }
        });

        // Dados para o Gráfico de POPs (Barras)
        const popsPorSetor = pops.reduce((acc, pop) => {
            acc[pop.setor] = (acc[pop.setor] || 0) + 1;
            return acc;
        }, {});
        const setores = Object.keys(popsPorSetor);
        const popsCount = Object.values(popsPorSetor);

        const popsCtx = document.getElementById('popsChart').getContext('2d');
        popsChartInstance = new Chart(popsCtx, {
            type: 'bar',
            data: {
                labels: setores,
                datasets: [{
                    label: 'Número de POPs por Setor',
                    data: popsCount,
                    backgroundColor: 'rgba(78, 141, 245, 0.8)',
                    borderColor: 'rgba(0, 64, 128, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    gerarRelatorioBtn.addEventListener('click', gerarRelatorioCompleto);
    
    // --- FIM DA NOVA LÓGICA DE RELATÓRIOS ---

    function init() {
        controlarAcesso();
        renderFornecedores();
        popularDropdownFornecedores();
        renderRegistros();
        renderPops();
    }

    init();
});
