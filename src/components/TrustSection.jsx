import { Award, Cloud, Users, TrendingUp, Calendar } from 'lucide-react';

function TrustSection() {
    const trustPoints = [
        { icon: Award, text: 'Learn From Microsoft MVPs & Architects', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
        { icon: Cloud, text: 'Real Cloud Sandbox + Hands-on Labs', color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
        { icon: Users, text: '2,00,000+ Developers Trained', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
        { icon: TrendingUp, text: 'Programs Built for 15–55 LPA Roles', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
        { icon: Calendar, text: '4–6 Month Job-Focused Curriculum', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    ];

    return (
        <section className="py-8 md:py-12 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Why Choose Section */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">ScholarHat</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Trusted by developers worldwide for career transformation
                    </p>
                </div>

                {/* Trust Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
                    {trustPoints.map((point, index) => {
                        const Icon = point.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-200 dark:border-slate-700 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${point.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]`}>
                                        <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white leading-snug">{point.text}</p>
                                </div>

                                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${point.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}

export default TrustSection;