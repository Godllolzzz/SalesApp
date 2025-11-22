import { useState, useEffect } from 'react';
import { Sun, Moon, Timer } from 'lucide-react';
import logo from "../assests/images/logo.png";

const Header = ({ showButton = true }) => {
    const [isDark, setIsDark] = useState(false);
    const [showTimer, setShowTimer] = useState(false);

    // Countdown state
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        // Theme initialization (your existing code)
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
            setIsDark(shouldBeDark);
            document.documentElement.classList.toggle('dark', shouldBeDark);
        };
        initializeTheme();

        // Countdown Timer Logic
        const targetDate = new Date('2025-12-31T23:59:59');
        const updateTimer = () => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60)
                });
            }
        };
        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        // Scroll detection: Show timer when Hero is scrolled past
        const handleScroll = () => {
            const hero = document.getElementById('hero-section');
            if (hero) {
                const heroBottom = hero.getBoundingClientRect().bottom;
                setShowTimer(heroBottom <= 80); // 80px = header height + buffer
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle('dark', newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700/50 transition-all duration-300">
            <div className="container mx-auto px-2">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href='/' className="flex items-center gap-1 z-10">
                        <img src={logo} className="w-10 h-10 md:w-12 md:h-12" alt="ScholarHat Logo" />
                        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            ScholarHat
                        </h1>
                    </a>

                    {/* Centered Countdown Timer - Only shows on scroll */}
                    <div className="w-fit pointer-events-none animate-bounce mt-2 lg:mt-3">
                        <div className={`flex items-center gap-1 sm:gap-3 bg-orange-500 text-white px-3 sm:px-5 py-2 rounded-full shadow-2xl transition-all duration-500 ${showTimer ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <Timer className="w-5 h-5 animate-pulse" />
                            <span className="font-bold text-xs sm:text-sm md:text-xs lg:text-base">
                                Offer Ends: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m <span className='hidden sm:inline md:hidden lg:inline'> {timeLeft.seconds}s</span>
                            </span>
                        </div>
                    </div>

                    {/* Navigation (Desktop) */}
                    {showButton && (
                        <nav className="hidden md:flex items-center space-x-8 z-10">
                            <a href="#trainings" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">Trainings</a>
                            <a href="#memberships" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">Membership</a>
                            <a href="#tutors" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">Tutors</a>
                            <a href="#reviews" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">Reviews</a>
                        </nav>
                    )}

                    {/* Theme Toggle (Uncomment if you want it back) */}
                    {/* <button onClick={toggleTheme} className="p-2 ...">...</button> */}
                </div>
            </div>
        </header>
    );
};

export default Header;