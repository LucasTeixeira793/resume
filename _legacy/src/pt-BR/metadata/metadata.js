module.exports = {
  name: 'Lucas Menezes Teixeira',
  title: 'Bacharel em Ciência da Computação',
  facts: {
    'Residência': '<a href="https://www.google.com/maps/place/Ribeir%C3%A3o+Pires,+SP/@-23.6937547,-46.4785759,12z/data=!3m1!4b1!4m6!3m5!1s0x94ce6d00aafd1e81:0xc51dec6c655d6878!8m2!3d-23.7116426!4d-46.4123086!16zL20vMGc3amQ2"><i class="fa fa-home fact-icon"></i>Ribeirão Pires - SP</a>',
    'WhatsApp': `<a href="https://wa.me/5511943791429?text=Ol%C3%A1+Lucas%2C+vi+seu+curr%C3%ADculo+e+gostaria+de+saber+se+voc%C3%AA+est%C3%A1+aberto+a+novas+oportunidades+profissionais.+Se+sim%2C+poder%C3%ADamos+marcar+uma+conversa%3F"><i class="fa-brands fa-whatsapp  fact-icon"></i>+55 (11) 94379-1429</a>`,
    'GitHub': `<a href="https://github.com/LucasTeixeira793"><i class="fa-brands fa-github fact-icon"></i>LucasTeixeira793</a>`,
    'LinkedIn': `<a href="https://www.linkedin.com/in/lucas-menezes-teixeira-79b7a51a2/"><i class="fa-brands fa-linkedin fact-icon"></i>Lucas Menezes Teixeira</a>`,
    'Email': '<a href="mailto:teixeiralucas793@outlook.com"><i class="fa fa-envelope fact-icon"></i>teixeiralucas793@outlook.com</a>'
  },
  skills: [
    ['Inglês', 75],
    ['.NET', 100],
    ['RabbitMQ', 100],
    ['SQL', 100],
    ['NoSQL', 100],
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
      positions: [
        {
          title: 'Banco Safra SA - Analista Pl.',
          period: 'Mai/25 - Atual'
        },
        {
          title: 'Banco Safra SA - Analista Jr.',
          period: 'Jun/23 - Mai/25'
        }
      ],
      skills: ['.NET', 'PL/SQL', 'RabbitMQ', 'MongoDB', 'Kafka', 'Cloud', 'CI/CD', 'Monitoria'],
      contents: 
      "Desenvolvedor Full Stack, desempenhando papel no desenvolvimento de novas funcionalidades e na resolução de problemas sistêmicos relacionados ao produto de Empréstimo Consignado. Minha experiência envolve a manipulação de APIs em .NET e a criação de procedures em PL/SQL, enquanto utilizo ferramentas como Jenkins ou Gitlab CI, dependendo das necessidades do projeto, para a implementação de integração contínua e entrega contínua. Além disso, meu foco constante na comunicação tem sido essencial para garantir a colaboração eficaz em equipe e a entrega de soluções de alta qualidade."
    },
    {
      positions: [
        {
          title: 'Banco Safra SA - Estagiário de TI',
          period: 'jan/22 - Jun/23',
        }
      ],
      skills: ['PL/SQL', '.NET', 'Comunicação', 'Office 365', 'Git'],
      contents: 
      "Responsável pelo controle e atendimento de chamados da área de TI sustentação da financeira, especializado na resolução de chamados de TI referentes ao produto de Consignado, desenvolvia e fazia manutençoes em aplicações e procedures, criei automações para otimizar processos diários avaliando resultados da equipe através do Power BI."
    }
  ],
  education: [
    {
      title: 'São Paulo Tech School - SPTech',
      skills: ['Java + SpringBoot','Autocontrole Socioemocional','Trabalho em equipe','REST','CI/CD','R','AWS/Azure','Analytics','Scrum','IOT'],
      type: 'Bacharelado em Ciências da Computação.',
      period: '2021 - 2024',
      contents:[
        "Uma formação abrangente em programação e desenvolvimento. Durante meu curso, adquiri habilidades desde as bases fundamentais, como HTML/CSS, até o domínio de tecnologias avançadas, incluindo Node.js, __Java__ e criação de __API REST__. Além disso, fui introduzido aos conceitos essenciais de provisionamento de aplicações nas principais plataformas em nuvem, como __AWS e Azure__, juntamente com a compreensão de práticas de __Multi-cloud__. Também fui exposto ao uso de __Python e R__ para análises de dados, ampliando minha expertise tecnológica.",
        "Juntamente com matérias técnicas, desenvolvemos habilidades socioemocionais, preparando-me para o que o Mercado de Trabalho exige. Habilidades relacionadas ao resiliência, foco, disciplina, relações interpessoais entre outros"
      ] 
      
    },
    {
      title: 'ETEC Profª M.C.M.',
      skills: ['Java','PHP','Desenvolvimento Web','MySQL','Git'],
      type: 'Ensino médio integrado com técnico em Informática para Internet.',
      period: '2018 - 2020',
      contents: [
        "Durante o ensino médio, participei de uma formação integrada em Informática para Internet, adquirindo habilidades em __desenvolvimento web__, sistemas operacionais e edição de imagens. Dominando linguagens de programação, frameworks e criação de websites interativos"
      ]
    },
    {
      title: 'Wizard',
      skills: ['Inglês','Criatividade','Apresentações'],
      type: 'Ensino de inglês como segundo idioma.',
      period: '2015 - 2022',
      contents: [
        "Durante meu período na Wizard, aprimorei minhas habilidades no idioma de forma abrangente e dinâmica. A cada semestre, tive a oportunidade de dar __palestras em inglês__ sobre diversos temas, o que me permitiu fortalecer minha fluência, ganhar confiança na comunicação oral e expandir meu conhecimento em diferentes áreas."
      ]
    }
  ],
  experience: [
    {
      header: 'TCC: jan/24 - dez/24',
      link: 'https://doi.org/10.5281/zenodo.15670699',
      contents: 'Desenvolvimento de modelos preditivos para o mercado de ações brasileiro utilizando técnicas de Machine Learning e Deep Learning, como ARIMA, Random Forest e LSTM. O projeto envolveu coleta e tratamento de dados históricos com a biblioteca yfinance, aplicação de decomposição sazonal e análise de desempenho dos modelos em múltiplos ativos financeiros (VALE3, PETR4 e ITUB3).'
    },
    {
      header: 'Kallistra: jan/23 - dez/23',
      link: '',
      contents: 'Eu e minha equipe desenvolvemos geradores de dados simulando um dispositivo IoT. Os dados gerados são enviados para a Azure, processados e armazenados na AWS (Experiência me multi-cloud) Juntamente com a implementação de uma Machine Learning simples para reconhecimento de padrões de usuários.'
    },
    {
      header: 'Iara: jan/22 - dez/22',
      link: 'https://github.com/LucasTeixeira793/iara-backend',
      contents: 'Atuei como líder de projeto e fui responsável pelo desenvolvimento completo do Backend em Java SpringBoot. Além disso, realizei o provisionamento da aplicação na AWS e implementei o CI/CD utilizando Jenkins. O projeto consistia em uma plataforma de busca e contratação de profissionais de beleza próximos aos usuários.'
    }
  ],
  experienceScreen: [
    {
      header: 'SafeLog: jul/21 - dez/21',
      link: 'https://github.com/nikolas-virionis/Safelog',
      contents: `Desenvolvi uma plataforma web utilizando Node.js para monitorar CPU, disco e RAM de servidores. Implementei um executável em Java para coletar os dados de monitoramento, que foram armazenados em um banco de dados SQL Server alocado na Azure.`
    },
    {
      header: 'StrongBerry: jan/21 - jun/21',
      link: '',
      contents: `criei uma solução para calcular a produção de estufas de morangos. Propus medidas para aumentar a produção, como o controle de temperatura e umidade. O projeto visava otimizar a produção por meio do monitoramento e controle desses fatores-chave. Projeto criado em Node.js e Banco de Dados MySQL`
    },
    {
      header: 'Semstress ABC: mar/19 - dez/20',
      link: '',
      contents: `No projeto SemStress, feito como meu TCC do Ensino Médio, criei uma plataforma web que visa facilitar a busca por costureiras e bazares próximos, oferecendo produtos mais acessíveis e promovendo o reconhecimento de vendedores locais. A plataforma foi desenvolvida utilizando Bootstrap, PHP e MySQL.`
    }
  ]
};
