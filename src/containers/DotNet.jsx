import React, { useState } from 'react';
import MembershipCard from '../components/MembershipCard';
import CourseCard from '../components/CourseCard';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import WhySection from '../components/WhySection';
import CloudSandboxDemo from '../components/CloudSandboxDemo';
import MegaOffer from '../components/MegaOffer';
import TransformationFramework from '../components/TransformationFramework';
import ProjectsShowcase from '../components/ProjectsShowcase';
import TrainersSection from '../components/TrainersSection';
import { doNetSuccessStories, donNetCourses, dotNetMemberships } from '../helpers/constant';
import Reviews from '../components/Reviews';
import StickyTimerBar from '../components/StickyTimebar';
import { LearningApproachSection } from '../components/LearningApproachSection';

const DotNet = () => {
    const [activeTab, setActiveTab] = useState('NET');

    const tabs = [
        { id: 'NET', label: '.NET Platform' },
        { id: 'JAVA', label: 'Java Platform' },
        { id: 'AI', label: 'AI Platform' },
    ];

    const filteredCourses = donNetCourses.filter(
        (course) => course.category === activeTab
    );

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Header />
            {/* <StickyTimerBar /> */}

            <HeroSection />
            <TrustSection />
            <WhySection />
            <CloudSandboxDemo />
            <MegaOffer />

            {/* Job-Oriented Courses Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Our Job-Oriented <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Courses</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Master skills with expert-led training and land your dream job
                        </p>
                    </div>

                    <div className="flex justify-center mb-8 md:mb-12">
                        <div className="relative w-full md:w-auto inline-flex items-center bg-slate-100 dark:bg-slate-800/60 rounded-full p-1.5 md:p-2 border border-slate-200 dark:border-slate-700 shadow-inner">

                            {/* Moving Blue Pill - Perfect Gap on All Sides */}
                            <div
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                                className="absolute top-1.5 bottom-1.5 left-1.5 right-[calc(100%-1.5rem)] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 shadow-lg"
                                style={{
                                    width: `calc(${100 / tabs.length}% - 12px)`,   // 12px gap = 6px each side (mobile+desktop safe)
                                    left: `${tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length)}%`,
                                    transform: 'translateX(6px)', // Perfect centering
                                }}
                            />

                            {/* Tab Buttons - Fully Responsive */}
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
          relative z-10 flex-1 
          px-3 py-2.5 text-xs 
          sm:px-5 sm:py-3 sm:text-sm 
          md:px-8 md:py-4 md:text-base 
          font-semibold transition-all duration-300
        `}
                                >
                                    <span className={`hidden md:block whitespace-nowrap ${activeTab === tab.id ? 'text-white drop-shadow-md' : 'text-slate-600 dark:text-slate-300'}`}>
                                        {tab.label}
                                    </span>
                                    <span className={`md:hidden block whitespace-nowrap ${activeTab === tab.id ? 'text-white drop-shadow-md' : 'text-slate-600 dark:text-slate-300'}`}>
                                        {tab.label.split(' ')[0]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-slate-500 py-12 text-lg">
                                No courses available in this category yet.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Premium Memberships */}
            <section id="memberships" className="py-16 px-4 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Memberships</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Unlimited access to all courses with exclusive benefits
                        </p>
                    </div>

                    <div className="space-y-8">
                        {dotNetMemberships.map((membership) => (
                            <MembershipCard key={membership.id} membership={membership} />
                        ))}
                    </div>
                </div>
            </section>

            {/* <TransformationFramework /> */}
            <LearningApproachSection />
            <ProjectsShowcase />
            <TrainersSection />

            {/* Success Stories */}
            <Reviews />

            <footer className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-slate-950 dark:via-black dark:to-slate-950 text-gray-700 dark:text-slate-400 py-12 px-4 border-t border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg mb-4 text-gray-900 dark:text-slate-300">© 2025 ScholarHat. All rights reserved.</p>
                    <p className="text-gray-600 dark:text-slate-400">Empowering developers worldwide with cutting-edge training</p>
                </div>
            </footer>
        </div>
    );
};

export default DotNet;