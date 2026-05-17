export interface Category {
  id: string;
  title: string;
  emoji: string;
  count: number;
}

export interface Recipe {
  id: number;
  categoryId: string;
  title: string;
  causa: string;
  ingredientes: string;
  preparo: string;
  aplicacao: string;
  resultado: string;
}

export const categories: Category[] = [
  { id: '1', title: 'Raízes e Solo', emoji: '🌱', count: 5 },
  { id: '2', title: 'Folhas e Caules', emoji: '🍃', count: 5 },
  { id: '3', title: 'Pragas Básicas', emoji: '🐛', count: 5 },
  { id: '4', title: 'Espécies Especiais', emoji: '🌸', count: 6 },
  { id: '5', title: 'Pragas Avançadas', emoji: '🦠', count: 4 },
  { id: '6', title: 'Floração e Estética', emoji: '💐', count: 5 },
  { id: '7', title: 'Nutrição Caseira', emoji: '🌿', count: 5 },
  { id: '8', title: 'Resgates Finais', emoji: '🏥', count: 10 },
  { id: '9', title: 'Receitas Especiais', emoji: '⭐', count: 5 },
];

export const recipes: Recipe[] = [
  // CATEGORIA 1; RAÍZES E SOLO
  {
    id: 1,
    categoryId: '1',
    title: 'Caule Mole ou Melado (A Gota Mestra)',
    causa: 'Excesso de umidade que gera fungos e apodrece a planta de baixo para cima.',
    ingredientes: 'Água filtrada; Água Oxigenada 10 volumes e 1 gota de detergente neutro.',
    preparo: 'Misture 200ml de água com 1 colher de sopa de água oxigenada e o detergente.',
    aplicacao: 'Pingue diretamente na terra perto do caule afetado para oxigenar as raízes.',
    resultado: 'Interrupção do apodrecimento e raízes voltando a respirar em 24h.'
  },
  {
    id: 2,
    categoryId: '1',
    title: 'Terra Dura e Sufocante',
    causa: 'Substrato industrial que compactou e não deixa a água passar.',
    ingredientes: 'Areia grossa de construção ou pedriscos finos.',
    preparo: 'Use os itens secos e limpos.',
    aplicacao: 'Fure a terra com um palito e preencha os canais com areia para criar drenagem.',
    resultado: 'Solo mais soltinho e água chegando onde a planta precisa.'
  },
  {
    id: 3,
    categoryId: '1',
    title: 'Planta Travada que não cresce',
    causa: 'Falta de estímulo e nutrientes básicos no solo.',
    ingredientes: 'Borra de café seca e casca de ovo triturada.',
    preparo: 'Seque as cascas; triture até virar pó e misture com a borra seca.',
    aplicacao: 'Espalhe uma colher sobre a terra e misture levemente a cada 30 dias.',
    resultado: 'Explosão de novos brotos e folhas mais fortes.'
  },
  {
    id: 4,
    categoryId: '1',
    title: 'Raízes Expostas ou Saindo pelo Vaso',
    causa: 'O vaso ficou pequeno demais para a planta prosperar.',
    ingredientes: 'Novo vaso um pouco maior e substrato novo.',
    preparo: 'Prepare o novo vaso com furos de drenagem.',
    aplicacao: 'Mude a planta com cuidado; sem quebrar o torrão de raízes.',
    resultado: 'Espaço para a planta crescer e ganhar vigor.'
  },
  {
    id: 5,
    categoryId: '1',
    title: 'Raízes Brancas e Secas (Desidratação)',
    causa: 'Falta de rega profunda ou ar muito seco no apartamento.',
    ingredientes: 'Água em temperatura ambiente.',
    preparo: 'Encha uma bacia com água.',
    aplicacao: 'Coloque o vaso dentro da bacia por 15 minutos até a terra encharcar bem.',
    resultado: 'Raízes hidratadas e folhas voltando a ficar firmes.'
  },

  // CATEGORIA 2; FOLHAS E CAULES
  {
    id: 6,
    categoryId: '2',
    title: 'Folhas Amarelando na Base',
    causa: 'Envelhecimento natural ou excesso de água acumulada no fundo.',
    ingredientes: 'Canela em pó.',
    preparo: 'Use a canela pura.',
    aplicacao: 'Corte a folha amarela e polvilhe canela no corte para cicatrizar.',
    resultado: 'Cicatrização rápida e proteção contra fungos.'
  },
  {
    id: 7,
    categoryId: '2',
    title: 'Pontas de Folhas Queimadas ou Secas',
    causa: 'Falta de umidade no ar ou cloro excessivo na água da torneira.',
    ingredientes: 'Água descansada por 24h.',
    preparo: 'Deixe a água num balde aberto de um dia para o outro.',
    aplicacao: 'Use essa água para regar e borrife as folhas nos dias quentes.',
    resultado: 'Fim das pontas marrons nas folhas novas.'
  },
  {
    id: 8,
    categoryId: '2',
    title: 'Folhas com Manchas Pretas Meladas',
    causa: 'Ataque de fungos por falta de ventilação.',
    ingredientes: 'Leite de caixinha e água.',
    preparo: 'Misture 1 parte de leite para 9 partes de água.',
    aplicacao: 'Borrife nas folhas afetadas uma vez por semana.',
    resultado: 'Controle do fungo e folhas mais limpas.'
  },
  {
    id: 9,
    categoryId: '2',
    title: 'Folhas Pálidas e Sem Brilho',
    causa: 'Falta de magnésio ou luz insuficiente.',
    ingredientes: 'Sal de Epsom e água.',
    preparo: 'Dilua 1 colher de chá de sal em 1 litro de água.',
    aplicacao: 'Regue a planta com essa mistura uma vez por mês.',
    resultado: 'Folhas com verde mais intenso e brilhante.'
  },
  {
    id: 10,
    categoryId: '2',
    title: 'Folhas Caídas e Tristes',
    causa: 'Choque térmico ou falta de energia pós-mudança.',
    ingredientes: 'Complexo B (vitamina de farmácia) e água.',
    preparo: 'Dilua 1 comprimido ou 10 gotas em 1 litro de água.',
    aplicacao: 'Regue a planta sentida para dar um ânimo extra.',
    resultado: 'Recuperação do vigor e folhas levantadas.'
  },

  // CATEGORIA 3; PRAGAS BÁSICAS
  {
    id: 11,
    categoryId: '3',
    title: 'Cochonilhas Algodonosas (Bichinhos brancos)',
    causa: 'Praga que suga a seiva em ambientes abafados.',
    ingredientes: 'Detergente neutro; álcool 70% e água.',
    preparo: 'Misture 500ml de água; 1 colher de detergente e 1 de álcool.',
    aplicacao: 'Limpe os bichinhos com um cotonete embebido na mistura.',
    resultado: 'Eliminação total da praga e proteção da planta.'
  },
  {
    id: 12,
    categoryId: '3',
    title: 'Pulgões (Bichinhos verdes ou pretos)',
    causa: 'Insetos que atacam brotos novos e folhas tenras.',
    ingredientes: 'Vinagre de maçã e água.',
    preparo: '1 colher de sopa de vinagre para 1 litro de água.',
    aplicacao: 'Borrife no final da tarde em toda a planta.',
    resultado: 'Expulsão dos pulgões sem agredir as folhas.'
  },
  {
    id: 13,
    categoryId: '3',
    title: 'Ácaros (Teias minúsculas nas folhas)',
    causa: 'Ar muito seco e falta de limpeza nas folhas.',
    ingredientes: 'Óleo de cozinha e detergente.',
    preparo: 'Misture 1 colher de óleo e 1 de detergente em 500ml de água.',
    aplicacao: 'Borrife e limpe com pano macio para sufocar os ácaros.',
    resultado: 'Folhas limpas e livres de teias.'
  },
  {
    id: 14,
    categoryId: '3',
    title: 'Mosquinhas da Terra (Fungus Gnats)',
    causa: 'Terra sempre encharcada e matéria orgânica em decomposição.',
    ingredientes: 'Canela em pó ou cravo-da-índia.',
    preparo: 'Use a canela em pó diretamente.',
    aplicacao: 'Polvilhe generosamente sobre a terra seca.',
    resultado: 'Interrupção do ciclo das mosquinhas e solo perfumado.'
  },
  {
    id: 15,
    categoryId: '3',
    title: 'Formigas no Vaso',
    causa: 'Presença de pulgões ou cochonilhas que atraem as formigas.',
    ingredientes: 'Borra de café fresca.',
    preparo: 'Use a borra que sobrou do café da manhã.',
    aplicacao: 'Coloque ao redor do vaso para criar uma barreira de cheiro.',
    resultado: 'Afastamento das formigas de forma natural.'
  },

  // CATEGORIA 4; ESPÉCIES ESPECIAIS
  {
    id: 16,
    categoryId: '4',
    title: 'Orquídea com Raízes Podres',
    causa: 'Vaso sem drenagem ou substrato velho demais.',
    ingredientes: 'Canela em pó e extrato de própolis.',
    preparo: 'Misture os dois até formar uma pasta.',
    aplicacao: 'Corte as raízes mortas e passe a pasta nos cortes.',
    resultado: 'Proteção total contra novos fungos e novas raízes surgindo.'
  },
  {
    id: 17,
    categoryId: '4',
    title: 'Suculentas Estioladas (Pescoçudas)',
    causa: 'Falta de luz solar direta; fazendo a planta esticar.',
    ingredientes: 'Sol direto e tesoura limpa.',
    preparo: 'Esterilize a tesoura no fogo.',
    aplicacao: 'Corte o topo da planta e mude para um local ensolarado.',
    resultado: 'A base dará novos filhotes e o topo virará uma nova planta compacta.'
  },
  {
    id: 18,
    categoryId: '4',
    title: 'Banho de Vida com Água de Arroz',
    causa: 'Planta desnutrida e sem cor.',
    ingredientes: 'Água da primeira lavagem do arroz sem sal.',
    preparo: 'Reserve a água esbranquiçada do arroz.',
    aplicacao: 'Use para regar suas plantas uma vez por semana.',
    resultado: 'Folhagem mais verde e planta com mais energia.'
  },
  {
    id: 19,
    categoryId: '4',
    title: 'Ficus com Folhas Caindo em Excesso',
    causa: 'Choque de mudança de lugar ou corrente de ar frio.',
    ingredientes: 'Complexo B líquido e água.',
    preparo: '10 gotas de Complexo B em 1 litro de água em temperatura ambiente.',
    aplicacao: 'Regue a planta e evite qualquer mudança de lugar por 30 dias.',
    resultado: 'Queda de folhas interrompida e novos brotos surgindo em 2 a 3 semanas.'
  },
  {
    id: 20,
    categoryId: '4',
    title: 'Chá de Casca de Banana (Potássio)',
    causa: 'Planta que não floresce ou está com caule fraco.',
    ingredientes: 'Cascas de banana e água.',
    preparo: 'Ferva as cascas por 10 min e deixe esfriar.',
    aplicacao: 'Regue a planta com esse chá frio a cada 15 dias.',
    resultado: 'Estímulo à floração e fortalecimento geral.'
  },
  {
    id: 21,
    categoryId: '4',
    title: 'Orquídea com Folhas Roxas',
    causa: 'Excesso de luminosidade.',
    ingredientes: 'Local com luz filtrada (cortina fina).',
    preparo: 'Ajuste ambiental.',
    aplicacao: 'Mova a orquídea para um local com menos luz direta mas ainda iluminado.',
    resultado: 'As folhas voltam ao verde normal gradualmente.'
  },

  // CATEGORIA 5; PRAGAS AVANÇADAS
  {
    id: 22,
    categoryId: '5',
    title: 'Zamioculca com Rizoma Melado',
    causa: 'Podridão por excesso de água acumulada no fundo do vaso.',
    ingredientes: 'Canela em pó e papel toalha.',
    preparo: 'Retire a planta do vaso e limpe a terra das batatas.',
    aplicacao: 'Corte a parte melada; seque com papel e cubra a ferida com canela pura antes de replantar em solo seco.',
    resultado: 'Interrupção da podridão e cicatrização do rizoma.'
  },
  {
    id: 23,
    categoryId: '5',
    title: 'Cochonilha de Carapaça (Pontinhos marrons duros)',
    causa: 'Inseto sugador que cria uma armadura de proteção.',
    ingredientes: 'Álcool 70% e óleo de cozinha.',
    preparo: 'Mistura de 1 colher de sopa de álcool com 1 colher de chá de óleo.',
    aplicacao: 'Use um cotonete para remover cada casquinha manualmente com a mistura.',
    resultado: 'Morte do inseto por asfixia e remoção da carapaça.'
  },
  {
    id: 24,
    categoryId: '5',
    title: 'Cacto com Manchas Alaranjadas ou Cortiça',
    causa: 'Ácaro do cortiço que ataca a epiderme do cacto.',
    ingredientes: 'Álcool 70% e cotonete.',
    preparo: 'Use o álcool puro no cotonete.',
    aplicacao: 'Passe delicadamente nas manchas alaranjadas para eliminar os ácaros.',
    resultado: 'Interrupção do alastramento das manchas e proteção das partes verdes saudáveis.'
  },
  {
    id: 25,
    categoryId: '5',
    title: 'Mosca do Fungo (Mosquinhas pretas saltitantes)',
    causa: 'Larvas que comem raízes em solo com muita matéria orgânica úmida.',
    ingredientes: 'Vinagre de maçã e detergente.',
    preparo: 'Coloque vinagre num potinho com 2 gotas de detergente.',
    aplicacao: 'Deixe o pote ao lado do vaso como uma armadilha para as moscas adultas.',
    resultado: 'Redução drástica da população e interrupção do ciclo.'
  },

  // CATEGORIA 6; FLORAÇÃO E ESTÉTICA
  {
    id: 26,
    categoryId: '6',
    title: 'Monstera com Folhas Pequenas e Sem Furos',
    causa: 'Falta de luz ou suporte para subir.',
    ingredientes: 'Cabo de vassoura e corda de sisal.',
    preparo: 'Enrole o sisal no cabo de vassoura.',
    aplicacao: 'Espete no vaso e prenda o caule da Monstera para que as raízes aéreas grudem.',
    resultado: 'Folhas maiores e com os desejados recortes.'
  },
  {
    id: 27,
    categoryId: '6',
    title: 'Jiboia Pernuda (Caule longo sem folhas)',
    causa: 'Estiolamento por falta de luz.',
    ingredientes: 'Tesoura de poda limpa e água.',
    preparo: 'Corte as pontas longas e peladas.',
    aplicacao: 'Coloque as pontas cortadas na água para enraizar e mude a planta mãe para local mais claro.',
    resultado: 'Planta mãe mais cheia na base e novas mudas para a coleção.'
  },
  {
    id: 28,
    categoryId: '6',
    title: 'Rosa do Deserto com Caudex Mole',
    causa: 'Fungo de umidade ou desidratação severa.',
    ingredientes: 'Própolis de farmácia.',
    preparo: 'Limpe a área mole com uma colher esterilizada.',
    aplicacao: 'Passe o própolis puro na ferida aberta para selar e matar fungos.',
    resultado: 'Endurecimento da base e cicatrização rápida.'
  },
  {
    id: 29,
    categoryId: '6',
    title: 'Botões de Flor que Caem Antes de Abrir',
    causa: 'Falta de Potássio ou mudança brusca de lugar.',
    ingredientes: 'Casca de banana e água.',
    preparo: 'Bata 2 cascas no liquidificador com 1 litro de água e coe.',
    aplicacao: 'Regue a planta assim que os botões surgirem.',
    resultado: 'Flores que abrem fortes e duram mais tempo.'
  },
  {
    id: 30,
    categoryId: '6',
    title: 'Orquídea que Não Dá Flor Há Anos',
    causa: 'Falta de variação térmica ou falta de magnésio.',
    ingredientes: 'Sal de Epsom.',
    preparo: '1 colher de café de sal para 1 litro de água.',
    aplicacao: 'Borrife nas folhas e regue a planta a cada 15 dias no outono.',
    resultado: 'Estímulo para a emissão da haste floral.'
  },

  // CATEGORIA 7; NUTRIÇÃO CASEIRA
  {
    id: 31,
    categoryId: '7',
    title: 'Suculenta com Folhas Enrugadas',
    causa: 'Sede extrema; a planta consumiu toda a água das suas reservas.',
    ingredientes: 'Complexo B e água.',
    preparo: '10 gotas de Complexo B em 1 litro de água.',
    aplicacao: 'Regue por imersão até o substrato ficar totalmente encharcado.',
    resultado: 'Folhas gorduchas e hidratadas novamente em 48h.'
  },
  {
    id: 32,
    categoryId: '7',
    title: 'Energético para Mudas Recém-Plantadas',
    causa: 'Estresse de transplante onde a planta murcha.',
    ingredientes: 'Açúcar e água.',
    preparo: '1 colher de chá de açúcar em 500ml de água.',
    aplicacao: 'Regue a muda logo após o plantio para reduzir o choque.',
    resultado: 'Planta firme e sem folhas murchas no dia seguinte.'
  },
  {
    id: 33,
    categoryId: '7',
    title: 'Chá de Casca de Ovo (Cálcio Imediato)',
    causa: 'Folhas novas nascendo deformadas ou com pontas tortas.',
    ingredientes: 'Cascas de ovo e água fervente.',
    preparo: 'Jogue água fervendo nas cascas e deixe descansar por 24h.',
    aplicacao: 'Use essa água já fria para regar a cada 15 dias.',
    resultado: 'Fortalecimento da estrutura celular e folhas perfeitas.'
  },
  {
    id: 34,
    categoryId: '7',
    title: 'Adubo de Água de Aquário',
    causa: 'Planta pálida precisando de nitrogênio orgânico.',
    ingredientes: 'Água descartada da limpeza do aquário.',
    preparo: 'Use a água tal como sai do aquário.',
    aplicacao: 'Regue suas plantas ornamentais com essa água rica em nutrientes.',
    resultado: 'Folhagem verde escura e viçosa.'
  },
  {
    id: 35,
    categoryId: '7',
    title: 'Dose de Ferro com Pregos Velhos',
    causa: 'Folhas novas nascendo amarelas com veios verdes (clorose).',
    ingredientes: 'Pregos enferrujados e água.',
    preparo: 'Deixe os pregos em uma garrafa com água por 3 dias.',
    aplicacao: 'Use essa água ferruginosa para regar a planta afetada.',
    resultado: 'As folhas voltam a ficar verdes e saudáveis.'
  },

  // CATEGORIA 8; RESGATES FINAIS
  {
    id: 36,
    categoryId: '8',
    title: 'Antúrio com Espata Amarelando e Sem Flor',
    causa: 'Falta de fósforo e luminosidade insuficiente.',
    ingredientes: 'Casca de banana; água e sal de Epsom.',
    preparo: 'Bata 1 casca de banana com 1 litro de água; coe e adicione meia colher de sal de Epsom.',
    aplicacao: 'Regue o antúrio com essa mistura a cada 15 dias e mova para local com mais luz indireta.',
    resultado: 'Espata voltando ao vermelho vibrante e nova flor surgindo em até 30 dias.'
  },
  {
    id: 37,
    categoryId: '8',
    title: 'Folhas Variegatas Ficando Verdes',
    causa: 'Baixa luminosidade; a planta produz mais clorofila para sobreviver.',
    ingredientes: 'Luz indireta forte.',
    preparo: 'Não há mistura.',
    aplicacao: 'Mova para mais perto da janela.',
    resultado: 'As folhas novas voltam a nascer com manchas brancas e amarelas.'
  },
  {
    id: 38,
    categoryId: '8',
    title: 'Fungo Branco na Terra (Parece mofo)',
    causa: 'Falta de circulação de ar e terra muito úmida.',
    ingredientes: 'Canela em pó e garfo.',
    preparo: 'Use um garfo para mexer a superfície da terra.',
    aplicacao: 'Revolva o solo e polvilhe canela por cima para matar o mofo.',
    resultado: 'Terra limpa e sem cheiro de mofo.'
  },
  {
    id: 39,
    categoryId: '8',
    title: 'Orquídea com Raízes Amarelas mas Firmes',
    causa: 'Falta de luz nas raízes; comum em vasos opacos.',
    ingredientes: 'Vaso transparente.',
    preparo: 'Replantio.',
    aplicacao: 'Mude a orquídea para um vaso que deixe a luz passar.',
    resultado: 'As raízes voltam a ficar verdes e saudáveis.'
  },
  {
    id: 40,
    categoryId: '8',
    title: 'Planta com Queimadura de Frio',
    causa: 'Correntes de ar gelado ou ar condicionado direto.',
    ingredientes: 'Local protegido.',
    preparo: 'Mudança física.',
    aplicacao: 'Afaste a planta de janelas abertas à noite ou de saídas de ar.',
    resultado: 'Fim das manchas pretas que surgem no inverno.'
  },
  {
    id: 41,
    categoryId: '8',
    title: 'Rosa do Deserto Sem Folhas (Dormência)',
    causa: 'Ciclo natural de repouso no inverno ou seca extrema.',
    ingredientes: 'Paciência e pouca água.',
    preparo: 'Suspenda a adubação.',
    aplicacao: 'Regue apenas o mínimo para o caudex não murchar.',
    resultado: 'Brotação forte assim que o calor voltar.'
  },
  {
    id: 42,
    categoryId: '8',
    title: 'Cicatrizante Mágico para Podas Grossas',
    causa: 'Ferida aberta após corte de galhos grandes.',
    ingredientes: 'Canela em pó e Vaselina.',
    preparo: 'Faça uma pasta com os dois ingredientes.',
    aplicacao: 'Cubra totalmente o corte para impedir a entrada de água e fungos.',
    resultado: 'Cicatrização seca e segura sem apodrecimento.'
  },
  {
    id: 43,
    categoryId: '8',
    title: 'Sede Invisível em Vasos de Barro',
    causa: 'O barro absorve a água da planta e seca muito rápido.',
    ingredientes: 'Óleo de linhaça.',
    preparo: 'Aplique por dentro do vaso vazio.',
    aplicacao: 'Pinte o interior do vaso antes de plantar.',
    resultado: 'A terra mantém a umidade por mais tempo.'
  },
  {
    id: 44,
    categoryId: '8',
    title: 'Controle de Lesmas com Cerveja',
    causa: 'Ambiente úmido que atrai moluscos que comem as folhas.',
    ingredientes: 'Um pouco de cerveja e um pote raso.',
    preparo: 'Coloque a cerveja no pote.',
    aplicacao: 'Enterre o pote no nível da terra.',
    resultado: 'As lesmas são atraídas e caem no pote; limpando suas plantas.'
  },
  {
    id: 45,
    categoryId: '8',
    title: 'Selamento Final — O Banho de Chuva',
    causa: 'Acúmulo de poeira e falta de nitrogênio atmosférico.',
    ingredientes: 'Chuva natural.',
    preparo: 'Coloque as plantas na janela ou varanda quando chover.',
    aplicacao: 'Deixe que a chuva lave as folhas e sature a terra.',
    resultado: 'A melhor rega do mundo; a planta cresce mais rápido.'
  },

  // CATEGORIA 9; RECEITAS ESPECIAIS
  {
    id: 46,
    categoryId: '9',
    title: 'Detox de Folhas com Brilho de Vitrine',
    causa: 'Acúmulo de poeira que impede a planta de respirar.',
    ingredientes: 'Água morna e pano de microfibra.',
    preparo: 'Aqueça a água levemente.',
    aplicacao: 'Limpe folha por folha com delicadeza.',
    resultado: 'Planta respirando melhor e brilho natural de vitrine.'
  },
  {
    id: 47,
    categoryId: '9',
    title: 'Brilho com Leite',
    causa: 'Folhas opacas e cheias de calcário da água.',
    ingredientes: 'Leite e algodão.',
    preparo: 'Molhe o algodão em um pouco de leite.',
    aplicacao: 'Passe delicadamente sobre a superfície das folhas grandes.',
    resultado: 'Brilho intenso e camada protetora contra fungos.'
  },
  {
    id: 48,
    categoryId: '9',
    title: 'Pulo do Gato para Orquídeas com Chá',
    causa: 'Planta enfraquecida precisando de taninos.',
    ingredientes: 'Chá preto ou de camomila frio.',
    preparo: 'Faça o chá sem açúcar e deixe esfriar.',
    aplicacao: 'Regue a orquídea uma vez por mês com o chá.',
    resultado: 'Raízes mais fortes e resistência a doenças.'
  },
  {
    id: 49,
    categoryId: '9',
    title: 'Limpeza de Sais no Vaso (Manchas Brancas na Cerâmica)',
    causa: 'Acúmulo de cloro da água ou excesso de adubo químico.',
    ingredientes: 'Vinagre branco e pano.',
    preparo: 'Vinagre puro no pano.',
    aplicacao: 'Esfregue as manchas brancas do lado de fora do vaso.',
    resultado: 'Vaso com aspecto de novo e sem crostas minerais.'
  },
  {
    id: 50,
    categoryId: '9',
    title: 'Ácaro Vermelho (Poeira bronzeada sob as folhas)',
    causa: 'Ambientes muito secos e falta de umidade nas folhas.',
    ingredientes: 'Enxofre em pó ou fumo de corda deixado de molho.',
    preparo: 'Dilua o enxofre conforme embalagem ou use a água de fumo.',
    aplicacao: 'Borrife embaixo das folhas onde os ácaros se escondem.',
    resultado: 'Eliminação da praga e fim do aspecto queimado das folhas.'
  }
];
