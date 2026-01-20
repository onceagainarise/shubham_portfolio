import HeroMinimal from '@/components/HeroMinimal'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AllProjects from '@/components/AllProjects'
import ContactMinimal from '@/components/ContactMinimal'
import NavigationMinimal from '@/components/NavigationMinimal'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationMinimal />
      <HeroMinimal />
      <Skills />
      <Experience />
      <AllProjects />
      <ContactMinimal />
    </main>
  )
}
