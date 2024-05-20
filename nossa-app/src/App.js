import './App.css';
import React from 'react';
import Navbar from './Views/Navbar/Navbar';
import Section1 from './Views/Section1/Section1';
import Section2 from './Views/Section2/Section2';
import Section3 from './Views/Section3/Section3';
import Section4 from './Views/Section4/Section4';

function App() {
  return (
      <div>
        <Navbar/>
        <div class="page-content">
          <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </div>
        </div>
      </div>
  );
}

export default App;