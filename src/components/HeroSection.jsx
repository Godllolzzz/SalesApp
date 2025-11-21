import { useState, useEffect } from 'react'
import { Flame, CheckCircle, Timer } from 'lucide-react'
import img from '../assests/images/image.png'

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
        <section className="pt-20 relative bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 px-2 md:px-4 overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Heading - One Line */}
                <div className="text-center lg:text-left my-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
                        The Biggest Tech Career{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">
                            Upgrade Offer of 2025
                        </span>
                    </h1>
                </div>

                {/* Main Content Box - Split into Two */}
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 mb-5">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 text-center lg:text-left">
                            Ends 31 Dec!
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-3 text-lg md:text-xl text-gray-900 dark:text-white font-bold">
                            <Flame className="w-7 h-7 text-orange-500 flex-shrink-0" />
                            <span>Flat ₹7,500 OFF + FREE Bonuses Worth ₹25,000</span>
                        </div>

                        <div className="text-base text-cyan-600 dark:text-cyan-400 font-semibold text-center lg:text-left">
                            Valid for ALL 4–6 Month Job-Oriented Programs
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 dark:text-white text-md">
                            {[
                                'Full Stack .NET Core + Azure AZ-204 + AI',
                                '.NET Solution Architect',
                                'Advanced Java Full Stack',
                                'Azure AI Engineer',
                                'GenAI Engineer',
                                'Agentic AI Engineer'
                            ].map((program, idx) => (
                                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-white/20 shadow-sm">
                                    <CheckCircle className="w-3.5 h-3.5 text-green-500 dark:text-green-400 flex-shrink-0" />
                                    {program}
                                </span>
                            ))}
                        </div>

                        {/* Countdown Timer */}
                        <div className="bg-gradient-to-br from-orange-50 via-orange-50 to-yellow-50 dark:from-orange-950/30 dark:via-orange-950/20 dark:to-yellow-950/10 backdrop-blur-xl border border-orange-200 dark:border-orange-500/30 rounded-2xl p-5 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/30">
                            <div className="flex items-center justify-center gap-2.5 text-orange-600 dark:text-orange-400 text-base font-bold mb-4">
                                <Timer className="w-5 h-5 animate-pulse text-orange-500" />
                                Offer Ends In
                            </div>

                            <div className="grid grid-cols-4 gap-2 mx-auto">
                                {[
                                    { value: timeLeft.days, label: "Days" },
                                    { value: timeLeft.hours, label: "Hours" },
                                    { value: timeLeft.minutes, label: "Mins" },
                                    { value: timeLeft.seconds, label: "Secs" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 bg-orange-500 dark:bg-orange-600 backdrop-blur-md rounded-xl py-3 text-center border border-orange-200 dark:border-orange-500/20 shadow-sm"
                                    >
                                        <div className="text-4xl font-black text-white tracking-wider">
                                            {String(item.value).padStart(2, "0")}
                                        </div>
                                        <div className="text-xs font-medium text-orange-200 dark:text-orange-300 uppercase tracking-wider mt-1">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative z-10">
                            <img
                                src={img}
                                alt="Expert Instructor Teaching Live"
                                className="rounded-2xl w-full max-w-md h-auto object-cover drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                            />
                        </div>

                        {/* Decorative Orbs */}
                        <div className="absolute top-0 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-gradient-to-tr from-sky-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection