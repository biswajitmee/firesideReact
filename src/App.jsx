 

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

 