import { Building2, Bot, Zap, Briefcase, Rocket, Eye } from 'lucide-react'

function ProjectsShowcase() {
    const projects = [
        {
            id: 1,
            title: 'Azure Microservices Deployment',
            description: 'Build and deploy scalable microservices architecture on Azure',
            icon: Building2,
            gradient: 'from-blue-500 to-cyan-600',
            tags: ['Azure', 'Microservices', 'Docker']
        },
        {
            id: 2,
            title: 'GenAI Chatbot with RAG + Vector DB',
            description: 'Create intelligent chatbots using RAG and vector databases',
            icon: Bot,
            gradient: 'from-purple-500 to-pink-600',
            tags: ['GenAI', 'RAG', 'Vector DB']
        },
        {
            id: 3,
            title: 'Agentic AI Workflow Automation',
            description: 'Design multi-agent systems for complex automation tasks',
            icon: Zap,
            gradient: 'from-orange-500 to-red-600',
            tags: ['AI Agents', 'Automation', 'Workflows']
        },
        {
            id: 4,
            title: 'Java/.NET Full Stack Enterprise App',
            description: 'Build end-to-end enterprise applications with modern frameworks',
            icon: Briefcase,
            gradient: 'from-green-500 to-emerald-600',
            tags: ['Full Stack', 'Enterprise', 'APIs']
        },
        {
            id: 5,
            title: 'CI/CD Pipeline + Kubernetes',
            description: 'Implement complete DevOps pipelines with container orchestration',
            icon: Rocket,
            gradient: 'from-cyan-500 to-blue-600',
            tags: ['CI/CD', 'Kubernetes', 'DevOps']
        },
        {
            id: 6,
            title: 'Azure AI Vision & Language',
            description: 'Leverage Azure Cognitive Services for AI-powered applications',
            icon: Eye,
            gradient: 'from-violet-500 to-purple-600',
            tags: ['Azure AI', 'Cognitive Services', 'ML']
        }
    ]

    return (
        <section className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
                        Build Projects That
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                            Get You Hired
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">Real-world projects that prove your skills to employers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
                        >
                            <div className='flex gap-4 items-center'>
                                <div className={`min-w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]`}>
                                    <project.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-bold`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsShowcase
