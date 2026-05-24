import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AmbientParticles from './components/AmbientParticles';
import Footer from './sections/Footer';

// Subpage Components
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import InquirePage from './pages/InquirePage';

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="relative min-h-screen bg-matte-black text-soft-white selection:bg-gold/20 selection:text-soft-white overflow-hidden">
        
        {/* 1. GLOBAL AMBIENT LAYER */}
        <AmbientParticles />
        
        {/* 2. FLOATING LUXURY NAVBAR */}
        <Navbar />

        {/* 3. MULTI-PAGE ROUTING CONTROLLER */}
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/inquire" element={<InquirePage />} />
          </Routes>
        </main>

        {/* 4. MINIMAL LUXURY FOOTER */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
