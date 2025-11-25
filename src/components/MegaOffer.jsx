import { Gift, Zap, Star, Flame, Circle, Clock } from 'lucide-react'

function MegaOffer() {
    const bonuses = [
        { name: 'Leadership Skills Accelerator', value: '₹9,999' },
        { name: 'Career Coaching & 1:1 Planning', value: '₹4,999' },
        { name: 'Azure Certification Kit (AZ-900, AZ-104, AZ-204)', value: '₹3,999' },
        { name: 'Coding Booster AI Pack', value: '₹2,500' },
        { name: 'Interview Accelerator Pack', value: '₹1,999' }
    ]

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Gift className="w-10 h-10 text-orange-600" />
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                            Year-End Mega Offer 2025
                        </h2>
                    </div>
                    <p className="text-lg font-bold text-orange-600">Enroll Now & Save BIG — This Offer Comes Once a Year</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
                            <div>
                                <div className="text-white/80 text-sm font-semibold mb-1">Regular Price</div>
                                <div className="text-white text-3xl font-black line-through">₹45,000</div>
                            </div>
                            <div className="text-4xl font-black text-white">→</div>
                            <div>
                                <div className="text-yellow-300 text-sm font-semibold mb-1">Year-End Offer Price</div>
                                <div className="text-white text-4xl font-black">₹37,500</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-yellow-300 text-lg font-bold">
                            <Zap className="w-5 h-5" />
                            Save ₹7,500 instantly
                        </div>
                        <div className="text-white/80 text-xs mt-1">(prices increase Jan 1st)</div>
                    </div>

                    <div className="p-6">
                        <div className="text-center mb-6">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Star className="w-6 h-6 text-orange-600 fill-orange-600" />
                                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                    FREE BONUSES WORTH ₹25,000
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">(Only for December Enrollments)</p>
                        </div>

                        <div className="space-y-2 mb-6">
                            {bonuses.map((bonus, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 rounded-lg hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                                            <Star className="w-3 h-3 text-white fill-white" />
                                        </div>
                                        <span className="font-semibold text-sm text-slate-800 dark:text-white">{bonus.name}</span>
                                    </div>
                                    <span className="text-orange-600 font-bold text-base">{bonus.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-500 rounded-xl p-3 text-center mb-6">
                            <div className="text-lg font-black text-green-800 dark:text-green-400">
                                Total Bonus Value: ₹25,000 — FREE This Month Only
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <button className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 shadow-lg">
                                <Flame className="w-5 h-5" />
                                Claim the Offer + Free Bonuses →
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 text-center text-xs font-bold">
                            <div className="flex items-center justify-center gap-1.5 text-orange-600">
                                <Circle className="w-3 h-3 fill-orange-600" />
                                Only 25 Seats Get Architect 1:1 Mentorship
                            </div>
                            <div className="flex items-center justify-center gap-1.5 text-red-600">
                                <Clock className="w-3 h-3" />
                                Offer Ends 31 December at Midnight
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MegaOffer
