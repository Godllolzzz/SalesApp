import { Cloud, Monitor, Bot, Beaker, Terminal, Zap, Trophy, Target, BarChart3, FlaskConical } from 'lucide-react'
import sandboxImg from '../assests/images/sandbox.png'
import labsImg from '../assests/images/handsOnLab.png'
import skillAssessmentImg from '../assests/images/SkillAssesment.png'

function CloudSandboxAndLabsDemo() {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                        Train Like a Real Cloud Engineer{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            Inside Your Browser
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-cyan-300 font-medium max-w-3xl mx-auto">
                        Deploy real apps, run CI/CD pipelines, build AI/GenAI solutions — all with zero setup.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Cloud Sandbox Card */}
                    <div className="group h-full">
                        <div className="bg-white/5 max-w-2xl mx-auto backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                    transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-400/50 
                    flex flex-col">
                            <h3 className="text-2xl px-4 py-3 font-black text-white flex items-center gap-3">
                                <Cloud className="w-9 h-9 text-cyan-400" />
                                Cloud Sandbox
                            </h3>
                            {/* Full image – never cropped, full width & natural height */}
                            <img
                                src={sandboxImg}
                                alt="Cloud Sandbox Terminal"
                                className="w-full object-cover object-top px-2 group-hover:rotate-1 transition-transform duration-300"
                            // No fixed height → image decides its own height
                            />

                            <div className="p-4 md:p-8 flex-1">
                                <div className="space-y-2 sm:space-y-4 md:space-y-5">
                                    <FeatureItem icon={<Cloud className="w-7 h-7" />}
                                        title="Real Azure/AWS/GCP Environments"
                                        desc="Spin up actual cloud resources instantly" />
                                    <FeatureItem icon={<Terminal className="w-7 h-7" />}
                                        title="Browser-Based IDE + CLI"
                                        desc="VS Code experience + full terminal access" />
                                    <FeatureItem icon={<Zap className="w-7 h-7" />}
                                        title="Zero Setup, Instant Deploy"
                                        desc="Deploy apps and pipelines in seconds" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hands-on Labs Card */}
                    <div className="group h-full">
                        <div className="bg-white/5 max-w-2xl mx-auto backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                    transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-400/50 
                    flex flex-col">
                            <h3 className="text-2xl px-4 py-3 font-black text-white flex items-center gap-3">
                                <FlaskConical className="w-9 h-9 text-cyan-400" />
                                Hands-on Labs
                            </h3>
                            <img
                                src={labsImg}
                                alt="Hands-on Labs"
                                className="w-full object-cover object-top px-2 group-hover:rotate-1 transition-transform duration-300"
                            // Full natural image height – never cut
                            />

                            <div className="p-4 md:p-8 flex-1">
                                <div className="space-y-2 sm:space-y-4 md:space-y-5">
                                    <FeatureItem icon={<Bot className="w-7 h-7" />} color="text-blue-400"
                                        title="AI & GenAI Labs"
                                        desc="Build LLM apps, RAG pipelines, agents" />
                                    <FeatureItem icon={<Beaker className="w-7 h-7" />} color="text-blue-400"
                                        title="Guided Step-by-Step Labs"
                                        desc="From beginner to advanced scenarios" />
                                    <FeatureItem icon={<Monitor className="w-7 h-7" />} color="text-blue-400"
                                        title="Real-Time Feedback & Scoring"
                                        desc="Instant validation of your solutions" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* Reusable feature item */
function FeatureItem({ icon, title, desc, color = "text-cyan-400" }) {
    return (
        <div className="flex gap-4 items-start p-1">
            <div className={color}>{icon}</div>
            <div>
                <div className="text-white font-bold text-base sm:text-lg">{title}</div>
                <div className="text-cyan-300 text-xs sm:text-sm mt-1">{desc}</div>
            </div>
        </div>
    )
}

export default CloudSandboxAndLabsDemo

{/* Skill Assessments Card – CORRECTED CONTENT
                    <div className="group h-full">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                                        transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-400/50 h-full flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    src={skillAssessmentImg}
                                    alt="Skill Assessments"
                                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                                        <Trophy className="w-8 h-8 text-purple-400" />
                                        Skill Assessments
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 space-y-5 flex-1">
                                <FeatureItem icon={<Target className="w-7 h-7" />} color="text-purple-400"
                                    title="Real-World Challenges"
                                    desc="Prove your skills with production-like tasks" />
                                <FeatureItem icon={<BarChart3 className="w-7 h-7" />} color="text-purple-400"
                                    title="Detailed Performance Reports"
                                    desc="See strengths, gaps, and improvement areas" />
                                <FeatureItem icon={<Trophy className="w-7 h-7" />} color="text-purple-400"
                                    title="Cert-Ready Scoring"
                                    desc="Aligned with Azure, AWS, GCP certifications" />
                            </div>
                        </div>
                    </div> */}