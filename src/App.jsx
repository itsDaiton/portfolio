import React from 'react'
import { About, Contact, Footer, Hero, Navbar, Projects, Skills} from './components'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='2xl:max-w-[1536px] w-full'>
          <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App

