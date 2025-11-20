import { useState, useEffect } from 'react'
import { PartyPopper, Flame, CheckCircle, Rocket, Video, Clock, Circle, Timer } from 'lucide-react'

function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59')

        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        {/* <PartyPopper className="w-16 h-16 text-yellow-400" /> */}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                        The Biggest Tech Career
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            Upgrade Offer of 2025
                        </span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                        Ends 31 Dec!
                    </div>

                    <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-white font-bold mb-8">
                        <Flame className="w-8 h-8 text-orange-500" />
                        <span>Flat ₹7,500 OFF + FREE Bonuses Worth ₹25,000</span>
                    </div>

                    <div className="text-lg text-cyan-400 font-semibold mb-10">
                        Valid for ALL 4–6 Month Job-Oriented Programs
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm text-white">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Full Stack .NET Core + Azure AZ-204 + AI
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            .NET Solution Architect
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Advanced Java Full Stack
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Azure AI Engineer
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            GenAI Engineer
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Agentic AI Engineer
                        </span>
                    </div>

                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 shadow-lg">
                            <Rocket className="w-6 h-6" />
                            Grab Year-End Offer Now →
                        </button>
                        <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                            <Video className="w-6 h-6" />
                            Watch 60-sec Cloud Sandbox Demo
                        </button>
                    </div> */}

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 mb-8 shadow-xl">
                        <div className="flex items-center justify-center gap-2.5 text-cyan-300 text-lg font-bold mb-4">
                            <Timer className="w-5 h-5 animate-pulse" />
                            Offer Ends In
                        </div>

                        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
                            {[
                                { value: timeLeft.days, label: "Days" },
                                { value: timeLeft.hours, label: "Hours" },
                                { value: timeLeft.minutes, label: "Mins" },
                                { value: timeLeft.seconds, label: "Secs" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/15 backdrop-blur-md rounded-xl py-4 text-center border border-white/10"
                                >
                                    <div className="text-3xl font-black text-white tracking-wider">
                                        {String(item.value).padStart(2, "0")}
                                    </div>
                                    <div className="text-xs font-medium text-cyan-200 uppercase tracking-wider mt-1">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-center gap-2 text-green-400 font-bold text-sm animate-pulse">
                        <Circle className="w-4 h-4 fill-green-400" />
                        Only 25 Seats Get Architect 1:1 Bonus
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
