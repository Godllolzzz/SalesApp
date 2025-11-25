import { Gift, Zap, Star, Flame, Circle, Clock } from 'lucide-react';

function WhyAndOfferSection() {
    const bonuses = [
        { name: 'Leadership Skills Accelerator', value: '₹9,999' },
        { name: 'Career Coaching & 1:1 Planning', value: '₹4,999' },
        { name: 'Azure Certification Kit (AZ-900, AZ-104, AZ-204)', value: '₹3,999' },
        { name: 'Coding Booster AI Pack', value: '₹2,500' },
        { name: 'Interview Accelerator Pack', value: '₹1,999' }
    ];

    return (
        <section className="py-8 md:py-16 px-3 md:px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Desktop: Side by Side | Mobile: Stacked */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">

                    {/* LEFT: Why Section */}
                    <div className="order-2 lg:order-1">
                        <div className="text-center lg:text-left mb-6 md:mb-10 lg:mb-12">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-6 text-slate-900 dark:text-white leading-tight">
                                2026 Will Reward Cloud, AI & Architecture Skills
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                                    Don't Fall Behind
                                </span>
                            </h2>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl">
                            <p className="text-sm md:text-lg text-slate-700 dark:text-slate-300 mb-5 md:mb-8 leading-relaxed">
                                Most developers stay stuck because they lack <span className="font-bold text-orange-600">real cloud experience</span>, <span className="font-bold text-orange-600">AI project exposure</span>, and <span className="font-bold text-orange-600">architect-level skills</span>.
                            </p>

                            <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Companies now hire engineers who can:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {[
                                    "Deploy on Azure or AWS",
                                    "Build AI/GenAI-powered solutions",
                                    "Deliver scalable backend systems",
                                    "Understand system design & architecture"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                                        <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-slate-800 dark:text-white text-xs md:text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 md:mt-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 border-2 border-orange-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                                <p className="text-base md:text-xl font-bold text-slate-900 dark:text-white">
                                    ScholarHat gives you all of this — fast, practical, and taught by MVPs & Architects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Mega Offer */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                            <Gift className="w-7 h-7 md:w-10 md:h-10 text-white" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white">Year-End Mega Offer 2025</h2>
                        </div>
                        <p className="text-orange-500 text-center font-bold text-sm md:text-lg mb-4">Enroll Now & Save BIG — This Offer Comes Once a Year</p>
                        <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">

                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 md:p-6 text-center">

                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6">
                                    <div>
                                        <div className="text-white/80 text-xs md:text-sm font-semibold">Regular Price</div>
                                        <div className="text-white text-2xl md:text-3xl font-black line-through">₹45,000</div>
                                    </div>
                                    <div className="text-2xl md:text-4xl font-black text-white">→</div>
                                    <div>
                                        <div className="text-yellow-300 text-xs md:text-sm font-semibold">Offer Price</div>
                                        <div className="text-white text-3xl md:text-4xl font-black">₹37,500</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-yellow-300 text-base md:text-lg font-bold mt-2 md:mt-3">
                                    <Zap className="w-4 h-4 md:w-5 md:h-5" />
                                    Save ₹7,500 instantly
                                </div>
                            </div>

                            <div className="p-5 md:p-6 lg:p-8">
                                <div className="text-center mb-5 md:mb-6">
                                    <div className="flex items-center justify-center gap-2">
                                        <Star className="w-5 h-5 md:w-7 md:h-7 text-orange-600 fill-orange-600" />
                                        <h3 className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                            FREE BONUSES WORTH ₹25,000
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-2 md:space-y-3 mb-5 md:mb-6">
                                    {bonuses.map((bonus, i) => (
                                        <div key={i} className="flex justify-between items-center p-2.5 md:p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/40 rounded-lg">
                                            <div className="flex items-center gap-2 md:gap-3">
                                                <Star className="w-4 h-4 md:w-5 md:h-5 text-orange-600 fill-orange-600 flex-shrink-0" />
                                                <span className="font-medium text-slate-800 dark:text-white text-xs md:text-sm">{bonus.name}</span>
                                            </div>
                                            <span className="text-orange-600 font-bold text-xs md:text-sm flex-shrink-0 ml-2">{bonus.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500 rounded-xl p-3 md:p-4 text-center">
                                    <p className="text-base md:text-lg font-black text-green-800 dark:text-green-400">
                                        Total Bonus Value: ₹25,000 — FREE This Month Only
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyAndOfferSection;