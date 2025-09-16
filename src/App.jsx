import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBackground from './components/Hero'
import Work from './components/Works'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import RoadMap from './components/RoadMap'
import MobileScreen from './components/MobileScreen'
import Loading from './components/Loading'


function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)

    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading onComplete={handleLoadingComplete} />
  }

  if (isMobile) {
    return (
      <>
        <MobileScreen/>
      </>
    )
  }

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
