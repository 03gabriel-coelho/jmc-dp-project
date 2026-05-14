export const contact = {
  phoneRaw: "5531998492779",
  phoneDisplay: "+55 31 99849-2779",
  landlineDisplay: "+55 31 3395-2023",
  email: "jmcconsultrh@gmail.com",
  whatsappMessage: "Olá, gostaria de fazer um orçamento!",
};

export const whatsappUrl = `https://api.whatsapp.com/send/?phone=${
  contact.phoneRaw
}&text=${encodeURIComponent(contact.whatsappMessage)}&type=phone_number&app_absent=0`;

export const services = [
  "Admissão e demissão de colaboradores",
  "Cálculo de folha de pagamento e adiantamento",
  "Emissão de demonstrativos de pagamento",
  "Gestão e auditoria de sistemas de ponto e acessos",
  "Atendimento a fiscalizações",
  "Rotinas de férias, afastamentos e rescisões",
  "Emissão de guias de encargos sociais, INSS, FGTS Digital, IRPF e DCTFWeb",
  "Administração de benefícios",
  "Contabilização da folha de pagamento",
  "Relatórios e indicadores mensais para gestão",
  "Administração das rotinas do eSocial",
];

export const seoRoutes = {
  "/rh-dp-terceirizado-contagem": {
    title: "RH e DP Terceirizado em Contagem | JMC Consult RH",
    description:
      "Terceirização de RH e Departamento Pessoal em Contagem/MG para empresas que precisam de folha de pagamento, eSocial e administração de pessoal com segurança.",
    h1: "RH e DP terceirizado em Contagem",
    eyebrow: "Terceirização completa para empresas em Contagem/MG",
    intro:
      "Conte com uma equipe especializada para cuidar das rotinas de RH, departamento pessoal e folha de pagamento com agilidade, conformidade e atendimento próximo.",
    focus: "RH terceirizado e DP terceirizado",
  },
  "/rh-terceirizado-contagem": {
    title: "RH Terceirizado em Contagem | JMC Consult RH",
    description:
      "Soluções de RH terceirizado em Contagem/MG para pequenas, médias e grandes empresas. Apoio operacional, indicadores e gestão de pessoas.",
    h1: "RH terceirizado em Contagem",
    eyebrow: "Gestão de RH com apoio especializado",
    intro:
      "A JMC Consult RH ajuda sua empresa a profissionalizar processos de RH, reduzir retrabalho e liberar a liderança para decisões mais estratégicas.",
    focus: "terceirização de RH",
  },
  "/dp-terceirizado-contagem": {
    title: "DP Terceirizado em Contagem | JMC Consult RH",
    description:
      "Departamento Pessoal terceirizado em Contagem/MG com folha de pagamento, admissões, rescisões, eSocial e obrigações trabalhistas.",
    h1: "DP terceirizado em Contagem",
    eyebrow: "Departamento Pessoal para empresas de todos os portes",
    intro:
      "Assumimos as rotinas operacionais de departamento pessoal para sua empresa ganhar previsibilidade, reduzir riscos e manter prazos trabalhistas em dia.",
    focus: "departamento pessoal em Contagem",
  },
  "/rh-contagem": {
    title: "Consultoria de RH em Contagem | JMC Consult RH",
    description:
      "Consultoria de RH em Contagem/MG para empresas que buscam processos mais organizados, gestão de pessoas e suporte especializado.",
    h1: "Consultoria de RH em Contagem",
    eyebrow: "Apoio consultivo e operacional em RH",
    intro:
      "Estruturamos processos de RH alinhados à rotina da sua empresa, com atendimento personalizado e experiência em diferentes segmentos.",
    focus: "consultoria de RH em Contagem",
  },
  "/dp-contagem": {
    title: "Departamento Pessoal em Contagem | JMC Consult RH",
    description:
      "Serviços de Departamento Pessoal em Contagem/MG: folha de pagamento, benefícios, ponto, admissões, rescisões e obrigações acessórias.",
    h1: "Departamento Pessoal em Contagem",
    eyebrow: "Rotinas trabalhistas com controle e precisão",
    intro:
      "Organize sua administração de pessoal com especialistas que acompanham prazos, documentos, cálculos e obrigações legais.",
    focus: "departamento pessoal em Contagem",
  },
  "/site": {
    title: "JMC Consult RH em Contagem | Terceirização de RH e DP",
    description:
      "Conheça a JMC Consult RH em Contagem/MG. Terceirização de folha de pagamento, administração de pessoal, RH e DP para empresas.",
    h1: "JMC Consult RH em Contagem",
    eyebrow: "RH, DP e folha de pagamento para empresas",
    intro:
      "Apoiamos empresas pequenas, médias e grandes com terceirização de folha de pagamento, administração de pessoal e rotinas de RH.",
    focus: "terceirização de RH e DP",
  },
} as const;

export const serviceLandingRoutes = {
  "/folha-de-pagamento-terceirizada": {
    title: "Folha de Pagamento Terceirizada | JMC Consult RH",
    description:
      "Folha de pagamento terceirizada para empresas que precisam de cálculos, encargos, eSocial, relatórios e prazos trabalhistas com segurança.",
    h1: "Folha de pagamento terceirizada para empresas",
    eyebrow: "Solução nacional em folha de pagamento",
    intro:
      "A JMC Consult RH assume a operação da folha de pagamento para reduzir falhas, organizar prazos e dar mais previsibilidade à gestão financeira e trabalhista.",
    audience: "empresas que querem terceirizar a folha sem perder controle",
    location: "Atendimento para Contagem/MG e empresas em todo o Brasil",
    sections: [
      {
        title: "Cálculos e obrigações em dia",
        text: "Acompanhamos salários, adiantamentos, férias, rescisões, encargos, eSocial, DCTFWeb e relatórios mensais com processo claro.",
      },
      {
        title: "Menos risco para a empresa",
        text: "A terceirização ajuda a reduzir erros operacionais, atrasos e inconsistências que podem gerar passivos trabalhistas.",
      },
      {
        title: "Gestão com informação",
        text: "Entregamos dados e indicadores para apoiar decisões sobre custos, benefícios, quadro de pessoal e rotinas internas.",
      },
    ],
    faqs: [
      {
        question: "O que inclui a folha de pagamento terceirizada?",
        answer:
          "Inclui cálculos mensais, demonstrativos, encargos, férias, rescisões, eSocial, DCTFWeb e relatórios conforme a necessidade da empresa.",
      },
      {
        question: "A JMC atende empresas fora de Contagem/MG?",
        answer:
          "Sim. A JMC Consult RH atende empresas em Contagem/MG e também empresas de outras regiões do Brasil com rotinas remotas de folha e DP.",
      },
    ],
    related: ["/dp-terceirizado-contagem", "/administracao-de-pessoal", "/e-social-dctfweb"],
  },
  "/terceirizacao-de-rh": {
    title: "Terceirização de RH para Empresas | JMC Consult RH",
    description:
      "Terceirização de RH para pequenas, médias e grandes empresas. Estruture processos, indicadores, atendimento interno e rotinas de gestão de pessoas.",
    h1: "Terceirização de RH para empresas",
    eyebrow: "RH mais estratégico e organizado",
    intro:
      "A terceirização de RH apoia empresas que precisam profissionalizar processos, ganhar velocidade operacional e liberar lideranças para decisões mais estratégicas.",
    audience: "empresas em crescimento que precisam de apoio especializado em RH",
    location: "Atendimento em Contagem/MG e em todo o Brasil",
    sections: [
      {
        title: "Processos de RH mais claros",
        text: "Organizamos fluxos, documentos, indicadores e rotinas para que a área de pessoas funcione com menos improviso.",
      },
      {
        title: "Apoio sob medida",
        text: "O serviço é adaptado ao porte, segmento e momento da empresa, sem impor uma estrutura maior do que a operação precisa.",
      },
      {
        title: "Mais foco na gestão",
        text: "Com a rotina operacional apoiada por especialistas, gestores conseguem dedicar mais energia a pessoas, cultura e produtividade.",
      },
    ],
    faqs: [
      {
        question: "Que tipo de empresa pode terceirizar o RH?",
        answer:
          "Pequenas, médias e grandes empresas podem terceirizar parte ou toda a rotina de RH, especialmente quando precisam de padronização e suporte técnico.",
      },
      {
        question: "Terceirizar RH substitui a equipe interna?",
        answer:
          "Nem sempre. A JMC pode complementar a equipe interna ou assumir rotinas específicas, conforme a necessidade de cada empresa.",
      },
    ],
    related: ["/rh-terceirizado-contagem", "/consultoria-rh-empresas", "/rh-dp-terceirizado-contagem"],
  },
  "/terceirizacao-de-dp": {
    title: "Terceirização de DP | Departamento Pessoal Terceirizado",
    description:
      "Terceirização de DP para empresas: admissões, folha, ponto, férias, rescisões, encargos e eSocial com suporte especializado.",
    h1: "Terceirização de DP para empresas",
    eyebrow: "Departamento Pessoal com controle e segurança",
    intro:
      "A JMC Consult RH cuida das rotinas de Departamento Pessoal para empresas que precisam cumprir prazos, reduzir riscos e organizar a administração de colaboradores.",
    audience: "empresas que precisam de DP terceirizado com rotina confiável",
    location: "Atendimento local em Contagem/MG e remoto para o Brasil",
    sections: [
      {
        title: "Rotina trabalhista completa",
        text: "Atuamos em admissões, férias, afastamentos, benefícios, ponto, folha, rescisões e obrigações acessórias.",
      },
      {
        title: "Prazos e documentos sob controle",
        text: "A terceirização cria uma rotina mais previsível para coleta de informações, conferências e entregas mensais.",
      },
      {
        title: "Suporte para diferentes portes",
        text: "Atendemos empresas pequenas, médias e grandes, ajustando o nível de acompanhamento à complexidade da operação.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre DP terceirizado e RH terceirizado?",
        answer:
          "O DP terceirizado foca rotinas trabalhistas e administrativas. O RH terceirizado pode incluir processos mais ligados à gestão de pessoas e indicadores.",
      },
      {
        question: "A terceirização de DP ajuda a reduzir riscos?",
        answer:
          "Sim. Processos bem acompanhados reduzem atrasos, inconsistências em cálculos e falhas em obrigações trabalhistas.",
      },
    ],
    related: ["/dp-terceirizado-contagem", "/departamento-pessoal-terceirizado", "/folha-de-pagamento-terceirizada"],
  },
  "/departamento-pessoal-terceirizado": {
    title: "Departamento Pessoal Terceirizado | JMC Consult RH",
    description:
      "Departamento Pessoal terceirizado para empresas: folha, admissões, rescisões, benefícios, ponto, encargos e obrigações acessórias.",
    h1: "Departamento Pessoal terceirizado",
    eyebrow: "Administração de pessoal sem retrabalho",
    intro:
      "Terceirize o Departamento Pessoal da sua empresa com uma equipe especializada em rotinas trabalhistas, documentação, cálculos e atendimento operacional.",
    audience: "empresas que buscam apoio completo em administração de colaboradores",
    location: "Atendimento em Contagem/MG e operação remota para empresas no Brasil",
    sections: [
      {
        title: "Base operacional mais segura",
        text: "A rotina de DP passa a ter cadência, responsáveis e conferências para evitar gargalos no fechamento mensal.",
      },
      {
        title: "Integração com folha e benefícios",
        text: "Conectamos documentos, ponto, benefícios, folha e encargos para reduzir duplicidade de tarefas.",
      },
      {
        title: "Comunicação objetiva",
        text: "A empresa acompanha demandas, prazos e pendências com clareza, sem perder visibilidade da operação.",
      },
    ],
    faqs: [
      {
        question: "O Departamento Pessoal terceirizado atende empresas pequenas?",
        answer:
          "Sim. Empresas pequenas também se beneficiam por não precisar montar uma estrutura interna completa para lidar com rotinas trabalhistas.",
      },
      {
        question: "O serviço pode incluir benefícios e ponto?",
        answer:
          "Sim. A JMC pode apoiar administração de benefícios, gestão de ponto, admissões, rescisões e folha de pagamento.",
      },
    ],
    related: ["/terceirizacao-de-dp", "/dp-contagem", "/administracao-de-pessoal"],
  },
  "/administracao-de-pessoal": {
    title: "Administração de Pessoal para Empresas | JMC Consult RH",
    description:
      "Administração de pessoal para empresas: documentos, benefícios, ponto, férias, afastamentos, folha de pagamento e suporte em rotinas trabalhistas.",
    h1: "Administração de pessoal para empresas",
    eyebrow: "Rotinas organizadas do início ao fim",
    intro:
      "A JMC Consult RH estrutura e executa rotinas de administração de pessoal para empresas que precisam de mais controle sobre documentos, prazos e colaboradores.",
    audience: "empresas que querem organizar a rotina de colaboradores",
    location: "Atendimento para Contagem/MG e empresas em outras regiões",
    sections: [
      {
        title: "Do cadastro à homologação",
        text: "Acompanhamos a jornada administrativa do colaborador, da admissão às movimentações, férias, afastamentos e desligamento.",
      },
      {
        title: "Rotina menos dependente de pessoas-chave",
        text: "Processos documentados reduzem a dependência de conhecimento informal e aumentam a continuidade operacional.",
      },
      {
        title: "Apoio para decisões gerenciais",
        text: "Relatórios e indicadores tornam custos e demandas de pessoal mais visíveis para a gestão.",
      },
    ],
    faqs: [
      {
        question: "Administração de pessoal é a mesma coisa que Departamento Pessoal?",
        answer:
          "São áreas próximas. A administração de pessoal envolve a gestão operacional de documentos, registros, benefícios, ponto e movimentações dos colaboradores.",
      },
      {
        question: "A JMC pode assumir apenas parte da rotina?",
        answer:
          "Sim. O escopo pode ser definido conforme a necessidade da empresa, incluindo folha, benefícios, ponto ou processos específicos.",
      },
    ],
    related: ["/departamento-pessoal-terceirizado", "/folha-de-pagamento-terceirizada", "/dp-contagem"],
  },
  "/consultoria-rh-empresas": {
    title: "Consultoria de RH para Empresas | JMC Consult RH",
    description:
      "Consultoria de RH para empresas que precisam organizar processos, indicadores, rotinas de pessoal e gestão estratégica de pessoas.",
    h1: "Consultoria de RH para empresas",
    eyebrow: "Diagnóstico e estruturação de RH",
    intro:
      "A consultoria de RH da JMC ajuda empresas a entender gargalos, organizar processos e construir uma operação de pessoas mais clara, eficiente e aderente à realidade do negócio.",
    audience: "empresas que precisam melhorar processos e gestão de pessoas",
    location: "Consultoria em Contagem/MG e atendimento nacional",
    sections: [
      {
        title: "Diagnóstico prático",
        text: "Mapeamos rotinas, riscos, retrabalhos e oportunidades de melhoria com foco no que gera impacto operacional.",
      },
      {
        title: "Plano de ação realista",
        text: "As recomendações consideram porte, equipe, maturidade e prioridades da empresa para evitar soluções difíceis de sustentar.",
      },
      {
        title: "Apoio na implementação",
        text: "Além de orientar, a JMC pode apoiar a execução de rotinas de RH, DP e folha de pagamento.",
      },
    ],
    faqs: [
      {
        question: "Quando contratar uma consultoria de RH?",
        answer:
          "Quando a empresa sente falta de processos, indicadores, padronização ou suporte especializado para tomar decisões sobre pessoas e rotinas trabalhistas.",
      },
      {
        question: "A consultoria é indicada para empresas pequenas?",
        answer:
          "Sim. Empresas pequenas podem usar a consultoria para estruturar processos desde cedo e evitar problemas conforme crescem.",
      },
    ],
    related: ["/rh-contagem", "/terceirizacao-de-rh", "/rh-terceirizado-contagem"],
  },
  "/e-social-dctfweb": {
    title: "eSocial e DCTFWeb para Empresas | JMC Consult RH",
    description:
      "Suporte em eSocial, DCTFWeb, encargos trabalhistas e obrigações acessórias para empresas que precisam de conformidade em RH e DP.",
    h1: "eSocial e DCTFWeb para empresas",
    eyebrow: "Conformidade nas obrigações trabalhistas",
    intro:
      "A JMC Consult RH apoia empresas no envio, conferência e organização de obrigações relacionadas a eSocial, DCTFWeb, encargos e rotinas de Departamento Pessoal.",
    audience: "empresas que precisam reduzir inconsistências em obrigações acessórias",
    location: "Suporte para Contagem/MG e empresas em todo o Brasil",
    sections: [
      {
        title: "Conferência antes do envio",
        text: "Acompanhamos dados e rotinas que alimentam obrigações acessórias para reduzir divergências e retrabalho.",
      },
      {
        title: "Integração com folha",
        text: "O suporte em eSocial e DCTFWeb funciona melhor quando está conectado à folha de pagamento e ao DP.",
      },
      {
        title: "Mais tranquilidade para a gestão",
        text: "Com prazos e informações organizados, a empresa ganha segurança para cumprir obrigações trabalhistas.",
      },
    ],
    faqs: [
      {
        question: "A JMC faz suporte em eSocial junto com folha de pagamento?",
        answer:
          "Sim. O serviço pode ser integrado à folha de pagamento, Departamento Pessoal e obrigações mensais.",
      },
      {
        question: "Empresas de fora de Minas Gerais podem contratar?",
        answer:
          "Sim. O suporte pode ser prestado remotamente para empresas em diferentes regiões do Brasil.",
      },
    ],
    related: ["/folha-de-pagamento-terceirizada", "/terceirizacao-de-dp", "/dp-terceirizado-contagem"],
  },
} as const;

export const allSeoLinks: { href: string; label: string }[] = [
  ...Object.entries(seoRoutes).map(([href, route]) => ({ href, label: route.h1 })),
  ...Object.entries(serviceLandingRoutes).map(([href, route]) => ({ href, label: route.h1 })),
];
