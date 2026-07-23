// ============================================================
// EDITE AQUI para adicionar/trocar os itens de cada pasta.
// - "url": link do Netlify (ou de qualquer página publicada)
// - "html": caminho de um arquivo .html dentro de conteudo/,
//           igual está no seu repositório do GitHub
// - "openMode": opcional. Use "external" se o item travar/bloquear
//           dentro do iframe (tela cinza com ícone de bloqueio) —
//           isso faz o app abrir direto em nova aba, sem tentar
//           embutir. Se não colocar nada, o padrão é "frame".
// ============================================================

const FOLDERS = [
  {
    code: "BU",
    name: "Gestão de BU",
    items: [
      { title: "Análise PIX Meios", html: "conteudo/Gestão de BU/Análise PIX Meios.html" },
      { title: "Ata GT Atendimento 08.05", html: "conteudo/Gestão de BU/Ata GT Atendimento 08.05.html" },
      { title: "Ata GT Consumer Banking 08.05", html: "conteudo/Gestão de BU/Ata GT Consumer Banking 08.05.html" },
      { title: "Ata GT Crédito Pessoal 15.05", html: "conteudo/Gestão de BU/Ata GT Crédito Pessoal 15.05.html" },
      { title: "Ata GT Meios 12.06", html: "conteudo/Gestão de BU/Ata GT Meios 12.06.html" },
      { title: "Ata GT-CLT 12.05", html: "conteudo/Gestão de BU/Ata GT-CLT 12.05.html" },
      { title: "GUT Atendimento", html: "conteudo/Gestão de BU/GUT Atendimento.html" },
      { title: "GUT CB - Cartões", html: "conteudo/Gestão de BU/GUT CB - Cartões.html" },
      { title: "GUT CLT", html: "conteudo/Gestão de BU/GUT CLT.html" },
      { title: "GUT Consumer Banking", html: "conteudo/Gestão de BU/GUT Consumer Banking.html" },
      { title: "GUT Crédito Pessoal", html: "conteudo/Gestão de BU/GUT Crédito Pessoal.html" },
      { title: "GUT INSS Consig", html: "conteudo/Gestão de BU/GUT INSS Consig.html" },
      { title: "Governança 09.06", html: "conteudo/Gestão de BU/Governança 09.06.html" },
    ],
  },
  {
    code: "BK",
    name: "Gestão de Book",
    items: [
      { title: "Book de Resultados Junho", url: "https://book-julho.netlify.app/", openMode: "external" },
    ],
  },
  {
    code: "MK",
    name: "Gestão de MK",
    items: [
      { title: "PA 1096", html: "conteudo/Gestão de MK/PA 1096.html" },
      { title: "PA 1097", html: "conteudo/Gestão de MK/PA 1097.html" },
      { title: "PA 1150", html: "conteudo/Gestão de MK/PA 1150.html" },
      { title: "PA 1154", html: "conteudo/Gestão de MK/PA 1154.html" },
    ],
  },
  {
    code: "CM",
    name: "Gestão de Comitês",
    items: [
      { title: "Ata 01.07", html: "conteudo/Gestão de Comitês/Ata 01.07.html" },
    ],
  },
  {
    code: "AO",
    name: "Análises Operacionais",
    items: [
      { title: "Análise AgiMais - GAP argumento 13.07", html: "conteudo/Análises Operacionais/Análise AgiMais - GAP argumento 13.07.html" },
      { title: "Análise Concierge 01.07", html: "conteudo/Análises Operacionais/Análise Concierge 01.07.html" },
      { title: "Análise Cross AGIMAIS 03.07", html: "conteudo/Análises Operacionais/Análise Cross AGIMAIS 03.07.html" },
      { title: "Análise Granular Erro PIX 17.07", html: "conteudo/Análises Operacionais/Análise Granular Erro PIX 17.07.html" },
      { title: "Análise Granular Erro no APP 02.07", html: "conteudo/Análises Operacionais/Análise Granular Erro no APP 02.07.html" },
      { title: "Análise Mensageria 21.07", html: "conteudo/Análises Operacionais/Análise Mensageria 21.07.html" },
      { title: "Análise desenrola 24.06", html: "conteudo/Análises Operacionais/Análise desenrola 24.06.html" },
      { title: "Análise previsão de impacto TMA AGIMAIS 02.07", html: "conteudo/Análises Operacionais/Análise previsão de impacto TMA AGIMAIS 02.07.html" },
    ],
  },
  {
    code: "PMC",
    name: "Gestão PMC",
    items: [
      { title: "Melhoria Processo Resumo contrato e Antecipação", html: "conteudo/Gestão PMC/Melhoria Processo Resumo contrato e Antecipação.html" },
      { title: "Novo Processo LNT", html: "conteudo/Gestão PMC/Novo Processo LNT.html" },
      { title: "Processo Cross AGIMAIS", html: "conteudo/Gestão PMC/Processo Cross AGIMAIS.html" },
      { title: "Processo de Erro no APP", html: "conteudo/Gestão PMC/Processo de Erro no APP.html" },
      { title: "Processos Meios de Pgto", html: "conteudo/Gestão PMC/Processos Meios de Pgto.html" },
      { title: "Melhoria processo ressarcimento", url: "https://jornadaressarcimento.netlify.app/" },
      { title: "Matriz de mapeamento de dores", url: "https://matriz-de-dores.netlify.app/" },
    ],
  },
  {
    code: "AQ",
    name: "Gestão de Qualidade",
    items: [
      { title: "Ganhos Concierge - Ação de Qualidade", html: "conteudo/Gestão de Qualidade/Ganhos Concierge - Ação de Qualidade.html" },
      { title: "Job Discription Monitor Birdie", html: "conteudo/Gestão de Qualidade/Job Discription Monitor Birdie.html" },
      { title: "Sistema próprio de monitoria", url: "https://agia-sistema-de-monitoramento.netlify.app/" },
    ],
  },
  {
    code: "TR",
    name: "Gestão de Treinamento",
    items: [
      { title: "AGIMAIS vendas", html: "conteudo/Gestão de Treinamento/AGIMAIS vendas.html" },
      { title: "Implantação AGIMAIS", html: "conteudo/Gestão de Treinamento/Implantação AGIMAIS.html" },
      { title: "Implantação PROCON", html: "conteudo/Gestão de Treinamento/Implantação PROCON.html" },
      { title: "Implantação Produto Investimentos", html: "conteudo/Gestão de Treinamento/Implantação Produto Investimentos.html" },
      { title: "Novo Fluxo LNT", html: "conteudo/Gestão de Treinamento/Novo Fluxo LNT.html" },
      { title: "Relatório de Treinamento Junho", html: "conteudo/Gestão de Treinamento/Relatório de Treinamento Junho.html" },
      { title: "Treinamento Corban", html: "conteudo/Gestão de Treinamento/Treinamento Corban.html" },
      { title: "Simulador do APP Agibank", url: "https://appsimulador.netlify.app/" },
    ],
  },
];
