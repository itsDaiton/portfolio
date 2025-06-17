import React from 'react'
import { About, Contact, Education, Footer, Hero, Navbar, Projects, Skills } from './components'
import { useState, useEffect } from 'react'

const App = () => {

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  return (
    <div className={`w-full overflow-hidden ${darkMode ? 'dark' : ''}`}>
      <div className='sm:px-16 px-6 flex justify-center items-center dark:bg-gray-900 dark:text-white'>
        <div className='2xl:max-w-[1536px] w-full'>
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

