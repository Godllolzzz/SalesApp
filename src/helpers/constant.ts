export const API_ADDRESS: string = 'https://www.scholarhat.com/api';

export const whatsappLink: string = "https://www.whatsapp.com/channel/0029VaEFj7IL7UVeLUzDiM1k";

export const Courses = [
    {
        id: 166,
        category: 'For Developers',
        level: 'BEGINNER FRIENDLY',
        title: 'Full-Stack .NET Developer Certification Training',
        description: 'Master ASP.NET Core, Web API, Angular/React with real-world projects',
        highlights: ['40+ Hands-on Labs', '2 Real-world Projects', 'Interview Preparation'],
        priceWas: '₹49,999',
        priceNow: '₹29,999',
        discount: '40% OFF',
        gradient: 'from-indigo-500 via-purple-500 to-purple-600',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        ],
        featured: false
    },
    {
        id: 355, // replace later
        category: 'For Developers',
        level: 'EXPERIENCED',
        title: 'Advanced Full-Stack Java Developer Certification Training',
        description: 'Spring Boot, AWS Developer, Angular/React - Build production-grade applications',
        highlights: ['50+ Hands-on Labs', 'Interview Q&A', 'Build 2 Real-world Projects'],
        priceWas: '₹58,999',
        priceNow: '₹34,999',
        discount: '41% OFF',
        gradient: 'from-orange-500 via-red-600 to-pink-600',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        ],
        featured: false
    },
    {
        id: 579,
        category: 'For Developers',
        level: 'EXPERIENCED',
        title: 'Java Microservices & AWS Certification Training',
        description: 'Spring Boot, AWS Developer – Master Microservices, Cloud Deployments, and Production Architecture',
        highlights: [
            '60+ Hands-on Labs',
            'Interview Q&A',
            'Microservices and CI/CD',
            'Build 2 Real-world Projects'
        ],
        priceWas: '₹58,999', // you will update
        priceNow: '₹34,999', // you will update
        discount: '41% OFF',
        gradient: 'from-cyan-500 via-teal-600 to-emerald-600',
        icons: [
            // Java
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            // Spring Boot
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            // AWS
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            // Docker (for CI/CD & Microservices)
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        ],
        featured: false
    }
    ,
    // {
    //     id: 444,
    //     category: 'NET',
    //     level: 'ADVANCED LEVEL',
    //     title: 'Advanced Full-Stack .NET Developer',
    //     description: 'Deep dive into .NET Core, Azure, Microservices & Enterprise Architecture',
    //     highlights: ['70+ Hands-on Labs', '3 Real-world Projects', 'Azure DevOps Training'],
    //     priceWas: '₹59,999',
    //     priceNow: '₹35,999',
    //     discount: '40% OFF',
    //     gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    //     icons: [
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    //     ],
    //     featured: true
    // },
    {
        id: 87,
        category: 'For Architects',
        level: 'ARCHITECT TRACK',
        title: '.NET Solution Architect Certification',
        description: 'Design scalable systems with microservices, cloud & design patterns',
        highlights: ['60+ Architecture Labs', 'System Design Projects', 'Cloud Architecture'],
        priceWas: '₹64,999',
        priceNow: '₹38,999',
        discount: '40% OFF',
        gradient: 'from-sky-400 via-blue-500 to-indigo-600',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        ],
        featured: false
    },

    {
        id: 1038, // replace later
        category: 'For Architects',
        level: 'EXPERIENCED',
        title: 'Java Solution Architect Certification Training',
        description: 'Master Design Patterns, Microservices Architecture & AWS DevOps',
        highlights: ['60+ Hands-on Labs', 'Interview Q&A', 'Build 2 Real-world Projects'],
        priceWas: '₹64,999',
        priceNow: '₹38,999',
        discount: '42% OFF',
        gradient: 'from-blue-600 via-cyan-600 to-teal-700',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        ],
        featured: false
    },
    {
        id: 419,
        category: 'For AI Enthusiasts',
        level: 'AI/ML SPECIALIST',
        title: 'Azure AI & Gen AI Engineer',
        description: 'Master AI, Machine Learning, LLMs and Generative AI technologies',
        highlights: ['50+ AI/ML Labs', '4 AI Projects', 'Gen AI & LLMs'],
        priceWas: '₹54,999',
        priceNow: '₹32,999',
        discount: '40% OFF',
        gradient: 'from-teal-400 via-cyan-500 to-cyan-600',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
        ],
        featured: false
    },
    {
        id: 427, // replace later
        category: 'For AI Enthusiasts',
        level: 'BEGINNER TO EXPERIENCED',
        title: 'AWS AI & Gen AI Engineer Certification Training',
        description: 'Master Python, AWS AI Services, Generative AI, LLMs with hands-on projects',
        highlights: ['50+ Hands-on Labs', 'Interview Q&A', 'Build 4 Real-world Projects'],
        priceWas: '₹56,999',
        priceNow: '₹33,999',
        discount: '40% OFF',
        gradient: 'from-purple-600 via-indigo-600 to-blue-700',
        icons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
        ],
        featured: true
    },

    // ==================== NEW COURSES ====================


    // {
    //     id: 579, // replace later
    //     category: 'JAVA',
    //     level: 'EXPERIENCED',
    //     title: 'Java Microservices & AWS Certification Training',
    //     description: 'Spring Boot, AWS, Microservices Architecture, CI/CD Pipelines',
    //     highlights: ['60+ Hands-on Labs', 'Interview Q&A', 'Build 2 Real-world Projects'],
    //     priceWas: '₹62,999',
    //     priceNow: '₹36,999',
    //     discount: '42% OFF',
    //     gradient: 'from-green-500 via-emerald-600 to-teal-700',
    //     icons: [
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    //         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    //     ],
    //     featured: false
    // }
];
export const dotNetMemberships = [
    {
        id: 200,
        title: '.NET Premium Membership',
        priceNow: '₹90,000',
        priceWas: '₹1,50,000',
        discount: '40% off',
        emi: '₹X/month',
        emiNote: '*Flexible EMI options available',
        processingFee: 'Processing Fee: ₹999 (One-time)',
        emiContact: 'Contact for EMI options',
        ctaText: 'Start Now',
        sections: [
            {
                title: 'Unlimited Live Training:',
                items: [
                    'ASP.NET Core',
                    'Angular',
                    'React',
                    '.NET Microservices',
                    'Software Architecture & Design',
                    'Azure Developer',
                    'Azure Solution Architect'
                ]
            },
            {
                title: 'Build Hands-On Experience:',
                items: [
                    'Hands-On Labs (250+)',
                    'Skill Tests (100+)',
                    'Real-World Projects (10+)'
                ]
            },
            {
                title: 'Empower Career:',
                items: [
                    'Resume Building and Review',
                    'Interview Q&A (100+)',
                    'Dedicated Support'
                ]
            }
        ]
    },
    {
        id: 1099,
        title: 'Azure AI Premium Membership',
        priceNow: '₹90,000',
        priceWas: '₹1,49,999',
        discount: '40% off',
        emi: '₹X/month',
        emiNote: '*Flexible EMI options available',
        processingFee: 'Processing Fee: ₹999 (One-time)',
        emiContact: 'Contact for EMI options',
        ctaText: 'Start Now',
        sections: [
            {
                title: 'Unlimited Live Training:',
                items: [
                    'Python and Python/Libs',
                    'Azure AI Engineer',
                    'Azure AI Foundry',
                    'Azure Agentic AI'
                ]
            },
            {
                title: 'Build Hands-On Experience:',
                items: [
                    'Hands-On Labs (250+)',
                    'Skill Tests (100+)',
                    'Real-World Projects (10+)'
                ]
            },
            {
                title: 'Empower Career:',
                items: [
                    'Resume Building and Review',
                    'Interview Q&A (100+)',
                    'Dedicated Support'
                ]
            }
        ]
    },

    // NEW: Java Premium Membership Added
    {
        id: 1100,
        title: 'Java Premium Membership',
        priceNow: '₹75,000',
        priceWas: '₹1,25,000',
        discount: '40% off',
        billing: '/year',
        billedText: 'Billed Yearly',
        emi: '₹X/month',
        emiNote: '*Flexible EMI options available',
        processingFee: 'Processing Fee: ₹999 (One-time)',
        emiContact: 'Contact for EMI options',
        ctaText: 'Start Now',
        sections: [
            {
                title: 'Unlimited Live Training:',
                items: [
                    'Angular',
                    'React',
                    'Spring Boot API',
                    'Java Microservices',
                    'Software Architecture & Design',
                    'AWS Developer',
                    'AWS DevOps'
                ]
            },
            {
                title: 'Build Hands-On Experience:',
                items: [
                    'Hands-On Labs (250+)',
                    'Skill Tests (100+)',
                    'Real-World Projects (10+)'
                ]
            },
            {
                title: 'Empower Career:',
                items: [
                    'Resume Building and Review',
                    'Interview Q&A (100+)',
                    'Dedicated Support'
                ]
            }
        ]
    }
];

export const doNetSuccessStories = [{
    id: 1,
    name: "Amit Anand",
    role: "Technical Lead",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/3520251112123142.jpg",
    rating: 4.5,
    date: "12 Nov 2025",
    training: ".NET Solution Architect Certification Training",
    story: "The program has significantly strengthened my skills in .NET Full Stack development, particularly in System Design, Integration, Technology selection, and leading teams from a technical side. As part of the training, I gained deep experience in ReactJS, .NET Core, Microservices, Docker, and MSSQL. It has improved my ability to deliver projects efficiently and positioned me for leadership roles."
},
{
    id: 2,
    name: "Khwaja Moinuddin Sheik",
    role: "Senior Software Engineer - Full Stack",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/4620250902121603.jpg",
    rating: 4.5,
    date: "03 Dec 2025",
    training: ".NET Solution Architect Certification Training",
    story: "The overall learning experience was great. It helped me understand software architecture and design patterns deeply. The unique feature that stands out is the real hands-on experience — something very rare in other platforms."
},
{
    id: 3,
    name: "Nilesh More",
    role: "Senior Software Engineer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/4620250704142750.jpg",
    rating: 4.5,
    date: "08 Jul 2025",
    training: "Advanced Full-Stack .NET Developer with Gen AI",
    story: "ScholarHat is a highly professional platform to learn expert-level skills. The teaching is clear, structured, and taught by experienced instructors. Content is industry-relevant with practical examples — perfect for building real-world skills."
},
{
    id: 4,
    name: "Kiran Nanaware",
    role: ".NET Core Fullstack Engineer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/4620250604202510.jpg",
    rating: 4.5,
    date: "01 Jan 2025",
    training: "Advanced Full-Stack .NET Developer with Gen AI",
    story: "The .NET Full Stack training was excellent and very job-oriented. From Angular to .NET Core, everything was taught practically. After completing the course, I got selected in a new company with a 50% salary hike — all thanks to ScholarHat!"
},
{
    id: 5,
    name: "Trupti Nawadkar",
    role: "Software Engineer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/4620250517112211.jpg",
    rating: 4.5,
    date: "17 May 2025",
    training: "Advanced Full-Stack .NET Developer with Gen AI",
    story: "I enrolled with 2 years of experience and found this course truly valuable. The combination of theory, hands-on labs, real-time projects, quizzes, and interview Q&A sessions made learning complete and effective."
},
{
    id: 6,
    name: "Anita Barai",
    role: "Software Developer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/4620250515185311.jpg",
    rating: 4.5,
    date: "13 May 2025",
    training: "Advanced Full-Stack .NET Developer with Gen AI",
    story: "I am extremely grateful to ScholarHat. After completing the .NET Full Stack course, I can confidently say the content is very well designed with a strong focus on practical learning. Now working as a .NET Web Developer at a reputed company."
},
{
    id: 7,
    name: "Sankeerth",
    role: ".NET Developer At Mphasis",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/920211016152737.jpg",
    rating: 4.5,
    date: "27 Jun 2025",
    training: "Azure Developer Certification Course (AZ-204)",
    story: "I took a subscription for a self-paced training program with ScholarHat. I enjoyed the course, and it has given me a boost up on cloud and UI. Today I have reached my goal to get a perfect figure in my career. Thank you ScholarHat for helping me achieve this."
},
{
    id: 8,
    name: "Rakhi Ranglani",
    role: "Lead Software Engineer at XtremeIT Technologies",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/2820240928153213.jpeg",
    rating: 4.5,
    date: "25 Sep 2025",
    training: "Data Structures and Algorithms Training",
    story: "I had the pleasure of learning DSA from ScholarHat — truly insightful! The instructor explained complex concepts in a simple, digestible way. His teaching style is engaging and makes tough topics approachable."
},
{
    id: 9,
    name: "Jayaraj Ganesh",
    role: "Software Engineer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/2820240805141353.jpeg",
    rating: 4.5,
    date: "03 Aug 2025",
    training: "Data Structures & Algorithms with Java",
    story: "The DSA training transformed my problem-solving approach. The instructor’s deep knowledge and clear teaching helped me advance in interviews. Best resource to level up coding skills and crack top companies."
},
{
    id: 10,
    name: "Alan Kwok",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/2820240805140716.jpeg",
    role: "Senior Web Developer",
    rating: 4.5,
    date: "03 Aug 2024",
    training: "Data Structures and Algorithms with C#",
    story: "One of the best learning experiences I’ve had. Amit taught DSA in a user-friendly way without overwhelming. His knowledge goes beyond theory — he teaches how to apply concepts in real interviews and projects."
},

{
    id: 12,
    name: "Munish Sawhney",
    role: "Software Engineer",
    image: "https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/920211009192345.png",
    rating: 4.5,
    date: "18 May 2025",
    training: ".NET Premium Membership",
    story: "I am a software engineer with around 21 years of experience in C/C++/Java. My recent business venture required me to learn web technologies on MERN/MEAN stack. Prior to getting introduced, to ScholarHat by DotNetTricks, I had no idea of C# and .NET Core. The learning path and the way the courses are structured made it easy for me to grasp the concepts quickly and effectively. The hands-on labs and real-world projects helped me gain practical experience, which was invaluable. I highly recommend ScholarHat to anyone looking to upskill in web development."
},

{
    rating: 4.5,
    id: 13,
    date: "05 Aug 2018",
    name: 'Sudipta Saha',
    training: '.NET Developer Certification Training',
    role: 'Sr. Product Development R & D Bangalore',
    image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/920180811103251.png',
    story: 'I took instructor-led online Training on Asp.Net MVC with Angular.It was a nice experience for me that honestly speaking help me grow in my career with 90% growth. After completions of my training I cracked 3 interviews in Bangalore at same time.Almost all questions of interview were discussed and how to answered was discussed in Live session.I learnt real-time exposure as project development part was based upon how we work on clients projects. I recommend you as well to invest for your learning at Scholarhat.'
},
{
    id: 14,
    date: "28 May 2017",
    rating: 4.5,
    name: 'Shweta Talraj',
    training: '.Net Solution Architect Certification Training',
    role: 'Sr. Software Engineer',
    image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/920180811095750.png',
    story: 'The trainer has a profound understanding and knowledge on the subjects he chooses to teach. ScholarHat Faculty has been utterly helpful. Staff members are supportive and motivating too. Just beyond expectations!! Training touches upon on all the topics talked about in a particular course curriculum without giving any of them a miss. The training is a great deal to accomplish a particular skill-set in your profile as the training covers all the important aspects and topics of the technology one needs to know to have a good understanding of that technology. I am sure it will be of immense help and importance to my career from ScholarHat.'
},
{
    id: 15,
    rating: 4.5,
    name: 'Rohit Singh',
    training: '.NET Developer Certification Training',
    role: 'Software Developer',
    image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/testimonialImages/920180811084953.png',
    story: 'It was a tremendous experience with ScholarHat specially in .NET. Staff of ScholarHat are well mannered, friendly nature, they are very Supportive. Trainer always clear every concept when developing real time project. His concept is clear cut, the way to make us understand is awesome, some of SDKs like, Android SDK, IOS SDK, Windows SDK. Training quality is Excellent which leads to make a great career.'
}
]