function TransformationFramework() {
  const steps = [
    {
      number: '1',
      title: 'LIVE SKILL TRAINING',
      subtitle: '(MVPs & Architects)',
      items: [
        'Azure, AI, GenAI, .NET, Java',
        'Architecture, Microservices, Patterns',
        'Real enterprise case studies'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      number: '2',
      title: 'CLOUD SANDBOX + INDUSTRY PROJECTS',
      subtitle: '',
      items: [
        'Hands-on labs',
        'Real cloud deployments',
        'Portfolio-building projects',
        'AI-powered development workflows'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      number: '3',
      title: 'CAREER ACCELERATOR',
      subtitle: '(JOB SUPPORT)',
      items: [
        'Resume + LinkedIn + GitHub optimization',
        'Mock interviews with architects',
        'Job support + referrals',
        'Salary growth roadmap'
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            A Proven 3-Step System to Become a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              High-Income Engineer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                {step.number}
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-xl font-black text-white mb-1">{step.title}</h3>
                {step.subtitle && (
                  <div className="text-sm text-cyan-400 font-bold">{step.subtitle}</div>
                )}
              </div>

              <div className="space-y-3">
                {step.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransformationFramework
