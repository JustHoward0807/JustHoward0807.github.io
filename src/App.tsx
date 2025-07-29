import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Home from './features/home/Home.tsx';
import Projects from './features/projects/Projects.tsx';
import './features/home/Home.css';
import './features/projects/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './features/works/Works.css'
import Contact from './features/contact/Contact.tsx';

function App() {
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeContainer = document.getElementById('homeContainer');
      if (!homeContainer) return;
      
      const scrollTop = homeContainer.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Hide indicator when scrolled past 30% of viewport height (early detection)
      setShowScrollIndicator(scrollTop < windowHeight * 0.3);
    };

    // Wait for component to mount and then attach listener
    const timeoutId = setTimeout(() => {
      const homeContainer = document.getElementById('homeContainer');
      if (homeContainer) {
        homeContainer.addEventListener('scroll', handleScroll);
      }
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      const homeContainer = document.getElementById('homeContainer');
      if (homeContainer) {
        homeContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <main id="homeContainer">
        <section className="child">
          <Home />
        </section>

        <section id="secondPage" className="child">
          <Projects />
          <Contact />
        </section>
      </main>

      {/* Scroll Indicator - Only visible on first section */}
      {showScrollIndicator && (
        <div id="scrollIndicator" className="scroll-indicator">
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

