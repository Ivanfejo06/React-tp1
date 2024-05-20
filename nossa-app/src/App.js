import './App.css';
import React from 'react';
import Navbar from './Views/Navbar/Navbar';
import Section1 from './Views/Section1/Section1';
import Section2 from './Views/Section2';

function App() {
  return (
      <div>
        <Navbar/>
        <Section1/>
        <Section2/>
      </div>
  );
}

export default App;