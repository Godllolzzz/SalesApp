import { Trophy, Target, BarChart3, Video, FileText, MessageSquare, ListCheck, TargetIcon } from 'lucide-react'
import skillAssessmentImg from '../assests/images/SkillAssesment.png'
import interviewPrepImg from '../assests/images/QNA.png' // optional – you can use the same image if you want

function FeatureItem({ icon, title, desc, color = "text-purple-400" }) {
    return (
        <div className="flex gap-4 items-start">
            <div className={color}>{icon}</div>
            <div>
                <div className="text-white font-bold text-base sm:text-lg">{title}</div>
                <div className="text-purple-300 text-xs sm:text-sm mt-1">{desc}</div>
            </div>
        </div>
    )
}

function SkillAssessmentAndInterviewPrep() {
    return (
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Headline */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                        Ace your interview with expert{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Skill Tests and Q&A
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-purple-300 font-medium max-w-3xl mx-auto">
                        Prove your skills with production-grade challenges • Get detailed feedback • Walk into interviews fully prepared
                    </p>
                </div>

                {/* 2 Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">

                    {/* Skill Assessments Card */}
                    <div className="group h-full">
                        <div className="bg-white/5 max-w-2xl mx-auto backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                                        transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-400/50 
                                        flex flex-col">
                            <h3 className="text-2xl font-black px-4 py-3 text-white flex items-center gap-3">
                                <ListCheck className="w-9 h-9 text-purple-400" />
                                Skill Assessments
                            </h3>
                            <img
                                src={skillAssessmentImg}
                                alt="Skill Assessments"
                                className="w-full object-cover object-top px-2 group-hover:rotate-1 transition-transform duration-300"
                            />

                            <div className="p-4 md:p-8 flex-1">
                                <div className="space-y-2 sm:space-y-4 md:space-y-5">
                                    <FeatureItem
                                        icon={<Target className="w-7 h-7" />}
                                        title="Production-Grade Challenges"
                                        desc="Tasks used in real FAANG & startup interviews"
                                    />
                                    <FeatureItem
                                        icon={<BarChart3 className="w-7 h-7" />}
                                        title="Detailed Scorecards"
                                        desc="See your strengths, gaps & exact hiring benchmarks"
                                    />
                                    <FeatureItem
                                        icon={<Video className="w-7 h-7" />}
                                        title="Expert Video Solutions"
                                        desc="Watch step-by-step walkthroughs after submission"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interview Prep Card */}
                    <div className="group h-full">
                        <div className="bg-white/5 max-w-2xl mx-auto backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                                        transition-all duration-500 hover:shadow-pink-500/20 hover:border-pink-400/50 
                                        flex flex-col">
                            <h3 className="text-2xl font-black px-4 py-3 text-white flex items-center gap-3">
                                <TargetIcon className="w-9 h-9 text-purple-400" />
                                Interview Preparation
                            </h3>
                            <img
                                src={interviewPrepImg || skillAssessmentImg} // fallback to same image if you don't have a second one yet
                                alt="Interview Preparation"
                                className="w-full object-cover object-top px-2 group-hover:rotate-1 transition-transform duration-300"
                            />

                            <div className="p-4 md:p-8 flex-1">
                                <div className="space-y-2 sm:space-y-4 md:space-y-5">
                                    <FeatureItem
                                        icon={<FileText className="w-7 h-7" />}
                                        color="text-pink-400"
                                        title="Curated Q&A Notes"
                                        desc="Downloadable cheat sheets & system design templates"
                                    />
                                    <FeatureItem
                                        icon={<Video className="w-7 h-7" />}
                                        color="text-pink-400"
                                        title="Mock Interview Videos"
                                        desc="Real recorded interviews with top engineers"
                                    />
                                    <FeatureItem
                                        icon={<Target className="w-7 h-7" />}
                                        color="text-pink-400"
                                        title="Behavioral + System Design"
                                        desc="Full coverage: leadership, architecture, trade-offs"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SkillAssessmentAndInterviewPrep