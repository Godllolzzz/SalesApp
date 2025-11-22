import React, { useState } from 'react';
import {
    BookOpen, Code, Rocket, ArrowRight, Star, Zap, Target, CheckCircle,
    Sparkles, Play, Users, Award, TrendingUp, Brain, Lightbulb, Trophy, Globe
} from 'lucide-react';

export const LearningApproachSection = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            id: 1,
            title: 'Learn Skills',
            subtitle: 'Master In-Demand Technologies',
            icon: <BookOpen className="w-10 h-10 text-white" />,
            bgGradient: 'from-blue-500 via-blue-600 to-indigo-600',
            glowColor: 'shadow-blue-500/30',
            features: [
                { icon: <Play className="w-5 h-5 text-blue-600" />, text: 'Live Sessions with Microsoft MVPs & Software Architects' },
                { icon: <Globe className="w-5 h-5 text-blue-600" />, text: 'Video Lessons accessible anytime, anywhere globally' },
                { icon: <Lightbulb className="w-5 h-5 text-blue-600" />, text: 'Quick Notes for rapid learning, recall and revision' }
            ],
            stats: { number: '500+', label: 'Expert Sessions' }
        },
        {
            id: 2,
            title: 'Build Experience',
            subtitle: 'Real-World Project Development',
            icon: <Code className="w-10 h-10 text-white" />,
            bgGradient: 'from-purple-500 via-purple-600 to-pink-600',
            glowColor: 'shadow-purple-500/30',
            features: [
                { icon: <Target className="w-5 h-5 text-purple-600" />, text: 'Interactive Labs for hands-on coding experience' },
                { icon: <Brain className="w-5 h-5 text-purple-600" />, text: 'Industry-standard coding workflows and practices' },
                { icon: <Trophy className="w-5 h-5 text-purple-600" />, text: 'Build portfolio projects with best practices' }
            ],
            stats: { number: '50+', label: 'Real Projects' }
        },
        {
            id: 3,
            title: 'Empower Yourself',
            subtitle: 'Career Transformation Success',
            icon: <Rocket className="w-10 h-10 text-white" />,
            bgGradient: 'from-emerald-500 via-green-600 to-teal-600',
            glowColor: 'shadow-emerald-500/30',
            features: [
                { icon: <Award className="w-5 h-5 text-emerald-600" />, text: 'Comprehensive Skill Tests and certifications' },
                { icon: <Users className="w-5 h-5 text-emerald-600" />, text: 'Interview Q&A prep for top tech companies' },
                { icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, text: 'Personalized Career Coaching and guidance' }
            ],
            stats: { number: '93%', label: 'Job Success Rate' }
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
            {/* Same Background Effects - just less intense spacing */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Compact Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold text-base">The ScholarHat Methodology</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        Transform Your Career with Our
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                            Proven 3-Step Approach
                        </span>
                    </h2>

                    <div className="flex justify-center mb-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                    </div>

                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Join <span className="font-bold text-white">50,000+</span> professionals who transformed their careers with our industry-leading methodology.
                    </p>
                </div>

                {/* Tighter Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            <div
                                className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 cursor-pointer overflow-hidden ${step.glowColor} hover:shadow-2xl`}
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                <div className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                    <span className="text-white font-bold text-base">{step.id}</span>
                                </div>

                                <div className="relative mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -bottom-1 -right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-lg text-xs border border-white/30">
                                        {step.stats.label}
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium">
                                            {step.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {step.features.map((feature, i) => (
                                            <div key={i} className="flex items-start space-x-3 group/feature">
                                                <div className="flex-shrink-0 w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center group-hover/feature:bg-white/20 transition-colors">
                                                    {feature.icon}
                                                </div>
                                                <p className="text-gray-300 text-sm leading-snug group-hover:text-white transition-colors">
                                                    {feature.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {hoveredStep === step.id && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-emerald-400/5 pointer-events-none rounded-3xl"></div>
                                        {/* <div className="absolute top-3 left-3">
                                            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                                        </div> */}
                                    </>
                                )}
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Compact CTA */}
                <div className="text-center space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                            <div className="text-2xl font-bold text-blue-400 mb-1">50,000+</div>
                            <div className="text-gray-300 text-sm">Students Transformed</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                            <div className="text-2xl font-bold text-purple-400 mb-1">93%</div>
                            <div className="text-gray-300 text-sm">Job Success Rate</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                            <div className="text-2xl font-bold text-emerald-400 mb-1">₹35 LPA</div>
                            <div className="text-gray-300 text-sm">Average Salary Hike</div>
                        </div>
                    </div>

                    {/* <div className="space-y-3">
                        <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            <BookOpen className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">Start Your Transformation Journey</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                        </button>

                        <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>No Credit Card Required</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Free Career Consultation</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Same Floating Orbs */}
            <div className="absolute top-16 left-8 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </section>
    );
};