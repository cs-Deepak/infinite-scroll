import React from 'react'
import NavbarMain from './NavbarMain'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      
    
      <section id="home">
       <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App
