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
        }
    ]

    return (
        <section className="py-20 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
                        Learn From the Top 1%
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                            Experts in the Industry
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Microsoft MVPs, Architects, and Industry Leaders
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-600"
                        >
                            {/* Profile Image - Circular & Smaller */}
                            <div className="relative px-8 pt-10 pb-6">
                                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl ring-4 ring-cyan-500/20">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Badge on top-right of image */}
                                <div className="absolute top-1 right-1 px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-full text-xs font-bold shadow-lg">
                                    {trainer.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-8 -mt-4">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 text-center">
                                    {trainer.name}
                                </h3>
                                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold mb-6 text-center">
                                    {trainer.title}
                                </p>

                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                                    {trainer.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-cyan-500 mt-0.5 text-lg">★</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrainersSection