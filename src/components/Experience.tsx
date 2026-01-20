"use client"

import Section from './ui/Section'
import Card from './ui/Card'
import Divider from './ui/Divider'
import Meta from './ui/Meta'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>()
  const { ref: subheadingRef, isVisible: subheadingVisible } = useScrollAnimation<HTMLParagraphElement>()
  const experiences = [
    {
      title: "AI AUTOMATION INTERN",
      company: "WARDENERA (HOUSING MANAGEMENT AUTOMATION STARTUP)",
      period: "OCT 2025 – DEC 2025",
      location: "REMOTE",
      type: "INTERNSHIP",
      achievements: [
        "Designed data-driven automation pipelines using LLMs to convert unstructured user inputs into structured specifications, reducing manual processing time through intelligent data transformation workflows",
        "Built adaptive agentic systems with dynamic querying and feedback loops, improving data completion accuracy by 40% through iterative refinement and statistical validation",
        "Deployed AI solutions serving users while implementing testing protocols and performance monitoring to ensure system reliability and optimize model behavior"
      ]
    }
  ]

  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 ref={headingRef} className={`heading heading-lg text-4xl mb-4 transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer animate-on-scroll ${headingVisible ? 'visible' : ''}`}>
          EXPERIENCE
        </h2>
        <p ref={subheadingRef} className={`text-lg text-text-primary max-w-3xl mx-auto transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer animate-on-scroll ${subheadingVisible ? 'visible' : ''}`}>
          Professional experience in AI/ML engineering, data science, and full-stack development.
        </p>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index}>
            <Card>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div>
                        <h3 className="heading text-xl text-text-primary">
                          {exp.title}
                        </h3>
                        <Meta className="block mt-1">{exp.type}</Meta>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-text-primary font-medium">
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-text-primary">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Divider />
                
                <div className="space-y-3">
                  <h4 className="meta mb-3">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-text-primary leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
            
            {index < experiences.length - 1 && (
              <div className="py-8">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
