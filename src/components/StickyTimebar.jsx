// components/StickyTimerBar.jsx
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const StickyTimerBar = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59');

        // Check if hero section is scrolled past
        const checkScroll = () => {
            const hero = document.getElementById('hero-section');
            if (!hero) return;

            const heroBottom = hero.getBoundingClientRect().bottom;
            setIsVisible(heroBottom <= 0); // Show when hero is fully scrolled past
        };

        // Timer logic
        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        // Initial check + scroll listener
        checkScroll();
        window.addEventListener('scroll', checkScroll);

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    // Don't render if not visible or offer expired
    if (!isVisible || timeLeft.days < 0) return null;

    return (
        <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl transform transition-all duration-500">
            <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4 text-sm md:text-base font-bold">
                <Timer className="w-5 h-5 animate-pulse" />
                <span className="hidden sm:inline">Limited Time Offer Ends In:</span>
                <span className="inline sm:hidden">Offer Ends In:</span>

                <div className="flex gap-3">
                    {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Mins' },
                        { value: timeLeft.seconds, label: 'Secs' }
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="bg-black/30 backdrop-blur-md rounded-lg px-3 py-1.5 min-w-[50px]">
                                {String(item.value).padStart(2, '0')}
                            </div>
                            <div className="text-xs mt-1 opacity-90">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StickyTimerBar;