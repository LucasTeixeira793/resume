export const ptBR = {
  name: 'Lucas Menezes Teixeira',
  title: 'Bacharel em Ciência da Computação',
  description:'Engenheiro de Software Pleno com foco em back-end, com sólida experiência no desenvolvimento de sistemas distribuídos e arquitetura orientada a eventos. Atuo no Banco Safra desenvolvendo soluções de crédito em larga escala, com foco em performance, escalabilidade e eficiência operacional.',
  skills: [
    ['Inglês', 75],
    ['.NET', 100],
    ['RabbitMQ', 100],
    ['SQL', 100],
    ['MongoDB', 100],
    ['Estrutura de dados', 70],
    ['Cloud', 75],
    ['Ágil', 100],
    ['DevOps', 100],
    ['CI/CD', 70],
    ['Python', 68],
    ['Machine Learning', 68]
  ],
  jobs: [
    {
      company: 'Banco Safra SA',
      role: 'Engenheiro de Software - Pleno',
      period: 'Maio 2025 - Atualmente',
      isCurrent: true,
      highlights: [
        'Liderei a idealização e desenvolvimento do processo de contratação do Crédito do Trabalhador, suportando ~1 Milhão de solicitações no lançamento, utilizando arquitetura resiliente e escalável.',
        'Aprimorei a pós-venda do Crédito do Trabalhador, reduzindo fricções operacionais e melhorando a experiência do cliente, através de refinamento contínuo das regras de negócio e integrações.',
        'Desenvolvi e integrei um agente de IA especializado no Crédito do Trabalhador, aumentando a assertividade no planejamento das demandas, utilizando a IA aplicada e integração com ferramenta de chat para suporte ao time técnico e de negócio.',
      ],
      skills: [".NET / C#", "Microsserviços", "RabbitMQ", "Redis", "MongoDB", "Serviços de integração"],
    },
    {
      company: 'Banco Safra SA',
      role: 'Engenheiro de Software - Junior',
      period: 'Agosto 2023 - Maio 2025',
      highlights: [
        'Refatorei a esteira de contratação de empréstimos, reduzindo o tempo de transição entre etapas de minutos para segundos, substituindo processamento em batch por uma arquitetura baseada a eventos.',
        'Reestruturei o fluxo de Portabilidade e Refinanciamento, reduzindo o tempo da liberação de crédito de ~7 dias para o mesmo dia, através do redesenho do processo e otimização de integrações.'
      ],
      skills: [ ".NET / C#", "Sistemas Distribuídos", "APIs", "PL/SQL", "RabbitMQ", "Arquitetura baseada em eventos"],
    },
    {
      company: 'Banco Safra SA',
      role: 'Analista de Sistemas - Estagiário',
      period: 'Janeiro 2022 - Agosto 2023',
      highlights: [
        'Desenvolvi uma dashboard de monitoramento em tempo real, melhorando a visibilidade da saúde do sistema, para acompanhamento de processos críticos.',
        'Automatizei a distribuição de chamados, eliminando a triagem manual e aumentando a eficiência operacional, através do desenvolvimento de um robô integrado à plataforma de governança de TI.'
      ],
      skills: ['.NET / C#', 'Automação', 'Angular', 'TypeScript', 'REST APIs', 'Git'],
    },
  ],
  education: [
    {
      title: 'São Paulo Tech School - SPTech',
      skills: ['Java + SpringBoot','Autocontrole Socioemocional','Trabalho em equipe','REST','CI/CD','R','AWS/Azure','Analytics','Scrum','IOT'],
      type: 'Bacharelado em Ciências da Computação.',
      period: '2021 - 2024',
      contents:[
        "Uma formação abrangente em programação e desenvolvimento. Durante meu curso, adquiri habilidades desde as bases fundamentais, como HTML/CSS, até o domínio de tecnologias avançadas, incluindo Node.js, Java e criação de API REST. Além disso, fui introduzido aos conceitos essenciais de provisionamento de aplicações nas principais plataformas em nuvem, como AWS e Azure, juntamente com a compreensão de práticas de Multi-cloud. Também fui exposto ao uso de Python e R para análises de dados, ampliando minha expertise tecnológica.",
        "Juntamente com matérias técnicas, desenvolvemos habilidades socioemocionais, preparando-me para o que o Mercado de Trabalho exige. Habilidades relacionadas ao resiliência, foco, disciplina, relações interpessoais entre outros"
      ] 
    },
    {
      title: 'ETEC Profª M.C.M.',
      skills: ['Java','PHP','Desenvolvimento Web','MySQL','Git'],
      type: 'Ensino médio integrado com técnico em Informática para Internet.',
      period: '2018 - 2020',
      contents: [
        "Durante o ensino médio, participei de uma formação integrada em Informática para Internet, adquirindo habilidades em desenvolvimento web, sistemas operacionais e edição de imagens. Dominando linguagens de programação, frameworks e criação de websites interativos"
      ]
    },
    {
      title: 'Wizard',
      skills: ['Inglês','Criatividade','Apresentações'],
      type: 'Ensino de inglês como segundo idioma.',
      period: '2015 - 2022',
      contents: [
        "Durante meu período na Wizard, aprimorei minhas habilidades no idioma de forma abrangente e dinâmica. A cada semestre, tive a oportunidade de dar palestras em inglês sobre diversos temas, o que me permitiu fortalecer minha fluência, ganhar confiança na comunicação oral e expandir meu conhecimento em diferentes áreas."
      ]
    }
  ],
  projects: [
    {
      title: 'Plataforma de integração ERP - CRM ',
      period: '2025 - 2026',
      contents: 'Desenvolvimento de uma integração bidirecional entre o ERP EPS e o CRM RD Station, automatizando a sincronização de dados comerciais e cadastrais.',
      details: 'Este projeto teve como objetivo conectar os sistemas ERP EPS e RD Station por meio de uma integração bidirecional, garantindo que informações de clientes, oportunidades e processos comerciais fossem sincronizadas automaticamente entre as plataformas. A solução eliminou processos manuais de atualização de dados, reduziu inconsistências nas informações e aumentou a eficiência operacional das equipes de vendas e relacionamento com clientes.',
      techs: [ 'SQL Server', '.NET', 'Arquitetura Limpa', 'Quartz', 'Webhooks', 'Polly', 'Refit']
    },
    {
      title: 'TCC',
      period: '2024',
      contents: 'Pesquisa e desenvolvimento de modelos de Machine Learning e Deep Learning para previsão de preços de ações utilizando decomposição sazonal e análise de séries temporais.',
      details: 'Projeto de Trabalho de Conclusão de Curso focado na previsão de ativos do mercado financeiro brasileiro por meio de técnicas de Inteligência Artificial. Foram coletados e processados dados históricos de ações e indicadores econômicos para treinamento de modelos preditivos, incluindo LSTM e SVR. O estudo explorou a decomposição sazonal das séries temporais para separar tendência, sazonalidade e ruído, buscando melhorar a capacidade de previsão e a interpretação dos resultados. Os experimentos permitiram comparar diferentes abordagens e avaliar sua aplicabilidade no apoio à tomada de decisão no mercado financeiro.',
      techs: ['Python', 'Machine Learning', 'Deep Learning', 'LSTM', 'SVR'],
      link: 'https://doi.org/10.5281/zenodo.15670699'
    },
    {
      title: 'Kallistra',
      period: '2023',
      contents: 'Plataforma de simulação IoT com arquitetura multi-cloud para ingestão, processamento e análise inteligente de dados.',
      details: 'Projeto desenvolvido para simular o comportamento de dispositivos IoT por meio de geradores de dados em tempo real. Os eventos produzidos são enviados para serviços da Azure, onde passam por etapas de processamento antes de serem armazenados em infraestrutura AWS, proporcionando experiência prática em arquiteturas multi-cloud. Além da pipeline de dados, foi implementado um modelo de Machine Learning para identificação de padrões de comportamento dos usuários, permitindo análises e insights a partir dos dados coletados.',
      techs: ['Azure', 'AWS', 'IoT', 'Machine Learning']
    },
    {
      title: 'Iara',
      period: '2022',
      contents: 'Plataforma web para conexão entre consumidores e profissionais de beleza, desenvolvida com arquitetura escalável em nuvem e pipeline de entrega contínua.',
      details: 'Atuei como líder do projeto e responsável pelo desenvolvimento completo do backend utilizando Java Spring Boot. A plataforma foi criada para facilitar a busca, contratação e interação entre usuários e prestadores de serviços de beleza próximos à sua localização. Além do desenvolvimento da API, realizei o provisionamento da infraestrutura na AWS e implementei processos de CI/CD com Jenkins, automatizando deploys e garantindo maior confiabilidade no ciclo de desenvolvimento. O frontend foi desenvolvido em React, resultando em uma solução moderna, escalável e preparada para crescimento.',
      techs: ['Java', 'Spring Boot', 'AWS', 'Jenkins'],
      link: 'https://github.com/LucasTeixeira793/iara-backend'
    },
    {
      title: 'SafeLog',
      period: '2021',
      contents: 'Plataforma de monitoramento de infraestrutura para acompanhamento de recursos de servidores e emissão automática de alertas.',
      details: 'SafeLog é uma solução web desenvolvida para monitorar métricas críticas de infraestrutura, incluindo utilização de CPU, memória RAM e armazenamento em disco. A plataforma permite configurar limites personalizados para cada métrica e gerar alertas automáticos quando os valores monitorados ultrapassam os parâmetros definidos. Para a coleta de dados dos servidores, foi desenvolvido um agente em Java distribuído como executável, responsável por capturar e enviar informações para a aplicação central. O backend foi desenvolvido em Node.js, utilizando SQL Server como banco de dados e infraestrutura hospedada na Azure.',
      techs: ['Node.js', 'Java', 'SQL Server', 'Azure'],
      link: 'https://github.com/nikolas-virionis/Safelog'
    },
    {
      title: 'StrongBerry',
      period: '2021',
      contents: 'Plataforma inteligente para monitoramento de estufas de morango e estimativa de produção baseada em dados ambientais.',
      details: 'StrongBerry foi desenvolvida para auxiliar produtores no monitoramento e otimização da produção de morangos em ambientes controlados. A solução realiza a coleta e visualização de dados de sensores de temperatura e umidade por meio de um painel web, permitindo o acompanhamento em tempo real das condições da estufa. O projeto foi desenvolvido utilizando Node.js e banco de dados MySQL.',
      techs: ['Node.js', 'MySQL']
    },
    {
      title: 'Semstress ABC',
      period: '2019 - 2020',
      contents: 'Plataforma web para conectar consumidores a costureiras e bazares locais, incentivando o comércio de proximidade e o consumo acessível.',
      details:  'SemStress ABC foi desenvolvida com o objetivo de facilitar a busca por costureiras, bazares e pequenos comerciantes da região, aproximando consumidores de fornecedores locais. A plataforma permite que usuários encontrem produtos e serviços mais acessíveis, ao mesmo tempo em que contribui para a visibilidade e fortalecimento dos negócios locais. O sistema foi desenvolvido utilizando PHP, MySQL e Bootstrap, oferecendo uma interface web simples, responsiva e de fácil utilização.',
      techs: ['Bootstrap', 'PHP', 'MySQL']
    }
  ],
  about: {
    title: 'Além do Código',
    intro: 'Nem só de arquitetura de sistemas e linhas de código se faz o dia a dia. Fora das telas, busco constantemente desafios que exercitem a mente e o corpo de formas diferentes:',
    interests: [
      {
        title: 'Triathlon',
        text: 'Pratico musculação e corrida há mais de 5 anos, e há pouco mais de um ano decidi unir as modalidades e migrar para o triathlon. Hoje, dedico de 10 a 14 horas semanais aos treinos (natação, ciclismo, corrida e academia) — uma rotina de endurance que reforça diariamente minha disciplina, consistência e resiliência.',
      },
      {
        title: 'Leitura',
        text: 'Embora as histórias de ficção científica sejam minhas favoritas (pela criatividade e visões de futuro), minha estante é bem diversa e inclui livros de finanças, desenvolvimento pessoal, história e, claro, tecnologia.',
      },
    ],
    closing: 'Acredito que a alta performance técnica nasce do equilíbrio entre um corpo em movimento e uma mente em constante aprendizado.',
  },
};