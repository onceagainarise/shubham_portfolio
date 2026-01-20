"use client"

import Section from './ui/Section'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Skills() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>()
  const { ref: subheadingRef, isVisible: subheadingVisible } = useScrollAnimation<HTMLParagraphElement>()
const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },

  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },

  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  { name: "n8n", logo: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" },
  { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
];


  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 ref={headingRef} className={`heading heading-lg text-4xl mb-4 transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer animate-on-scroll ${headingVisible ? 'visible' : ''}`}>
          TECH STACK
        </h2>
        <p ref={subheadingRef} className={`text-lg text-text-primary max-w-3xl mx-auto transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer animate-on-scroll ${subheadingVisible ? 'visible' : ''}`}>
          Technologies I work with across ML engineering, full-stack development, and cloud infrastructure.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-4 group cursor-pointer"
              title={skill.name}
            >
              <div className="transition-all duration-300 group-hover:scale-125">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  width="40"
                  height="40"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 px-6 py-4 group cursor-pointer"
              title={skill.name}
            >
              <div className="transition-all duration-300 group-hover:scale-125">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  width="40"
                  height="40"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
