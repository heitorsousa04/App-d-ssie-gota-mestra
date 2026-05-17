export interface PlantaLuz {
  nome: string;
  luzMinima: string;
  luzIdeal: string;
  falta: string;
  excesso?: string;
}

export const plantasLuzData: PlantaLuz[] = [
  { nome: "Pothos/Jiboia", luzMinima: "50 fc", luzIdeal: "100-150 fc", falta: "perda de variegação", excesso: "folhas pálidas" },
  { nome: "Sansevieria/Espada", luzMinima: "50 fc", luzIdeal: "100-200 fc", falta: "crescimento travado", excesso: "queimaduras secas" },
  { nome: "Zamioculca", luzMinima: "50 fc", luzIdeal: "150 fc", falta: "não solta brotos travada" },
  { nome: "Lírio da Paz", luzMinima: "50 fc", luzIdeal: "150 fc", falta: "não floresce", excesso: "folhas queimadas" },
  { nome: "Dracenas", luzMinima: "50 fc", luzIdeal: "200 fc", falta: "queda de folhas inferiores" },
  { nome: "Aglaonema", luzMinima: "50 fc", luzIdeal: "100 fc", falta: "folhas fracas e caídas" },
  { nome: "Philodendron", luzMinima: "50 fc", luzIdeal: "150-250 fc", falta: "folhas pequenas e caules longos" },
  { nome: "Antúrio", luzMinima: "100 fc", luzIdeal: "200-300 fc", falta: "para de dar flores" },
  { nome: "Samambaias", luzMinima: "100 fc", luzIdeal: "250 fc", falta: "seca os brotos", excesso: "queima folíolos" },
  { nome: "Ficus Lyrata", luzMinima: "100 fc", luzIdeal: "300+ fc", falta: "queda massiva de folhas" },
  { nome: "Orquídea Phalaenopsis", luzMinima: "100 fc", luzIdeal: "250 fc", falta: "folhas verde-escuro", excesso: "folhas roxas" },
  { nome: "Croton", luzMinima: "100 fc", luzIdeal: "300+ fc", falta: "perde as cores vibrantes fica verde" },
  { nome: "Palmeira Ráfis", luzMinima: "100 fc", luzIdeal: "200 fc", falta: "pontas pretas e secas" },
  { nome: "Begônia", luzMinima: "300 fc", luzIdeal: "400-600 fc", falta: "fungos", excesso: "bordas murchas" },
  { nome: "Monstera Deliciosa", luzMinima: "300 fc", luzIdeal: "500+ fc", falta: "folhas sem furos fenestras" },
  { nome: "Cactos e Suculentas", luzMinima: "300 fc", luzIdeal: "800-1000+ fc", falta: "estiolamento planta estica" },
  { nome: "Jade/Crassula", luzMinima: "300 fc", luzIdeal: "Sol direto", falta: "folhas moles e queda", excesso: "manchas" },
  { nome: "Citrinos", luzMinima: "300 fc", luzIdeal: "Sol pleno", falta: "não produz frutos" },
  { nome: "Rosa do Deserto", luzMinima: "300 fc", luzIdeal: "Sol intenso", falta: "não floresce apodrece fácil" },
  { nome: "Hoya/Flor de Cera", luzMinima: "300 fc", luzIdeal: "Luz forte", falta: "não floresce" },
  { nome: "Ficus Benjamina", luzMinima: "300 fc", luzIdeal: "500 fc", falta: "queda de folhas ao mudar de lugar" },
  { nome: "Tradescantia", luzMinima: "100 fc", luzIdeal: "300 fc", falta: "perde o roxo caules pelados" },
  { nome: "Caladium", luzMinima: "100 fc", luzIdeal: "300 fc", falta: "cores pálidas dormência precoce" },
  { nome: "Peperômia", luzMinima: "100 fc", luzIdeal: "200 fc", falta: "perda de brilho e vigor" },
  { nome: "Dieffenbachia", luzMinima: "100 fc", luzIdeal: "250 fc", falta: "tronco murcho e fraco" }
];

export const janelasData = [
  { orientacao: "Norte (A Janela de Ouro)", sol: "Sol intenso quase o dia todo", intensidade: "Alta", plantas: "Cactos; Suculentas; Rosa do Deserto; Jade e Ficus", justificativa: "Plantas de deserto precisam de radiação direta para floração" },
  { orientacao: "Leste (O Sol Gentil)", sol: "Sol direto apenas pela manhã até 10h-11h", intensidade: "Média-Alta", plantas: "Orquídeas; Samambaias; Antúrios; Jade", justificativa: "Sol da manhã fresco não queima folhas sensíveis mas dá energia para florir" },
  { orientacao: "Oeste (O Sol Abrasador)", sol: "Sol direto à tarde das 13h até o pôr do sol", intensidade: "Muito Alta", plantas: "Sansevierias; Jiboias; Filodendros (distantes da vidraça)", justificativa: "Calor intenso; plantas de sombra precisam estar a pelo menos 1,5m da janela" },
  { orientacao: "Sul (A Janela Sombria)", sol: "Sem sol direto; apenas claridade constante", intensidade: "Baixa", plantas: "Zamioculca; Espada de São Jorge; Aglaonema; Lírio da Paz", justificativa: "Ideal para plantas de sub-bosque que queimam com qualquer sol direto" }
];

export const sinaisVisuaisData = [
  { nome: "Zamioculca", sintoma: "folhas novas com pescoço muito longo e caídas", causa: "falta" },
  { nome: "Orquídea", sintoma: "folhas cor de berinjela/roxas (excesso) ou verde-garrafa escuro (falta)", causa: "excesso/falta" },
  { nome: "Jade", sintoma: "manchas cinzas/marrons no centro da folha", causa: "excesso" },
  { nome: "Monstera", sintoma: "folhas novas vindo inteiras sem nenhum recorte", causa: "falta" },
  { nome: "Suculentas", sintoma: "planta começa a subir perdendo o formato de roseta revelando o caule", causa: "falta - estiolamento" },
  { nome: "Jiboia", sintoma: "folhas ficam totalmente verdes perdendo o amarelo/branco", causa: "falta" },
  { nome: "Lírio da Paz", sintoma: "pontas secando muito rápido mesmo com terra úmida", causa: "excesso/calor" },
  { nome: "Croton", sintoma: "folhas caindo ainda verdes (falta brusca) ou cores desbotadas (falta gradual)", causa: "falta" },
  { nome: "Begônia", sintoma: "manchas que parecem papel seco", causa: "excesso" },
  { nome: "Rosa do Deserto", sintoma: "galhos finos que não aguentam o peso das folhas", causa: "falta" }
];
