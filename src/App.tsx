import './App.css';
import React from 'react';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import './Home.css';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Works.css'
import Contact from './Contact.tsx';

function App() {
  return (
    <>
      <div id="homeContainer">
        <div className="child">
          <Home />
        </div>

        <div id="secondPage" className="child">
          <Projects />
          <Contact />
        </div>




      </div>

    </>

  );
}

export default App;

