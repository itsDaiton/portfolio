import React from 'react'
import { About, Contact, Footer, Hero, Navbar, Projects, Skills} from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

