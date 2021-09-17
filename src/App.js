import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/sites/Footer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  
  return (
    
    <div className="App">
     <Navbar />
     <Router />
     


     <br />
     <Footer />        
    </div>
  
  );
}

export default App;
