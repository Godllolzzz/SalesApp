import { Cloud, Monitor, Bot } from 'lucide-react'

function CloudSandboxDemo() {
    return (
        <section className="py-12 px-4 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-black mb-2 text-white">
                        Train Like a Real Cloud Engineer{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            Inside Your Browser
                        </span>
                    </h2>
                    <p className="text-sm text-cyan-300 font-medium">
                        Deploy apps, run pipelines, build AI/GenAI solutions, write backend code — all using our Cloud Sandbox.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
                                alt="Cloud Sandbox"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                                <Cloud className="w-8 h-8 mb-2 text-cyan-400" />
                                <div className="text-white font-bold text-sm mb-1">Real Azure Environment</div>
                                <div className="text-cyan-300 text-xs">Practice on actual cloud infrastructure</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                                <Monitor className="w-8 h-8 mb-2 text-cyan-400" />
                                <div className="text-white font-bold text-sm mb-1">Browser-Based IDE</div>
                                <div className="text-cyan-300 text-xs">Code, deploy, and test instantly</div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                                <Bot className="w-8 h-8 mb-2 text-cyan-400" />
                                <div className="text-white font-bold text-sm mb-1">AI/GenAI Labs</div>
                                <div className="text-cyan-300 text-xs">Build LLM apps and AI workflows</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudSandboxDemo
