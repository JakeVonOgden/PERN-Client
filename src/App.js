import React from 'react';
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';
import Placeholder from './components/Merchandise/Placeholder';
<<<<<<< HEAD
=======
import Footer from './components/sites/Footer';
import {BrowserRouter as Router} from 'react-router-dom';


>>>>>>> 64859ae40b7fdc4ebdfe77e120a3c0e2a11a7fcd

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
<<<<<<< HEAD
     <Landing />
     {protectedViews()}
=======

     <Landing />
     {protectedViews()}

     <Router />

>>>>>>> 64859ae40b7fdc4ebdfe77e120a3c0e2a11a7fcd
     


     <br />
     <Footer />        
    </div>

    
  
  );
}

export default App;
