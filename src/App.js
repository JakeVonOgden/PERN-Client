import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Placeholder from './components/Merchandise/Placeholder';
import Footer from './components/sites/Footer';
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  
  const [sessionToken, setSessionToken] = useState(''); 

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
    console.log(sessionToken)
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

// const clearToken = () => {
//   localStorage.clear();
//   setSessionToken('');
// }

const protectedViews =() => {
  return (sessionToken === localStorage.getItem('token') ? <Placeholder token={sessionToken} />
  : <Auth updateToken={updateToken} />)
}

  return (
    
    <div className="App">
     <Navbar />

     
     {protectedViews()}

     <Router />

     


     <br />
     <Footer />        
    </div>

    
  
  );
}

export default App;