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
