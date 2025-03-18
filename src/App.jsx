import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './HomePage'
// import About from './About'
// import Community from './Community'
// import Blog from './Blog'
// import Join from './Join'

export default function App() {
  return (
    <Router>
      <NavBar /> {/* ✅ NavBar is outside ScrollSmoother */}
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
