import { decagon, reboth, Ajo } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    fiscal,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript,
    blockchain,
    docker,
    postgres,
    kubernetes,
    mySQL,
    jira,
    ethereum,
    cryptoCurrency,
    python,
    solidity,
    twitter,
    nodeJS,
    bag,
    musicalNote,
    money
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: blockchain,
        name: "Blockchain Engineering",
        type: "Smart Contracts",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: postgres,
        name: "PostgresQL",
        type: "Database",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Orchestration",
    },
    {
        imageUrl: mySQL,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Project Management",
    },
    {
        imageUrl: ethereum,
        name: "Ethereum",
        type: "Layer 1 Blockchain",
    },
    {
        imageUrl: cryptoCurrency,
        name: "CryptoCoin",
        type: "Blockchain Ledger",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Blockchain Programming Language",
    },
    {
        imageUrl: nodeJS,
        name: "Node.JS",
        type: "V8 JavaScript for server-side scripting",
    }
];

export const experiences = [
    {
        title: "Junior Technical Lead",
        company_name: "Ajo Savings",
        icon: Ajo,
        iconBg: "#4362C1",
        date: "September 2023 - February 2024",
        points: [
            "🎯 I demystified the PRD(Product Requirement Document) to colleagues to ensure codes written are in sync with the user story.",
            "🤝 As a leader of about 15 developers, I created a robust model for relating the backend to our Postgres database using Sequelize within 3 days of the start of the project so that team members assigned to backend tasks for the first sprint could relate to the flow and build their endpoints accordingly and promptly. We are now using ElephantSQL as a cloud database for scalability in the production mode.", 
            "🌟 I used Redux toolkit to manage states on the analytic features of the user dashboard so that the data from the database regularly refreshes and displays correctly.",
            "🤖 I used Postgres and Sequelize as ORM for connecting to the database.",
            "🚫 Had some issues and the management eventually discontinued with the project."
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "Decagon",
        icon: decagon,
        iconBg: "#82C4A5",
        date: "April 2023 - August 2023",
        points: [
            "🤝 Participated in and moderated seminars that centred on Best Practices, Agile Methodologies, Clean / Scalable Code Architecture and The Strategy of User Centric Applications.",
            "📊 I worked extensively at the backend to build RESTful APIs for our full-stack applications, using swagger documentation to create a visual detail of the endpoints and their parameters for the front-end teammates.", 
            "🌟 I used Redux toolkit to manage states and integrate the endpoints (APIs).",
            "🛠️ I implemented unit testing and advanced security measures for authentication and verification. Also did some frontend security features like using Joi for validation of input fields.",
            "🔗 I also implemented rate limiting and content based load balancing to avoid overloading the target server for a faster, optimized and secure application.",
            "🤖 I used SQL and NoSQL databases as need arose in different project  to secure my fetched data.",
            "🌐 I containerize applications using Docker.",
        ],
    },
    {
        title: "Digital Consultant/Admin",
        company_name: "Reboth Finance",
        icon: reboth,
        iconBg: "#B11919",
        date: "August 2022 - February 2023",
        points: [
            "🤖 Software Administration: Oversaw the effective administration of software systems, ensuring optimal functionality and performance.",
            "📧 Email Marketing: Orchestrated email marketing campaigns, utilizing ConvertKit for engagement tracking and fostering client relationships.",
            "🎯 Strategic Planning: Developed and executed strategic plans, aligning digital services with business objectives for maximum impact.",
            "🤝 Cross-Functional Collaboration: Collaborated with software engineers, developers, and cross-functional teams to drive the successful implementation of digital projects in an Agile environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/UIHamilton995',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hamilton-ude-07744a16a/',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/UI_Hamilton',
    }
];

export const projects = [
    {
        iconUrl: fiscal,
        theme: 'btn-back-green',
        name: 'Ajo Savings App',
        description: 'Savings application with extensive dashboard features that tracks where and what you are doing with your finances. Join Savings groups and cash out when it gets to your turn.',
        link: 'https://ajo-savings.decagon.dev/',
    },
    {
        iconUrl: bag,
        theme: 'btn-back-pink',
        name: 'Plutus Financial Investment App',
        description: 'A meeting point where investment companies meet investors. In this app you get to save and grow your money through our verified investment and stock enterprises.',
        link: 'https://plutusbank.netlify.app/',
    },
    {
        iconUrl: money,
        theme: 'btn-back-blue',
        name: 'MiltonCryptoz',
        description: 'Crypto checker and analysis app for assessing market dynamics before making informed decisions on staking or purchasing. Uncover real-time insights and empower your crypto endeavors with precision and confidence!',
        link: 'https://milton-cryptoz-analysis.vercel.app/',
    },
    {
        iconUrl: musicalNote,
        theme: 'btn-back-red',
        name: 'Jamss Music App',
        description: 'Embark on an immersive auditory journey with the Jamss Music App, where we strive to craft an extraordinary and exhilarating experience. Dive deep into the world of music and let the rhythm elevate your senses!',
        link: 'https://jamss-music-app.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'LandLawdz',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/UIHamilton995/land-lawd-real-estate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Weeb Zappier',
        description: 'Backend application that makes HTTP requests using axios, parse html and json data; extracting url data with puppeteer.',
        link: 'https://github.com/UIHamilton995/ethical-web-scraper',
    }
];