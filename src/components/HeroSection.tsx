import React from 'react'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-white ring-1 ring-white/20 mb-8">
            🏆 Award-Winning Legal Excellence Since 1998
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            Elite Legal
            <span className="block text-yellow-400">Representation</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protecting your rights with unwavering dedication. Over 25 years of legal expertise 
            delivering exceptional results for our clients.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
            <div className="flex items-center space-x-2">
              ⚖️ <span className="text-sm font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              🛡️ <span className="text-sm font-medium">98% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              🏆 <span className="text-sm font-medium">500+ Cases Won</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center rounded-lg bg-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Get Free Consultation →
            </a>
            
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
    </section>
  )
}
