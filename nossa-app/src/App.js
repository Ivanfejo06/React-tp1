import './App.css';
import React from 'react';
import Navbar from './Views/Navbar/Navbar';
import Section1 from './Views/Section1/Section1';
import Section2 from './Views/Section2/Section2';
import Section3 from './Views/Section3/Section3';
import Section4 from './Views/Section4/Section4';
import Section5 from './Views/Section5/Section5';
import Section6 from './Views/Section6/Section6';
import Section7 from './Views/Section7/Section7';
import Section8 from './Views/Section8/Section8';
import Footer from './Views/Footer/Footer';

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
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;