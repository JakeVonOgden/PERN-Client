import './App.css';
import React, {useState, useEffect} from 'react';
import JuniperNav from './components/Navbar/Navbar';
// import Login from './components/Auth/Login';
import Footer from './components/sites/Footer';
// import MerchandiseIndex from './components/Merchandise/MerchandiseIndex';
import {BrowserRouter as Router} from 'react-router-dom';

   


function App() {
  
  const [sessionToken, setSessionToken] = useState(''); 
console.log("app test");

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

// const protectedViews =() => {
//   return (sessionToken === localStorage.getItem('token') ? <MerchandiseIndex token={sessionToken} />
//   : <Login updateToken={updateToken} /> )
// }

  return (
    
    <div className="App">
     <JuniperNav clearToken={clearToken} updateToken={updateToken} sessionToken={sessionToken} />

    
 

     <Router />

     


     <br />
    
     <Footer />        
    
    </div>

    
  
  );
}

export default App;