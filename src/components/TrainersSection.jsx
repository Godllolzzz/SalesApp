import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function TrainersSection() {
    const trainers = [
        {
            id: 1,
            name: 'Shailendra Chauhan',
            title: 'Microsoft MVP, Founder & CEO at ScholarHat',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120241224155427.png',
            points: [
                '15+ Years at Microsoft Technologies',
                'Expert in .NET, Angular, React, Node.js',
                'Azure Cloud & AI/ML Specialist'
            ],
            badge: '10X Microsoft MVP • AI Architect'
        },
        {
            id: 2,
            name: 'Pradeep Shet',
            title: 'Author and Solution Architect',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120241219144553.png',
            points: [
                '14+ Years Training Microsoft Technologies',
                'Expert in JavaScript, AngularJS & NoSQL',
                '70+ Corporate Trainings & Technical Author'
            ],
            badge: 'Technical Author'
        },
        {
            id: 3,
            name: 'Pranit Thakur',
            title: 'Technical Consultant and Corporate Trainer',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120221202073912.png',
            points: [
                '12+ Years Technical & Corporate Training',
                'Expert in React, Angular & Node.js',
                'Passionate Technology Trainer & Mentor'
            ],
            badge: 'Mentor'
        },
        {
            id: 4,
            name: 'Bhawna Gunwani',
            title: 'Corporate Trainer & Full-Stack Expert',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120190306160109.png',
            points: [
                '8+ Years in Technical & Corporate Training',
                'Delivered trainings in India & abroad',
                'Trained top MNCs: TCS, Infosys, Accenture, Wipro',
                'Expert in .NET, React, Angular, Node.js'
            ],
            badge: 'Corporate Trainer • Full-Stack Specialist'
        },
        {
            id: 5,
            name: 'Rahul Kumar',
            title: 'Author and .NET Tech Lead',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120230814154636.png',
            points: [
                'Accomplished Author & .NET Tech Lead',
                'Lifelong learner passionate about innovation',
                'Deep expertise in .NET ecosystem',
                'Actively mentors and shares cutting-edge insights'
            ],
            badge: 'Author • .NET Tech Lead'
        },
        {
            id: 6,
            name: 'Vishwanathan Narayanan (VNN)',
            title: 'Mentor & Solution Architect',
            image: 'https://dotnettrickscloud.blob.core.windows.net/uploads/mentorImages/120250819214423.jpg',
            points: [
                '20+ Years building enterprise solutions',
                'Expert in Java, Spring Boot, Microservices & AWS',
                'Led large-scale digital transformations',
                'Specializes in cloud-native architecture'
            ],
            badge: 'Solution Architect • AWS & Java Expert'
        }
    ];

    const autoplay = Autoplay({ delay: 4500, stopOnInteraction: true });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [autoplay]
    );

    const Trainers = [...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers, ...trainers]; // to ensure smooth looping
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section id="tutors" className="py-20 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
                        Learn From the Top 1%
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500">
                            Experts in the Industry
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Microsoft MVPs, Architects, and Industry Leaders
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden py-4" ref={emblaRef}>
                        <div className="flex gap-8">
                            {Trainers.map((trainer) => (
                                <div
                                    key={trainer.id}
                                    className="flex-shrink-0 w-full sm:w-[380px] lg:w-[400px]
                                        group bg-gradient-to-br from-slate-50 to-blue-50 
                                        dark:from-slate-800 dark:to-slate-700 
                                        rounded-2xl shadow-xl hover:shadow-2xl 
                                        transition-all duration-500 hover:-translate-y-3 
                                        overflow-hidden border border-slate-200 dark:border-slate-600"
                                >
                                    {/* Profile Image */}
                                    <div className="relative px-8 pt-10 pb-6">
                                        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl ring-4 ring-cyan-500/20 group-hover:ring-cyan-500 dark:group-hover:ring-cyan-400 transition">
                                            <img
                                                src={trainer.image}
                                                alt={trainer.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-full text-xs font-bold shadow-lg">
                                            {trainer.badge}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-8 pb-10 -mt-4">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 text-center">
                                            {trainer.name}
                                        </h3>
                                        <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold mb-6 text-center">
                                            {trainer.title}
                                        </p>

                                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                            {trainer.points.map((point, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="text-cyan-500 mt-0.5 text-lg">Star</span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 
                            bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100 dark:hover:bg-slate-700 
                            rounded-full flex items-center justify-center backdrop-blur-sm 
                            shadow-lg border border-gray-200 dark:border-slate-700
                            transition-all duration-200 z-10"
                    >
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 
                            bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100 dark:hover:bg-slate-700 
                            rounded-full flex items-center justify-center backdrop-blur-sm 
                            shadow-lg border border-gray-200 dark:border-slate-700
                            transition-all duration-200 z-10"
                    >
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrainersSection;