import { useState, useEffect } from 'react'
import { Flame, CheckCircle, Timer } from 'lucide-react'
import img from '../assests/images/sir.png'
import Popup2 from './PopUp2';

function HeroSection() {
    const [isPopUpOpen, setIsPopupOpen] = useState(false);
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
        <>
            {isPopUpOpen && <Popup2 onClose={() => setIsPopupOpen(false)} />}
            <section id="hero-section" className="pt-20 relative bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 px-2 md:px-4 overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Top Heading - One Line */}
                    <div className="text-center lg:text-left my-4">
                        <div className="text-2xl text-center md:text-2xl font-bold text-yellow-600 dark:text-yellow-400 animate-bounce lg:text-left">
                            Offer valid till 31 Dec!
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
                            The Biggest Tech Career{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">
                                Upgrade Offer of 2025
                            </span>
                        </h1>
                    </div>

                    {/* Main Content Box - Split into Two */}
                    <div className="flex justify-center flex-col lg:flex-row gap-8 items-center lg:items-end">
                        {/* Left Side - Content */}
                        <div className="lg:flex-6 space-y-6 mb-5">

                            <div className="flex items-center justify-center lg:justify-start gap-3 text-lg md:text-xl text-gray-900 dark:text-white font-bold">
                                <Flame className="w-7 h-7 text-orange-500 flex-shrink-0" />
                                <span>Flat ₹7,500 OFF + FREE Bonuses Worth ₹25,000</span>
                            </div>

                            <div className="text-base text-cyan-600 dark:text-cyan-400 font-semibold text-center lg:text-left">
                                Valid for ALL 4–6 Month Job-Oriented Programs
                            </div>

                            <div className="space-y-2 text-md">
                                {/* FOR DEVELOPERS */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                        For Developers:
                                    </h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                                        {[
                                            'Full Stack .NET Core',
                                            'Java Full Stack',
                                            'Java Microservices'
                                        ].map((program, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs md:text-base flex items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-2 dark:text-white bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 shadow-sm hover:shadow transition-shadow"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* FOR ARCHITECTS */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                        For Architects:
                                    </h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                                        {[
                                            '.NET Solution Architect',
                                            'Java Solution Architect',
                                            'Azure Cloud Architect'
                                        ].map((program, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs md:text-base flex items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-2 dark:text-white bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 shadow-sm hover:shadow transition-shadow"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* FOR AI ENTHUSIASTS */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                        For AI Enthusiasts:
                                    </h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                                        {[
                                            'Azure AI & GenAI Engineer',
                                            'AWS AI & GenAI Engineer'
                                        ].map((program, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs md:text-base flex items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-2 dark:text-white bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 shadow-sm hover:shadow transition-shadow"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row justify-start gap-8 items-center'>

                                <div className="w-full bg-gradient-to-br from-orange-50 via-orange-50 to-yellow-50 dark:from-orange-950/30 dark:via-orange-950/20 dark:to-yellow-950/10 backdrop-blur-xl border border-orange-200 dark:border-orange-500/30 rounded-2xl p-4 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/30 max-w-sm">
                                    {/* Header */}
                                    <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400 text-sm font-bold mb-3">
                                        <Timer className="w-4 h-4 animate-pulse text-orange-500" />
                                        Offer Ends In
                                    </div>

                                    {/* Countdown Grid */}
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {[
                                            { value: timeLeft.days, label: "Days" },
                                            { value: timeLeft.hours, label: "Hours" },
                                            { value: timeLeft.minutes, label: "Mins" },
                                            { value: timeLeft.seconds, label: "Secs" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-orange-500 dark:bg-orange-600 backdrop-blur-md rounded-lg py-2.5 text-center border border-orange-300 dark:border-orange-500/30 shadow-sm"
                                            >
                                                <div className="text-2xl md:text-3xl font-black text-white tracking-wide">
                                                    {String(item.value).padStart(2, "0")}
                                                </div>
                                                <div className="text-[10px] font-semibold text-orange-100 uppercase tracking-wider mt-0.5">
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="cursor-pointer inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg md:rounded-xl font-bold text-md md:text-lg hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    Talk to Counsellor
                                </button>
                            </div>
                            {/* Countdown Timer */}
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:flex-4 relative flex items-center justify-center">
                            <div className="relative z-10">
                                <img
                                    src={img}
                                    alt="Expert Instructor Teaching Live"
                                    className="rounded-2xl w-full max-w-lg h-auto object-cover drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                                />
                            </div>

                            {/* Decorative Orbs */}
                            <div className="absolute top-0 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="absolute bottom-0 -left-10 w-40 h-40 bg-gradient-to-tr from-sky-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection