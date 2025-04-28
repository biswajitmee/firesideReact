 

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PageLoader from './PageLoader';  // Make sure PageLoader has a `show` prop and `onComplete` callback.
// import NavBar from './NavBar'
// import HomePage from './HomePage';  // Your homepage component
// import About from './About/AboutPage';  // Your About component
// import CommunitySection from './community/CommunitySection';
// import BlogSection from './blog/BlogSection';

// function AppContent() {
//   const [showLoader, setShowLoader] = useState(true);  // Initially show the loader

//   // After the loader completes, hide it and show the content
//   const handleLoaderComplete = () => {
//     setShowLoader(false);  // Hide the loader
//   };

//   return (
//     <>
//       {/* Show the PageLoader and execute `handleLoaderComplete` once the loader finishes */}
//       <PageLoader show={showLoader} onComplete={handleLoaderComplete} />
//       <NavBar />
//       {/* Render Routes after loader has finished */}
//       {!showLoader && (
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/community' element={<CommunitySection />} />
//           <Route path='/blog' element={<BlogSection />} />
//         </Routes>
//       )}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PageLoader from './PageLoader';
import HomePage from './HomePage';
import About from './About/AboutPage';
import CommunitySection from './community/CommunitySection';
import BlogSection from './blog/BlogSection';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  const handleNavigate = (path) => {
    if (!isLoading) { // avoid double click
      setNextPath(path);
      setIsLoading(true);
    }
  };

  return (
    <div className="relative">
      <NavBar onNavigate={handleNavigate} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<CommunitySection />} />
        <Route path="/blog" element={<BlogSection />} />
      </Routes>

      {isLoading && <PageLoader nextPath={nextPath} setIsLoading={setIsLoading} />}
    </div>
  );
}

export default App;






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import NavBar from './NavBar';
// import PageLoader from './PageLoader';
// import HomePage from './HomePage';
// import About from './About/AboutPage';
// import CommunitySection from './community/CommunitySection';
// import BlogSection from './blog/BlogSection';

// function AppContent() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showLoader, setShowLoader] = useState(false);
//   const [nextPath, setNextPath] = useState(null);

//   const handleNavigate = (path) => {
//     if (path !== location.pathname) {
//       setNextPath(path);
//       setShowLoader(true);
//     }
//   };

//   const handleLoaderComplete = () => {
//     if (nextPath) {
//       navigate(nextPath);
//       setShowLoader(false);
//       setNextPath(null);
//     }
//   };

//   return (
//     <>
//       {/* PageLoader is always available */}
//       {showLoader && <PageLoader onComplete={handleLoaderComplete} />}

//       <NavBar onNavigate={handleNavigate} />

//       {/* Always render Routes immediately */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/community" element={<CommunitySection />} />
//         <Route path="/blog" element={<BlogSection />} />
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
