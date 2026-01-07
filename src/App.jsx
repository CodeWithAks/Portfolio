import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import { Typewriter } from 'react-simple-typewriter'

function App() {

  return (
    <>
      <Header />

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>

  )
}

export default App
