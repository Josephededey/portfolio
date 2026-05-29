import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './nav'
import Welcome from './welcome'
import About from './about'
import MyServices from './services'
import MyProjects from './projects'
import Contact from './contact'
import Footer from './footer'

function App() {

  return (
    <>
      <Navbar/>

      <Welcome/>

      <About/>

      <MyServices/>

      <MyProjects/>
      <div className='contact-footer'>
        <Contact/>
        <Footer />

      </div>
  
    </>
  )
}

export default App
