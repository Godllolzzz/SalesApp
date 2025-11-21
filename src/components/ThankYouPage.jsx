import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from './Header';

function ThankYouPage() {
    return (
        <div className="min-h-screen max-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col">
            {/* Full-screen background */}
            <Header showButton={false} />
            <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
                <div className="pt-14 md:pt-20 text-center">
                    {/* Success Icon */}
                    <div className='flex flex-col md:flex-row items-center'>

                        <div className="mb-2 md:mb-8">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                                <CheckCircle className="relative w-24 h-24 md:w-32 md:h-32 text-cyan-500 mx-auto" strokeWidth={2} />
                            </div>
                        </div>
                        <div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                                Thank You for Enrolling!
                            </h1>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 leading-relaxed max-w-2xl mx-auto">
                                We've received your enrollment request and our team will contact you shortly with course details and next steps.
                            </p>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="mb-4">
                        <svg
                            viewBox="0 0 400 300"
                            className="w-full max-w-lg mx-auto"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="50" y="80" width="120" height="160" rx="8" fill="#06b6d4" opacity="0.1" />
                            <rect x="60" y="90" width="100" height="10" rx="5" fill="#06b6d4" />
                            <rect x="60" y="110" width="80" height="8" rx="4" fill="#06b6d4" opacity="0.6" />
                            <rect x="60" y="125" width="90" height="8" rx="4" fill="#06b6d4" opacity="0.6" />

                            <rect x="230" y="50" width="120" height="180" rx="8" fill="#3b82f6" opacity="0.1" />
                            <rect x="240" y="60" width="100" height="10" rx="5" fill="#3b82f6" />
                            <rect x="240" y="80" width="80" height="8" rx="4" fill="#3b82f6" opacity="0.6" />
                            <rect x="240" y="95" width="90" height="8" rx="4" fill="#3b82f6" opacity="0.6" />

                            <circle cx="120" cy="180" r="30" fill="#06b6d4" opacity="0.2" />
                            <path d="M110 180 L118 188 L135 171" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                            <circle cx="290" cy="170" r="25" fill="#3b82f6" opacity="0.2" />
                            <path d="M280 170 L287 177 L302 162" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                            <path d="M 20 250 Q 100 230, 180 250 T 340 250" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" opacity="0.4" fill="none" />

                            <circle cx="80" cy="40" r="8" fill="#06b6d4" opacity="0.3" />
                            <circle cx="320" cy="30" r="6" fill="#3b82f6" opacity="0.3" />
                            <circle cx="360" cy="100" r="10" fill="#06b6d4" opacity="0.2" />

                            <path d="M 190 100 L 210 100 M 200 90 L 200 110" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                        </svg>
                    </div>

                    {/* Back Button */}
                    <button
                        onClick={() => window.location.href = '/'}
                        className="cursor-pointer inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg md:rounded-xl font-bold text-md md:text-lg hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                    >
                        <ArrowLeft className="w-6 h-6" />
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThankYouPage;