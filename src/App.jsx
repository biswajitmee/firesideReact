// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NavBar from './NavBar'

// import MobileNavBar from './MobileNavBar'
// import HomePage from './HomePage'
// import About from './About/AboutPage'
// import CommunitySection from './community/CommunitySection'
// import BlogSection from './blog/BlogSection'

// export default function App () {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // Ensure initial check

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const mobile = window.innerWidth <= 768
//       console.log('Screen size changed:', mobile ? 'Mobile' : 'Desktop') // Debugging log
//       setIsMobile(mobile)
//     }

//     checkScreenSize() // Initial check
//     window.addEventListener('resize', checkScreenSize) // Listen for resize events

//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   return (
//     <>
//       <Router>
//         {isMobile ? <MobileNavBar /> : <NavBar />}

//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/community' element={<CommunitySection />} />
//           <Route path='/blog' element={<BlogSection />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
// import NavBar from './NavBar'
// import MobileNavBar from './MobileNavBar'
// import PageLoader from './PageLoader'

// import HomePage from './HomePage'
// import About from './About/AboutPage'
// import CommunitySection from './community/CommunitySection'
// import BlogSection from './blog/BlogSection'

// function AppContent() {
//   const navigate = useNavigate()
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
//   const [showLoader, setShowLoader] = useState(false)
//   const [nextPath, setNextPath] = useState(null)

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const handleRouteChange = (path) => {
//     if (path !== window.location.pathname) {
//       setNextPath(path)
//       setShowLoader(true) // <-- this triggers GSAP
//     }
//   }

//   const handleLoaderComplete = () => {
//     if (nextPath) {
//       navigate(nextPath)
//       setShowLoader(false)
//       setNextPath(null)
//     }
//   }

//   return (
//     <>
//       <PageLoader show={showLoader} onComplete={handleLoaderComplete} />
//       {isMobile ? (
//         <MobileNavBar onNavigate={handleRouteChange} />
//       ) : (
//         <NavBar onNavigate={handleRouteChange} />
//       )}
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/community' element={<CommunitySection />} />
//         <Route path='/blog' element={<BlogSection />} />
//       </Routes>
//     </>
//   )
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   )
// }
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar'
import PageLoader from './PageLoader'

import HomePage from './HomePage'
import About from './About/AboutPage'
import CommunitySection from './community/CommunitySection'
import BlogSection from './blog/BlogSection'

function AppContent() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [showLoader, setShowLoader] = useState(false)
  const [nextPath, setNextPath] = useState(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle route change and trigger loader
  const handleRouteChange = (path) => {
    if (path !== window.location.pathname) {
      setNextPath(path)
      setShowLoader(true) // Trigger loader animation
    }
  }

  // When loader completes, navigate to the next path
  const handleLoaderComplete = () => {
    if (nextPath) {
      setTimeout(() => {
        navigate(nextPath)
        setShowLoader(false)
        setNextPath(null)
      }, 500) // Delay for the loader to finish
    }
  }

  return (
    <>
      {/* <PageLoader show={showLoader} onComplete={handleLoaderComplete} /> */}
      <PageLoader show={showLoader} onComplete={handleLoaderComplete} />

      {isMobile ? (
        <MobileNavBar onNavigate={handleRouteChange} />
      ) : (
        <NavBar onNavigate={handleRouteChange} />
      )}
      <Routes>
      <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<CommunitySection />} />
        <Route path='/blog' element={<BlogSection />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
