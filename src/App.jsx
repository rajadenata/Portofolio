import { useEffect, useState } from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useActiveSection from './hooks/useActiveSection'

const sectionIds = ['home', 'about', 'experience', 'achievements', 'projects', 'resume', 'contact']

function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div aria-hidden="true" className="fixed right-0 top-0 z-[60] h-full w-[3px]">
      <div className="w-full bg-gradient-to-b from-cyan-neon to-turq" style={{ height: `${p * 100}%` }} />
    </div>
  )
}

export default function App() {
  const active = useActiveSection(sectionIds)
  return (
    <>
      <a
        href="#about"
        className="sr-only z-[70] rounded-full bg-cyan-neon px-4 py-2 font-semibold text-[#10052D] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Background />
      <ScrollProgress />
      <Navbar active={active} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
