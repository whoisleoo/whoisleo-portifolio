import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBackground from './components/Hero'
import Work from './components/Works'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <>
      <HeroBackground/>
      <Work/>
      <AboutMe/>
      <ContactMe/>
      
    </>
  )
}

export default App
