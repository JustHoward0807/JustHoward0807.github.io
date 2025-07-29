import './styles/App.css';
import React from 'react';
import Home from './features/home/Home.tsx';
import Projects from './features/projects/Projects.tsx';
import './features/home/Home.css';
import './features/projects/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './features/works/Works.css'
import Contact from './features/contact/Contact.tsx';

function App() {
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
    </>
  );
}

export default App;

