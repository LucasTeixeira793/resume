export const en = {
  name: 'Lucas Menezes Teixeira',
  title: 'Bachelor of Computer Science',
  description:'Mid-level Software Engineer focused on back-end development, with solid experience in distributed systems and event-driven architecture. I work at Banco Safra building large-scale credit solutions, with a strong emphasis on performance, scalability, and operational efficiency.',
  skills: [
    ['English', 75],
    ['.NET', 100],
    ['RabbitMQ', 100],
    ['SQL', 100],
    ['MongoDB', 100],
    ['Data Structures', 70],
    ['Cloud', 75],
    ['Agile', 100],
    ['DevOps', 100],
    ['CI/CD', 70],
    ['Python', 68],
    ['Machine Learning', 68]
  ],
  jobs: [
    {
      company: 'Banco Safra SA',
      role: 'Software Engineer - Mid-Level',
      period: 'May 2025 - Present',
      isCurrent: true,
      highlights: [
        'Led the design and development of a Private Payroll-Deductible Loan origination system, handling ~1 million loan requests at launch, using resilient and scalable architecture.',
        'Enhanced post-sale workflows for the payroll loan product, reducing operational friction and improving customer experience, through continuous refinement of business rules and integrations.',
        'Implemented an AI-powered agent specialized in the payroll loan product, improving demand planning accuracy for tech and business teams, integrated with internal chat tools.'
      ],
      skills: ['.NET / C#', 'Microservices', 'RabbitMQ', 'Redis', 'MongoDB', 'Integration services'],
    },
    {
      company: 'Banco Safra SA',
      role: 'Software Engineer - Junior',
      period: 'August 2023 - May 2025',
      highlights: [
        'Redesigned the Portability and Refinancing flow, reducing loan disbursement time from ~7 days to sameday funding, by optimizing process flows and integrations.',
        'Refactored the loan origination pipeline, reducing stage transition time from minutes to seconds, by replacing batch processing with an event-driven architecture using RabbitMQ.'
      ],
      skills: ['.NET / C#', 'Distributed Systems', 'APIs', 'PL/SQL', 'RabbitMQ', 'Event-driven architecture', 'Microservices'],
    },
    {
      company: 'Banco Safra SA',
      role: 'System Analyst - Intern',
      period: 'January 2022 - August 2023',
        highlights: [
          'Developed a real-time monitoring dashboard, increasing system observability and operational visibility, using Angular for tracking critical processes.',
          'Automated ticket triage and assignment, eliminating manual workload and improving operational efficiency, by developing a bot integrated with the governance platform.'
      ],
      skills: ['.NET / C#', 'Automation scripts', 'Angular', 'TypeScript', 'REST APIs'],
    },
  ],
  education: [
    {
      title: 'São Paulo Tech School - SPTech',
      skills: ['Java + SpringBoot','Socioemotional Self-Control','Teamwork','REST','CI/CD','R','AWS/Azure','Analytics','Scrum','IOT'],
      type: 'Bachelor of Computer Science.',
      period: '2021 - 2024',
      contents:[
        "Comprehensive training in programming and software development, covering a range of skills from fundamental web technologies (HTML/CSS) to advanced development with Node.js, Java, and REST API creation. Gained expertise in cloud computing with AWS and Azure, including multi-cloud practices. Developed proficiency in Python and R for data analysis, expanding technological expertise.",
        "Additionally, developed socio-emotional competencies aligned with market demands, including resilience, focus, discipline, and interpersonal relationship management."
      ]       
    },
    {
      title: 'ETEC Profª M.C.M.',
      skills: ['Java','PHP','Web Development','MySQL','Git'],
      type: 'Integrated high school with technical training in IT for the Internet.',
      period: '2018 - 2020',
      contents: [
        "Participated in an integrated technical program focusing on Internet Computing. Acquired solid skills in web development, operating systems, and image editing. Mastered programming languages, frameworks, and the development of interactive websites."
      ]
    },
    {
      title: 'Wizard',
      skills: ['English','Creativity','Presentation'],
      type: 'English as a second language.',
      period: '2015 - 2022',
      contents: [
        "Enhanced English language proficiency through a dynamic and comprehensive program. Delivered presentations in English on various topics each semester, strengthening oral communication skills, building confidence, and expanding knowledge across different fields."
      ]
    }
  ],

  projects: [
    {
      title: 'ERP - CRM Integration Platform',
      period: '2025 - 2026',
      contents: 'Development of a bidirectional integration between the EPS ERP system and RD Station CRM, automating the synchronization of commercial and customer data.',
      details:  'This project aimed to connect the EPS ERP system and RD Station CRM through a bidirectional integration, ensuring that customer information, sales opportunities, and business processes were automatically synchronized across both platforms. The solution eliminated manual data updates, reduced information inconsistencies, and improved operational efficiency for sales and customer relationship teams.',
      techs: ['SQL Server', '.NET', 'Clean Architecture', 'Quartz', 'Webhooks', 'Polly', 'Refit']
    },
    {
      title: 'Capstone Project',
      period: '2024',
      contents: 'Research and development of Machine Learning and Deep Learning models for stock price forecasting using seasonal decomposition and time series analysis.',
      details: 'Bachelor\'s thesis focused on forecasting assets in the Brazilian stock market through Artificial Intelligence techniques. Historical stock prices and economic indicators were collected and processed to train predictive models, including LSTM and SVR. The study explored seasonal decomposition of time series to separate trend, seasonality, and noise components, aiming to improve forecasting performance and result interpretability. Different approaches were evaluated and compared to assess their effectiveness in supporting financial market decision-making.',
      techs: ['Python', 'Machine Learning', 'Deep Learning', 'LSTM', 'SVR'],
      link: 'https://doi.org/10.5281/zenodo.15670699'
    },
    {
      title: 'Kallistra',
      period: '2023',
      contents: 'IoT simulation platform featuring a multi-cloud architecture for data ingestion, processing, and intelligent analytics.',
      details:  'A project designed to simulate real-time IoT device behavior through custom data generators. Generated events are sent to Azure services for processing and then stored on AWS infrastructure, providing hands-on experience with multi-cloud architectures and data pipelines. In addition, a Machine Learning model was implemented to identify user behavior patterns, enabling data-driven insights and basic predictive analysis.',
      techs: ['Azure', 'AWS', 'IoT', 'Machine Learning']
    },
    {
      title: 'Iara',
      period: '2022',
      contents: 'Web platform connecting consumers with beauty professionals, built with a scalable cloud architecture and continuous delivery pipeline.',
      details: 'Served as project lead and was responsible for the complete backend development using Java Spring Boot. The platform was designed to help users discover, hire, and interact with beauty service providers located nearby. Beyond API development, I provisioned the cloud infrastructure on AWS and implemented CI/CD pipelines with Jenkins, automating deployments and improving development reliability. The frontend was developed with React, resulting in a modern, scalable solution designed for future growth.',
      techs: ['Java', 'Spring Boot', 'AWS', 'Jenkins'],
      link: 'https://github.com/LucasTeixeira793/iara-backend'
    },
    {
      title: 'SafeLog',
      period: '2021',
      contents: 'Infrastructure monitoring platform for tracking server resources and generating automated alerts.',
      details:  'SafeLog is a web-based solution designed to monitor critical infrastructure metrics, including CPU usage, memory consumption, and disk storage. The platform allows administrators to define custom thresholds and automatically trigger alerts when monitored values exceed configured limits. To collect server metrics, a Java-based agent was developed and distributed as an executable application, responsible for gathering and transmitting data to the central platform. The backend was built with Node.js, using SQL Server as the database and Azure as the hosting environment.',
      techs: ['Node.js', 'Java', 'SQL Server', 'Azure'],
      link: 'https://github.com/nikolas-virionis/Safelog'
    },
    {
      title: 'StrongBerry',
      period: '2021',
      contents: 'Smart platform for greenhouse monitoring and strawberry yield estimation based on environmental data.',
      details:  'StrongBerry was developed to help growers monitor and optimize strawberry production in controlled environments. The solution collects and displays temperature and humidity sensor data through a web dashboard, enabling real-time tracking of greenhouse conditions. The project was built using Node.js and MySQL, combining IoT concepts with data-driven agriculture.',
      techs: ['Node.js', 'MySQL']
    },
    {
      title: 'Semstress ABC',
      period: '2019 - 2020',
      contents: 'Web platform connecting consumers with local seamstresses and thrift stores, promoting affordable shopping and local businesses.',
      details:  'SemStress ABC was developed to simplify the search for seamstresses, thrift stores, and small local businesses, helping connect consumers with nearby service providers and vendors. The platform promotes affordable products and services while increasing the visibility of local entrepreneurs. Built using PHP, MySQL, and Bootstrap, the solution delivers a simple, responsive, and user-friendly web experience.',
      techs: ['Bootstrap', 'PHP', 'MySQL']
    }
  ]
};