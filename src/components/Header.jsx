import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from "../assests/images/logo.png"

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Initialize theme on component mount
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

            setIsDark(shouldBeDark);

            if (shouldBeDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        initializeTheme();
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <a href='/' className="flex items-center gap-1">
                        <img src={logo} className="w-10 h-10 md:w-12 md:h-12" alt="ScholarHat Logo" />
                        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            ScholarHat
                        </h1>
                    </a>

                    {/* Navigation Menu - Hidden on mobile, shown on larger screens */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#trainings" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-200">
                            Trainings
                        </a>
                        <a href="#memberships" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-200">
                            Memberships
                        </a>
                        <a href="#reviews" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-200">
                            Reviews
                        </a>
                    </nav>

                    {/* Right Side - Theme Toggle */}
                    {/* <div className="flex items-center space-x-4">

                        <button
                            onClick={toggleTheme}
                            className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
                            aria-label="Toggle theme"
                        >
                            <div className="relative w-6 h-6">
                                <Sun
                                    className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                                        }`}
                                />
                                <Moon
                                    className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                                        }`}
                                />
                            </div>

                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {isDark ? 'Light mode' : 'Dark mode'}
                            </div>
                        </button>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;