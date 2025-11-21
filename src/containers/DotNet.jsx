import React from 'react'
import MembershipCard from '../components/MembershipCard'
import CourseCard from '../components/CourseCard'
import Header from '../components/Header'
import { doNetSuccessStories, donNetCourses, dotNetMemberships } from '../helpers/constant'
import TransformationFramework from '../components/TransformationFramework'
import TrainersSection from '../components/TrainersSection'
import WhySection from '../components/WhySection'
import TrustSection from '../components/TrustSection'
import MegaOffer from '../components/MegaOffer'
import CloudSandboxDemo from '../components/CloudSandboxDemo'
import HeroSection from '../components/HeroSection'
import ProjectsShowcase from '../components/ProjectsShowcase'

const DotNet = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Header />

            {/* Hero Section */}

            <HeroSection />
            <TrustSection />
            <WhySection />
            <CloudSandboxDemo />
            <MegaOffer />

            {/* Job-Oriented Courses */}
            <section id='trainings' className="py-10 md:py-16 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                            Our Job-Oriented <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Courses</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">Master skills with expert-led training and land your dream job</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {donNetCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Memberships */}
            <section id='memberships' className="py-10 md:py-16 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Memberships</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">Unlimited access to all courses with exclusive benefits</p>
                    </div>

                    <div className="space-y-8">
                        {dotNetMemberships.map((membership) => (
                            <MembershipCard key={membership.id} membership={membership} />
                        ))}
                    </div>
                </div>
            </section>
            <TransformationFramework />

            <ProjectsShowcase />

            <TrainersSection />

            {/* Success Stories */}
            <section id='reviews' className="py-10 md:py-16 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Stories</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300">Hear from our students who transformed their careers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {doNetSuccessStories.map((story) => (
                            <div key={story.id} className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-blue-200 dark:ring-cyan-500 group-hover:ring-blue-400 dark:group-hover:ring-cyan-400 transition">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 transition-colors duration-300">{story.name}</h3>
                                    <p className="text-sm text-blue-600 dark:text-cyan-400 font-semibold mb-4 transition-colors duration-300">{story.role}</p>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic transition-colors duration-300">"{story.story}"</p>
                                    <div className="flex gap-1 mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-slate-950 dark:via-black dark:to-slate-950 text-gray-700 dark:text-slate-400 py-12 px-4 transition-colors duration-300 border-t border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg mb-4 text-gray-900 dark:text-slate-300">© 2025 ScholarHat. All rights reserved.</p>
                    <p className="text-gray-600 dark:text-slate-400">Empowering developers worldwide with cutting-edge training</p>
                </div>
            </footer>

        </div>
    )
}

export default DotNet