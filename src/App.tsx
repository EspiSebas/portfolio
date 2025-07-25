import './App.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/NavBar/NavBar'
import { Project } from './components/Projects/Project'
import { Skill } from './components/Skills/Skill'

function App() {
  
  return (
    <>

      <NavBar/>
      <Hero />
      <About />
      <Project/>
      <Skill />
      <Contact />
    
    </>
  )
}

export default App
