import './App.css';
import React from 'react';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import './Home.css';
import './Projects.css';
import './Works.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div id="homeContainer">
        <div className="child">
          <Home />
        </div>

        <div id="secondPage" className="child">
          <Projects />
        </div>

        {/* <div id="thirdPage" className="child">
          <Works />
        </div> */}




      </div>
    </>

  );
}

export default App;

