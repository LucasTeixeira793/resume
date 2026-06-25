export const en = {
  name: 'Lucas Menezes Teixeira',
  title: 'Bachelor of Computer Science',
  description:'Currently working as a Back-end Developer at Banco Safra S.A. Passionate about technology, I am looking for challenges that broaden my expertise in systems architecture and scalable solutions.',
  skills: [
    ['English', 75],
    ['.NET', 100],
    ['RabbitMQ', 100],
    ['SQL', 100],
    ['NoSQL', 100],
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
      positions: [
        {
          title: 'Banco Safra SA - Mid-Level System Analyst',
          period: 'May/25 - Present',
        },
        {
          title: 'Banco Safra SA - Jr. System Analyst',
          period: 'Jun/23 - May/25',
        }
      ],
      skills: ['.NET', 'PL/SQL', 'RabbitMQ', 'MongoDB', 'Kafka', 'Cloud', 'CI/CD', 'Monitoring'],
      contents: "Full Stack Developer involved in designing new features and solving systemic issues for the Payroll Loan product. Experienced in API integration using .NET and procedure development with PL/SQL. Skilled in implementing continuous integration and delivery (CI/CD) through tools such as Jenkins and GitLab CI, depending on project needs. Strong communication skills have been critical to fostering effective team collaboration and delivering high-quality solutions."
    },
    {
      positions:[
        {
          title: 'Banco Safra SA - Intern',
          period: 'jan/22 - Jun/23',
        }
      ],
      skills: ['PL/SQL', '.NET', 'Communication', 'Office 365', 'Git'],
      contents: "Responsible for controlling and responding to calls from the IT area supporting the financial sector, specializing in resolving IT calls related to the Consignment product, developing and maintaining applications and procedures, creating automations to optimize daily processes by evaluating team results through Power BI."
    }
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
      title: 'TCC',
      period: 'Jan/24 - Dec/24',
      contents: 'Development of predictive models for the Brazilian stock market using Machine Learning and Deep Learning techniques (ARIMA, Random Forest, and LSTM). Collected and processed historical data using the yfinance library, applied seasonal decomposition, and analyzed model performance across multiple financial assets (VALE3, PETR4, ITUB3).',
      techs: ['Python', 'Machine Learning', 'LSTM'],
      link: 'https://doi.org/10.5281/zenodo.15670699'
    },
    {
      title: 'Kallistra',
      period: 'Jan/23 - Dec/23',
      contents: 'Developed data generators simulating IoT devices, with data transmission to Azure and storage on AWS (multi-cloud environment). Implemented a basic Machine Learning model for user behavior pattern recognition.',
      techs: ['Azure', 'AWS', 'IoT', 'Machine Learning']
    },
    {
      title: 'Iara',
      period: 'Jan/22 - Dec/22',
      contents: 'Led the complete development of a backend application using Java SpringBoot. Provisioned AWS infrastructure and set up CI/CD pipelines using Jenkins. The project was a platform for finding and hiring nearby beauty professionals.',
      techs: ['Java', 'Spring Boot', 'AWS', 'Jenkins'],
      link: 'https://github.com/LucasTeixeira793/iara-backend'
    },
    {
      title: 'SafeLog',
      period: 'Jul/21 - Dec/21',
      contents: 'Developed a web platform with Node.js to monitor server CPU, disk, and RAM usage. Created a Java-based executable to collect monitoring data stored in a SQL Server database hosted in Azure.',
      techs: ['Node.js', 'Java', 'SQL Server', 'Azure'],
      link: 'https://github.com/nikolas-virionis/Safelog'
    },
    {
      title: 'StrongBerry',
      period: 'Jan/21 - Jun/21',
      contents: 'Created a monitoring solution for strawberry greenhouses, optimizing production by controlling temperature and humidity. Built using Node.js and MySQL Database.',
      techs: ['Node.js', 'MySQL']
    },
    {
      title: 'Semstress ABC',
      period: 'Mar/19 - Dec/20',
      contents: 'Developed a web platform to help users find seamstresses and local sellers, offering more affordable products and promoting local businesses. Technologies used: Bootstrap, PHP, and MySQL.',
      techs: ['Bootstrap', 'PHP', 'MySQL']
    }
  ]
};