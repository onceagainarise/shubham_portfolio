"use client"

import Button from './ui/Button'

export default function HeroMinimal() {
  return (
    <section className="section">
      <div className="text-center space-y-8">
        <h1 className="heading heading-lg text-4xl md:text-8xl animate-fade-in-up transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer animate-roll-once">
          <span className="inline-block animate-glow">SHUBHAM</span>
          <span className="inline-block bg-white text-black px-3 py-1 ml-3">PATHAK</span>
        </h1>
        
        <div className="space-y-4 animate-fade-in-up-delay-2">
          <h2 className="heading text-xl text-text-primary transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer animate-roll-hover">
            MACHINE LEARNING ENGINEER
          </h2>
          
          <p className="text-lg text-text-primary max-w-3xl mx-auto transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer animate-roll-hover">
            I build ML systems and AI Agents
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <Button href="#projects" variant="primary">
            VIEW PROJECTS
          </Button>
          <Button href="#contact" variant="secondary">
            GET IN TOUCH
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up-delay-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary">20+</div>
            <div className="px-2 py-1 bg-white text-black text-xs font-medium rounded-md">ML PROJECTS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">5+</div>
            <div className="px-2 py-1 bg-white text-black text-xs font-medium rounded-md">HACKATHONS WIN'S</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary">2+</div>
            <div className="px-2 py-1 bg-white text-black text-xs font-medium rounded-md">CERTIFICATIONS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
