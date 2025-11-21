import { Cloud, Monitor, Bot, Beaker, Terminal, Zap } from 'lucide-react'
import sandboxImg from '../assests/images/sandbox.png'
import labsImg from '../assests/images/handsOnLab.png'

function CloudSandboxAndLabsDemo() {
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                        Train Like a Real Cloud Engineer{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            Inside Your Browser
                        </span>
                    </h2>
                    <p className="text-lg text-cyan-300 font-medium max-w-3xl mx-auto">
                        Deploy real apps, run CI/CD pipelines, build AI/GenAI solutions — all with zero setup.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6
                                md:gap-12 lg:gap-16">

                    {/* Cloud Sandbox Card */}
                    <div className="group flex-shrink-0 w-[88vw] sm:w-[75vw] md:w-[520px] lg:w-[560px] snap-center">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                                        transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-400/50">
                            <div className="relative overflow-hidden">
                                <img
                                    src={sandboxImg}
                                    alt="Cloud Sandbox Terminal"
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                                        <Cloud className="w-8 h-8 text-cyan-400" />
                                        Cloud Sandbox
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 space-y-5">
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

                    {/* Hands-on Labs Card */}
                    <div className="group flex-shrink-0 w-[88vw] sm:w-[75vw] md:w-[520px] lg:w-[560px] snap-center">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl 
                                        transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-400/50">
                            <div className="relative overflow-hidden">
                                <img
                                    src={labsImg}
                                    alt="AI & GenAI Labs"
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2">
                                        <Bot className="w-8 h-8 text-blue-400" />
                                        Hands-on Labs
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 space-y-5">
                                <FeatureItem icon={<Bot className="w-7 h-7" />}
                                    title="AI & GenAI Labs"
                                    desc="Build LLM apps, RAG pipelines, agents"
                                    color="text-blue-400" />
                                <FeatureItem icon={<Beaker className="w-7 h-7" />}
                                    title="Guided Step-by-Step Labs"
                                    desc="From beginner to advanced scenarios"
                                    color="text-blue-400" />
                                <FeatureItem icon={<Monitor className="w-7 h-7" />}
                                    title="Real-Time Feedback & Scoring"
                                    desc="Instant validation of your solutions"
                                    color="text-blue-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* Reusable feature card - unchanged */
function FeatureItem({ icon, title, desc, color = "text-cyan-400" }) {
    return (
        <div className={`flex gap-4 items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300`}>
            <div className={`${color}`}>{icon}</div>
            <div>
                <div className="text-white font-bold text-lg">{title}</div>
                <div className="text-cyan-300 text-sm mt-1">{desc}</div>
            </div>
        </div>
    )
}

export default CloudSandboxAndLabsDemo