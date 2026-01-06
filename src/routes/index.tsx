import About from '@/components/About'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
