import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-blue-500/30 antialiased">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
        /* Fluid Typography & Smooth Scrolling */
        html { scroll-behavior: smooth; }
        body { text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
      `}} />
    </div>
  );
}

export default App;
