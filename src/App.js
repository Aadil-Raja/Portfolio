
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio  from './components/Portfolio';
import Experience from './components/Experience';
function App() {
  return (
   <div>
   <NavBar/>
   <Home/>
   <About/>
   <Portfolio/>
   <Experience/>
   </div>
  );
}

export default App;
