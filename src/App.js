import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Landing from './components/Landing/Landing';
import Footer from './components/sites/Footer';
import MerchIndex from './components/Merchandise/MerchIndex';
import {BrowserRouter as Router} from 'react-router-dom';

   


function App() {
  
  const [sessionToken, setSessionToken] = useState(''); 

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
    // console.log(sessionToken)
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews =() => {
  return (sessionToken === localStorage.getItem('token') ? <Landing token={sessionToken} />
  : <Login updateToken={updateToken} /> )
}

  return (
    
    <div className="App">
     <Navbar clearToken={clearToken} updateToken={updateToken}  />

    
     {protectedViews()}

     <Router />

     


     <br />
     <Footer />        
    </div>

    
  
  );
}

export default App;