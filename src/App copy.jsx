import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
 
import MobileNavBar from './MobileNavBar'
import HomePage from './HomePage'
// import About from './About'
// import Community from './Community'
// import Blog from './Blog'
// import Join from './Join'

export default function App () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // Ensure initial check

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768
      console.log('Screen size changed:', mobile ? 'Mobile' : 'Desktop') // Debugging log
      setIsMobile(mobile)
    }

    checkScreenSize() // Initial check
    window.addEventListener('resize', checkScreenSize) // Listen for resize events

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <Router>
      {isMobile ? <MobileNavBar /> : <NavBar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/join' element={<Join />} /> */}
      </Routes>
    
    </Router>
  )
}
