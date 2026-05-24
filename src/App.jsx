import React from 'react';
import Navbar from './components/Navbar';
import AmbientParticles from './components/AmbientParticles';

// Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Services from './sections/Services';
import Instagram from './sections/Instagram';
import Booking from './sections/Booking';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-matte-black text-soft-white selection:bg-gold/20 selection:text-soft-white overflow-hidden">
      
      {/* 1. GLOBAL AMBIENT LAYER */}
      <AmbientParticles />
      
      {/* 2. FLOATING LUXURY NAVBAR */}
      <Navbar />

      {/* 3. VISUAL STORYTELLING SECTIONS */}
      <main>
        
        {/* Fullscreen Ken Burns Slider Hero */}
        <Hero />
        
        {/* Philosophy Intro & Before/After Slider */}
        <About />
        
        {/* Asymmetric Masonry Filtering Gallery */}
        <Gallery />
        
        {/* Emotional Client Testimonials Carousel */}
        <Testimonials />
        
        {/* Price list & Service Packages */}
        <Services />
        
        {/* Horizontal Editorial Instagram Crop Grid */}
        <Instagram />
        
        {/* Inquiry Form & WhatsApp Quick Chat */}
        <Booking />

      </main>

      {/* 5. MINIMAL LUXURY FOOTER & SCROLL-TO-TOP */}
      <Footer />

    </div>
  );
}

export default App;
