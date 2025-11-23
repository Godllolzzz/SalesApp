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
import SkillAssessmentAndInterviewPrep from '../components/SkillAssessmentAndInterviewPrep';
import WhyAndOfferSection from '../components/WhyAndOfferSection';
import Popup2 from '../components/PopUp2';

const DotNet = () => {
    const [isPopUpOpen, setIsPopupOpen] = useState(false);
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
            {isPopUpOpen && <Popup2 onClose={() => setIsPopupOpen(false)} />}
            <Header />
            {/* <StickyTimerBar /> */}

            <HeroSection />
            <TrustSection />
            {/* <WhySection /> */}
            <WhyAndOfferSection />
            <CloudSandboxDemo />
            <SkillAssessmentAndInterviewPrep />
            {/* <MegaOffer /> */}

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
            <section id="memberships" className="pt-16 px-4 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4 md:mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Memberships</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Unlimited access to all courses with exclusive benefits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {dotNetMemberships.map((membership) => (
                            <MembershipCard key={membership.id} membership={membership} />
                        ))}
                    </div>
                </div>
            </section>

            <TrainersSection />
            {/* <TransformationFramework /> */}
            {/* <LearningApproachSection /> */}
            <ProjectsShowcase />

            {/* Success Stories */}
            <Reviews />

            <div className='bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-slate-950 dark:via-black dark:to-slate-950 text-gray-700 dark:text-slate-400 py-12 px-4'>
                <div class="bg-gradient-to-r container text-center mx-auto from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Have Questions?</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">Our learning advisors are here to help you make the right decision for your career</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsPopupOpen(true)} class="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-code w-5 h-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="m10 10-2 2 2 2"></path><path d="m14 10 2 2-2 2"></path></svg>
                            <span> Talk to Counsellor</span></button>
                    </div>
                </div>
            </div>

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