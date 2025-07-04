module.exports = {
  name: 'Lucas Menezes Teixeira',
  title: 'Bachelor of Computer Science',
  facts: {
    'Residence': '<a href="https://www.google.com/maps/place/Ribeir%C3%A3o+Pires,+SP/@-23.6937547,-46.4785759,12z/data=!3m1!4b1!4m6!3m5!1s0x94ce6d00aafd1e81:0xc51dec6c655d6878!8m2!3d-23.7116426!4d-46.4123086!16zL20vMGc3amQ2"><i class="fa fa-home fact-icon"></i>Ribeirão Pires - SP</a>',
    'WhatsApp': `<a href="https://wa.me/5511943791429?text=Hi%20Lucas%2C%20I%20saw%20your%20resume%20and%20would%20like%20to%20know%20if%20you%20are%20open%20to%20new%20professional%20opportunities.%20If%20so%2C%20could%20we%20schedule%20a%20conversation%3F"><i class="fa-brands fa-whatsapp  fact-icon"></i>+55 (11) 94379-1429</a>`,
    'GitHub': `<a href="https://github.com/LucasTeixeira793"><i class="fa-brands fa-github fact-icon"></i>LucasTeixeira793</a>`,
    'LinkedIn': `<a href="https://www.linkedin.com/in/lucas-menezes-teixeira-79b7a51a2/"><i class="fa-brands fa-linkedin fact-icon"></i>Lucas Menezes Teixeira</a>`,
    'Email': '<a href="mailto:teixeiralucas793@outlook.com"><i class="fa fa-envelope fact-icon"></i>teixeiralucas793@outlook.com</a>'
  },
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
      contents: 
      "Full Stack Developer involved in designing new features and solving systemic issues for the Payroll Loan product. Experienced in API integration using .NET and procedure development with PL/SQL. Skilled in implementing continuous integration and delivery (CI/CD) through tools such as Jenkins and GitLab CI, depending on project needs. Strong communication skills have been critical to fostering effective team collaboration and delivering high-quality solutions."
    },
    {
      positions:[
        {
          title: 'Banco Safra SA - Intern',
          period: 'jan/22 - Jun/23',
        }
      ],
      skills: ['PL/SQL', '.NET', 'Communication', 'Office 365', 'Git'],
      contents: 
      "Responsible for controlling and responding to calls from the IT area supporting the financial sector, specializing in resolving IT calls related to the Consignment product, developing and maintaining applications and procedures, creating automations to optimize daily processes by evaluating team results through Power BI."
    }
  ],
  experience: [
    {
      header: 'Capstone Project: jan/24 - dec/24',
      link: 'https://doi.org/10.5281/zenodo.15670699',
      contents: 'Development of predictive models for the Brazilian stock market using Machine Learning and Deep Learning techniques (ARIMA, Random Forest, and LSTM). Collected and processed historical data using the yfinance library, applied seasonal decomposition, and analyzed model performance across multiple financial assets (VALE3, PETR4, ITUB3).'
    },
    {
      header: 'Kallistra: jan/23 - dec/23',
      link: '',
      contents: 'Developed data generators simulating IoT devices, with data transmission to Azure and storage on AWS (multi-cloud environment). Implemented a basic Machine Learning model for user behavior pattern recognition.'
    },
    {
      header: 'Iara: jan/22 - dec/22',
      link: 'https://github.com/LucasTeixeira793/iara-backend',
      contents: 'Led the complete development of a backend application using Java SpringBoot. Provisioned AWS infrastructure and set up CI/CD pipelines using Jenkins. The project was a platform for finding and hiring nearby beauty professionals.'
    }
  ],
  experienceScreen: [
    {
      header: 'SafeLog: jul/21 - dec/21',
      link: 'https://github.com/nikolas-virionis/Safelog',
      contents: `Developed a web platform with Node.js to monitor server CPU, disk, and RAM usage. Created a Java-based executable to collect monitoring data stored in a SQL Server database hosted in Azure.`
    },
    {
      header: 'StrongBerry: jan/21 - jun/21',
      link: '',
      contents: `Created a monitoring solution for strawberry greenhouses, optimizing production by controlling temperature and humidity. Built using Node.js and MySQL Database.`
    },
    {
      header: 'Semstress ABC: mar/19 - dec/20',
      link: '',
      contents: `Developed a web platform to help users find seamstresses and local sellers, offering more affordable products and promoting local businesses. Technologies used: Bootstrap, PHP, and MySQL.`
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
  ]
};
