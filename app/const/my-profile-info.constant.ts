import vsIcon from './../../public/assets/icons/visual-studio.svg';
import vsCodeIcon from './../../public/assets/icons/visual-studio-code.svg';
import postmanIcon from './../../public/assets/icons/postman.svg';
import insomniaIcon from './../../public/assets/icons/insomnia.svg';
import dockerIcon from './../../public/assets/icons/docker.svg';
import kuberIcon from './../../public/assets/icons/kubernetes.svg';
import bitbucketIcon from './../../public/assets/icons/bitbucket.svg';
import gitKrakenIcon from './../../public/assets/icons/git-kraken.svg';
import gitIcon from './../../public/assets/icons/git.svg';
import sourceTreeIcon from './../../public/assets/icons/source-tree.svg';
import IIsIcon from './../../public/assets/icons/windows.svg';
import DataScrapIcon from './../../public/assets/icons/spider.svg';
import FireBaseIcon from './../../public/assets/icons/firebase.svg';
import WebSocketIcon from './../../public/assets/icons/websocket.svg';
import RedisIcon from './../../public/assets/icons/redis.svg';
import RabbitIcon from './../../public/assets/icons/rabbitmq.svg';
import AngularIcon from './../../public/assets/icons/angular.svg';
import ReactIcon from './../../public/assets/icons/react.svg';
import DotNetIcon from './../../public/assets/icons/dotnet.svg';
import JavaScriptIcon from './../../public/assets/icons/javascript.svg';
import HtmlIcon from './../../public/assets/icons/html.svg';
import CssIcon from './../../public/assets/icons/css.svg';
import SassIcon from './../../public/assets/icons/sass.svg';
import NodeIcon from './../../public/assets/icons/node.svg';
import CIcon from './../../public/assets/icons/c.svg';
import CPlusIcon from './../../public/assets/icons/c++.svg';
import CSharpIcon from './../../public/assets/icons/c-sharp.svg';
import JavaIcon from './../../public/assets/icons/java.svg';
import CypressIcon from './../../public/assets/icons/cypress.svg';
import PowerShellIcon from './../../public/assets/icons/powershell.png';
import BatchIcon from './../../public/assets/icons/batch.png';
import SeleniumIcon from './../../public/assets/icons/selenium.svg';
import PhpIcon from './../../public/assets/icons/php.svg';
import WordpressIcon from './../../public/assets/icons/wordpress.svg';
import DataStructureIcon from './../../public/assets/icons/data-structure.png';
import AlgoIcon from './../../public/assets/icons/algo.svg';
import SystemDesignIcon from './../../public/assets/icons/system-design.png';
import WebHostingIcon from './../../public/assets/icons/server.svg';
import AIIcon from './../../public/assets/icons/ai-ml.svg';
import MLIcon from './../../public/assets/icons/ml.svg';
import DeepLIcon from './../../public/assets/icons/deepl.svg';
import RestApiIcon from './../../public/assets/icons/swagger.svg';
import JuniorIcon from './../../public/assets/icons/baby.svg';
import FamilyIcon from './../../public/assets/icons/family.svg';
import SoftwareEngIcon from './../../public/assets/icons/software-engineer.svg';
import FullStackIcon from './../../public/assets/icons/fullStack.png';
import SeniorIcon from './../../public/assets/icons/Senior-soft.jpg';
import ghBoardIcon from './../../public/assets/icons/ghBoard.png';
import azBoardIcon from './../../public/assets/icons/azBoard.png';
import RuetIcon from './../../public/assets/icons/ruet.jpg';
import RUMCIcon from './../../public/assets/icons/rumc.jpg';
import {
    SiMongodb,
    SiAmazondynamodb,
    SiMysql,
    SiOracle,
} from "react-icons/si";
import {
    FaHeadset,
    FaChartLine,
    FaQrcode,
    FaUsersCog,
    FaUserShield,
    FaProjectDiagram,
    FaLock,
    FaStore,
    FaCode,
    FaBriefcase,
} from "react-icons/fa";

export const PROFILE_INFO = {
    ProfileInfo: {
        Name: 'Ashikur Rahman Nabir',
        CurrentCompanyName: 'Selise Digital Platform (SELISE)',
        Designation: 'Senior Software Engineer',
        Headline: 'Senior software engineer building enterprise web products with React, Angular, .NET, and Node.',
        Intro:
            'I focus on products design and security where the UI must feel fast, clear, and trustworthy for the people using it every day. and make everything secure using RBAC and other security measures. I have a strong foundation in data structures and algorithms, which helps me write efficient code and solve complex problems. I have experience with C/C++, C#, Java, and JavaScript, and I enjoy learning new technologies and applying them to real-world projects.',
        SkillSet1: 'Dotnet | C# | NestJS | Angular | React | MongoDB | C++',
        SkillSet2: 'JavaScript | TypeScript | Git | Cypress | E2E',
        Phone: '+880 1683800976',
        Email: 'ashikur.rahmannabir@gmail.com',
        Address: 'Dori para road, Mahona, Word no - 3, Rupganj, Narayanganj',
        BirthDay: '1st February 1995',
        Hobby: 'Gaming, Travelling, Gossiping, Problem Solving',
        BasicDescriptionTitle: 'Why I am a strong hire',
        QuickStats: [
            {
                value: '6+ yrs',
                label: 'Production experience',
                note: 'Enterprise systems, internal tools, and cross-team delivery.',
            },
            {
                value: 'Full-stack',
                label: 'Delivery range',
                note: 'Frontend architecture, API integration, and release support.',
            },
            {
                value: 'Mentor',
                label: 'Team impact',
                note: 'Helping juniors, raising code quality, and keeping work moving.',
            },
        ],
        FocusAreas: [
            'Enterprise UIs',
            'Workflow systems',
            'API integration',
            'Team leadership',
        ],
        DescriptionList: [
            'Enterprise software delivery across insurance, CRM, and workflow products.',
            'Strong front-end and backend ownership with practical backend and automation knowledge.',
            'A mentoring mindset focused on clarity, empathy, and reliable execution.',
        ],
    },
    ProjectData: [
        {
            id: '11',
            featured: true,
            category: 'Flagship product',
            title: 'Customer Support & Insurance Change Management System',
            icon: FaHeadset,
            duration: 'Feb 2024 - Present',
            role: 'Frontend UI owner',
            summary:
                'Built the front-end experience for a support system that guides insurance change requests through role-aware, step-by-step workflows.',
            impact:
                'Helped support agents manage complex customer changes from a single guided interface.',
            description: [
                'Pinned customer navigation and quick profile access for support agents.',
                'Role-based workflows for address updates, KVG changes, and family data updates.',
                'Undo/redo and drawer controls to make the support flow smoother and safer to use.',
            ],
            skills: ['React.js', 'Tailwind CSS', 'State Management', 'API Integration', 'Insurance'],
        },
        {
            id: '12',
            featured: true,
            category: 'Cross-platform product',
            title: 'Omnichannel Insurance & Pension Lifecycle Advisory Platform',
            icon: FaChartLine,
            duration: 'Jan 2023 - Feb 2024',
            role: 'Project lead',
            summary:
                'Led a customer, advisor, and partner ecosystem that helped users explore pension planning, consultations, and payments across web and mobile.',
            impact:
                'Delivered a multi-portal product with secure flows for advisory services and lifecycle planning.',
            description: [
                'Built the customer portal, advisor portal, and partner portal as connected experiences.',
                'Supported pension recommendations, consultation booking, payment flows, and Teams-based meetings.',
                'Contributed to architecture, feature prioritization, and cross-team coordination as project lead.',
            ],
            skills: ['Angular 13', '.NET Core', 'MongoDB', 'React Native', 'RabbitMQ', 'RBAC'],
        },
        {
            id: '13',
            featured: true,
            category: 'Scalable operations system',
            title: 'Scalable Product and QR-Based Unique ID Management System',
            icon: FaQrcode,
            duration: 'Jul 2022 - Dec 2022',
            role: 'Full-stack contributor',
            summary:
                'Designed a product and package management system that generated unique IDs and QR codes for large enterprise datasets.',
            impact:
                'Improved product traceability and made UID generation fast enough for enterprise-scale usage.',
            description: [
                'Managed hierarchical products, packages, and item-level unique identifiers.',
                'Used efficient lookup logic to keep UID generation and validation fast at scale.',
                'Added QR code generation and scanning to make item lookup immediate.',
            ],
            skills: ['Angular 13', '.NET Core', 'MongoDB', 'Data Structures', 'Angular Material'],
        },
        {
            id: '14',
            category: 'CRM platform',
            title: 'CRM and Insurance Sales Management System',
            icon: FaUsersCog,
            duration: 'Dec 2020 - Jun 2022',
            role: 'Full-stack engineer',
            summary:
                'Built a large internal CRM for sales teams with pipeline management, scheduling, reporting, and role-specific workflows.',
            impact:
                'Helped sales and management teams work with cleaner pipelines and better reporting.',
            description: [
                'Delivered lead tracking, opportunity management, task workflows, and calendar-style scheduling.',
                'Supported multiple sales roles with secure permission-based access control.',
                'Implemented both frontend and backend pieces with scalability and maintainability in mind.',
            ],
            skills: ['.NET Core', 'Angular 13', 'MongoDB', 'REST APIs', 'Full-stack Development'],
        },
        {
            id: '15',
            category: 'Automation and QA',
            title: 'Role-Based Access Control E2E Automation Testing with Cypress',
            icon: FaUserShield,
            duration: 'Apr 2021 - May 2021',
            role: 'Automation contributor',
            summary:
                'Created Cypress checks for a large role-based application to validate menu visibility and permission logic across many user types.',
            impact:
                'Improved confidence in access control behavior and reduced manual regression effort.',
            description: [
                'Validated allowed and disallowed menus for many user roles through automated login flows.',
                'Built a visual HTML and CSS truth table to make permission states easy to review.',
                'Focused on catching extra menu exposure and other permission leaks before release.',
            ],
            skills: ['Cypress', 'Test Automation', 'RBAC', 'HTML', 'CSS'],
        },
        {
            id: '16',
            category: 'Workflow platform',
            title: 'Workflow Management and Digital Forms Platform',
            icon: FaProjectDiagram,
            duration: 'Feb 2018 - Mar 2019 and Nov 2019 - Nov 2020',
            role: 'Frontend developer',
            summary:
                'Delivered a configurable workflow engine for digital insurance forms with step-based journeys and PDF generation.',
            impact:
                'Enabled new insurance application flows to be added with configuration rather than code changes.',
            description: [
                'Supported 30+ page workflows for KYC and insurance applications.',
                'Built a configurable flow engine and reusable page structure in .NET Core and AngularJS.',
                'Created dynamic PDF generation for submitted forms and compliance documents.',
            ],
            skills: ['AngularJS', 'Workflow Management', 'MongoDB', 'PDF Creator', 'Frontend Development'],
        },
        {
            id: '17',
            category: 'Personal project',
            title: 'Authentication and Authorization Microservice',
            icon: FaLock,
            duration: 'Personal project',
            link: 'https://github.com/Ashike12/store-management-node/blob/main/src/auth',
            role: 'Builder',
            summary:
                'Designed a reusable auth service with JWT login, password hashing, and fine-grained RBAC for CRUD operations.',
            impact:
                'Created a plug-in service that can be reused across applications needing centralized auth.',
            description: [
                'Built JWT authentication and secure password handling.',
                'Added authorization rules that block CRUD actions without the right permissions.',
                'Structured the service as a reusable microservice rather than a one-off module.',
            ],
            skills: ['NestJS', 'Express.js', 'RBAC', 'Microservices', 'MongoDB'],
        },
        {
            id: '18',
            featured: true,
            category: 'Connected commerce platform',
            title: 'Store Management Admin Portal',
            icon: FaStore,
            duration: 'Personal project',
            link: 'https://store-management-sable.vercel.app/',
            role: 'Product builder',
            summary:
                'Created an admin portal with sales analytics, product management, wholesaler workflows, and invoice editing, backed by a live client portal.',
            impact:
                'The client portal is dynamic with the admin portal, so new or updated products in the admin side automatically affect the client experience.',
            references: [
                {
                    label: 'BE project',
                    href: 'https://store-management-node.vercel.app/',
                },
                {
                    label: 'FE admin portal',
                    href: 'https://store-management-sable.vercel.app/',
                    note: '',
                },
                {
                    label: 'FE client portal',
                    href: 'https://store-management-client-neon.vercel.app/',
                },
            ],
            description: [
                'Added analytics cards, charts, and recent invoice views for quick decision-making.',
                'Built product, wholesaler, and invoice management flows.',
                'Kept the interface focused on operational clarity rather than visual clutter.',
            ],
            skills: ['Node.js', 'NestJS', 'React.js', 'MongoDB', 'Redis'],
        },
        {
            id: '19',
            category: 'Personal project',
            title: 'Online Judge System for Problem Evaluation',
            icon: FaCode,
            duration: 'Personal project',
            link: 'https://github.com/Ashike12/arnOJ',
            role: 'Product builder',
            summary:
                'Built an online judge for uploading problems, submitting solutions, and tracking submission history.',
            impact:
                'Creates a transparent evaluation flow for programming practice and problem solving.',
            description: [
                'Supports admin problem uploads with test cases and verdict files.',
                'Lets users submit outputs and review their submission history over time.',
                'Designed to be extensible for future execution and grading automation.',
            ],
            skills: ['Angular', 'Node.js', 'MongoDB', 'Problem Solving'],
        },
        {
            id: '20',
            featured: true,
            category: 'Portfolio system',
            title: 'Config-Driven Portfolio Template',
            icon: FaBriefcase,
            duration: 'Personal project',
            link: 'https://github.com/Ashike12/MyPortfolio',
            role: 'Product builder',
            summary:
                'Built this portfolio as a reusable template driven by a single configuration file and modern Next.js components.',
            impact:
                'Demonstrates how I structure an app to be maintainable, reusable, and recruiter-friendly.',
            description: [
                'Portfolio content is separated from the UI so updates stay simple.',
                'Uses Next.js, React, and Tailwind for a fast, responsive experience.',
                'Designed to work as a polished personal site or a starter template for others.',
            ],
            skills: ['Next.js', 'Tailwind CSS', 'React.js'],
        },
    ],
    ExperienceList: [
        {
            id: 'junior-software-engineer',
            title: 'Selise Digital Platform - Junior Software Engineer',
            icon: JuniorIcon,
            duration: 'Feb 2018 - Mar 2019',
            summary: 'Started on AngularJS and .NET work for an enterprise insurance platform.',
            highlights: [
                'Built confidence working inside a real production codebase.',
                'Learned enterprise delivery habits, code review flow, and release discipline.',
                'Focused on the frontend implementation for core business workflows.',
            ],
        },
        {
            id: 'family-break',
            title: 'Family - Father Business',
            duration: 'Apr 2019 - Oct 2019',
            icon: FamilyIcon,
            summary: 'Paused my job to support my family business during a difficult period.',
            highlights: [
                'Handled the business responsibility while staying connected to my engineering career.',
                'Kept learning and followed the tools and practices used by my previous team.',
                'Returned to SELISE after stabilizing the situation.',
            ],
        },
        {
            id: 'software-engineer',
            title: 'Selise Digital Platform - Software Engineer',
            duration: 'Nov 2019 - Mar 2024',
            icon: SoftwareEngIcon,
            summary: 'Expanded into broader frontend and full-stack delivery across multiple enterprise projects.',
            highlights: [
                'Worked across Angular, React, .NET Core, and Node.js projects.',
                'Mentored junior developers and contributed to team growth.',
                'Supported delivery from development through deployment and maintenance.',
            ],
        },
        {
            id: 'full-stack',
            title: 'Full Stack Development',
            duration: 'Dec 2020 - Present',
            icon: FullStackIcon,
            summary: 'Took on backend, collaboration, and delivery ownership on top of frontend work.',
            highlights: [
                'Contributed to backend structure and microservice adoption on an existing project.',
                'Worked closely with UI/UX and client-facing stakeholders.',
                'Helped with production deployment, maintenance, and test strategy.',
            ],
        },
        {
            id: 'senior-software-engineer',
            title: 'Selise Digital Platform - Senior Software Engineer',
            duration: 'Apr 2024 - Present',
            icon: SeniorIcon,
            summary: 'Promoted for consistent delivery, code quality, and stronger ownership of planning and mentoring.',
            highlights: [
                'Review and support junior teammates while keeping work moving.',
                'Contribute to planning, estimation, and best-practice delivery.',
                'Work with international clients on product-focused engineering tasks.',
            ],
        },
    ],
    KnowledgeData: [
        { id: 'DataStructureAlgo', name: 'Data Structure/Algorithm', icons: [DataStructureIcon, AlgoIcon], value: 80, isIconImage: true, gradientClass: 'bg-gradient-primary' },
        { id: 'CC++', name: 'C/C++', icons: [CIcon, CPlusIcon], value: 90, isIconImage: true, gradientClass: 'bg-gradient-primary' },
        { id: 'CJava', name: 'C#/Java', icons: [CSharpIcon, JavaIcon], value: 95, isIconImage: true, gradientClass: 'bg-gradient-primary' },
        { id: 'ShellBatch', name: 'Shell/Batch scripting', icons: [PowerShellIcon, BatchIcon], value: 70, isIconImage: true, gradientClass: 'bg-gradient-primary' },
        { id: 'PhpWordpress', name: 'PHP/WordPress', icons: [PhpIcon, WordpressIcon], value: 50, isIconImage: true, gradientClass: 'bg-gradient-secondary' },
        { id: 'SystemDesign', name: 'System Design', icons: [SystemDesignIcon], value: 70, isIconImage: true, gradientClass: 'bg-gradient-secondary' },
        { id: 'WebHosting', name: 'Web Hosting', icons: [WebHostingIcon], value: 40, isIconImage: true, gradientClass: 'bg-gradient-secondary' },
        { id: 'AIMLDeepL', name: 'AI/ML/DeepL', icons: [AIIcon, MLIcon, DeepLIcon], value: 55, isIconImage: true, gradientClass: 'bg-gradient-primary' },
    ],
    SkillData: [
        { id: 'Dot Net', name: '.Net', icons: [DotNetIcon], value: 99, isIconImage: true, gradientClass: 'bg-gradient-be' },
        { id: 'Angular', name: 'Angular', icons: [AngularIcon], value: 99, isIconImage: true, gradientClass: 'bg-gradient-fe' },
        { id: 'React', name: 'React', icons: [ReactIcon], value: 99, isIconImage: true, gradientClass: 'bg-gradient-fe' },
        { id: 'Javascript', name: 'JavaScript', icons: [JavaScriptIcon], value: 95, isIconImage: true, gradientClass: 'bg-gradient-fe' },
        { id: 'HTML/CSS/SASS', name: 'HTML/CSS/SASS', icons: [HtmlIcon, CssIcon, SassIcon], value: 97, isIconImage: true, gradientClass: 'bg-gradient-fe' },
        { id: 'Node', name: 'Node', icons: [NodeIcon], value: 92, isIconImage: true, gradientClass: 'bg-gradient-be' },
        { id: 'Restapi', name: 'Rest-Api', icons: [RestApiIcon], value: 95, isIconImage: true, gradientClass: 'bg-gradient-be' },
        { id: 'Automation', name: 'Automation (E2E, Unit)', icons: [CypressIcon, SeleniumIcon], value: 70, isIconImage: true, gradientClass: 'bg-gradient-qa' },
        { id: 'NoSql', name: 'NoSql (MongoDB, DynamoDB)', icons: [SiMongodb, SiAmazondynamodb], value: 95, isIconImage: false, gradientClass: 'bg-gradient-db' },
        { id: 'Sql', name: 'Sql (MySQL, Oracle)', icons: [SiMysql, SiOracle], value: 60, isIconImage: false, gradientClass: 'bg-gradient-db' },
    ],
    Tools: [
        { id: 'vsstudio', name: 'VS Studio', icons: [vsIcon, vsCodeIcon] },
        { id: 'postmaninsomnia', name: 'Postman, Insomnia', icons: [postmanIcon, insomniaIcon] },
        { id: 'dockerkub', name: 'Docker, Kubernetes', icons: [dockerIcon, kuberIcon] },
        { id: 'source-control', name: 'Source control', icons: [gitIcon, sourceTreeIcon, gitKrakenIcon, bitbucketIcon] },
        { id: 'project-board', name: 'Sprints and Agile', icons: [ghBoardIcon, azBoardIcon, bitbucketIcon] },
        { id: 'iisserver', name: 'IIS', icons: [IIsIcon] },
        { id: 'redis', name: 'Redis', icons: [RedisIcon] },
        { id: 'websocker', name: 'Websocket', icons: [WebSocketIcon] },
        { id: 'rabbitmq', name: 'RabbitMQ', icons: [RabbitIcon] },
        { id: 'firebase', name: 'Firebase', icons: [FireBaseIcon] },
        { id: 'datascrap', name: 'data-scraping', icons: [DataScrapIcon] },
    ],
    Education: [
        {
            degree: 'BSc in Computer Science and Engineering (CSE)',
            instituteIcon: RuetIcon,
            institute: 'Rajshahi University of Engineering and Technology (RUET)',
            studyYear: 'Mar 2013 - Dec 2017',
            grade: 'CGPA - 3.48/4',
        },
        {
            degree: 'Higher Secondary School Certificate (Science)',
            instituteIcon: RUMCIcon,
            institute: 'RAJUK Uttara Model College',
            studyYear: 'Mar 2010 - Dec 2012',
            grade: 'GPA - 5.00/5',
        },
    ],
};
