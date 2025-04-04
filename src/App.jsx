import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Loader from './Loader'
import MobileNavBar from './MobileNavBar'
import HomePage from './HomePage'

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <Router>
      {isLoading ? (
        <div className="z-[9999] fixed inset-0">
          <Loader onComplete={() => setIsLoading(false)} />
        </div>
      ) : (
        <>
          {isMobile ? <MobileNavBar /> : <NavBar />}
          <Routes>
            <Route path="/" element={ <HomePage onReady={() => setIsHomePageReady(true)} />} />
          </Routes>
        </>
      )}
    </Router>
  )
}
