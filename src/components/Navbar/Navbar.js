import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink, Button, NavItem } from 'reactstrap';
import Landing from '../Landing/Landing';
import Bakery from '../sites/Bakery';
import WallArt from '../sites/WallArt';
import HandmadeGoods from '../sites/HandmadeGoods';
import Apparel from '../sites/Apparel';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


const Navbar = (props) => {

    return (

        <Router>
        <Nav>
            <NavItem style={{display:'flex', justifyContent:'Left', alignItems:'Left'}}>
                <NavLink activeStyle>
                   <Link to='/'> Home</Link>
                </NavLink>
                <NavLink  activeStyle>
                    <Link to='/bakery'>Bakery</Link>
                </NavLink>
                <NavLink  activeStyle>
                    <Link to='/wallart'>Wall Art</Link>
                </NavLink>
                <NavLink activeStyle>
                    <Link to='/handMadeGoods'>Handmade Goods</Link>
                </NavLink>
                <NavLink activeStyle>
                    <Link to='/apparel'>Apparel</Link>
                </NavLink>
                <NavLink activeStyle>
                    <Link to='/register'>
                    Sign Up</Link>
                </NavLink>
          
            <NavLink activeStyle>
                <Link to='/login'>Sign In</Link>
            </NavLink>
              </NavItem>
        </Nav>

        <Switch>
            <Route exact path='/'><Landing /></Route>
            <Route path='/bakery'><Bakery /></Route>
            <Route path='/wallart'><WallArt /></Route>
            <Route path='/handmadegoods'><HandmadeGoods /></Route>
            <Route path='/apparel'><Apparel /></Route>
            <Route path='/login'><Login updateToken={props.updateToken} /></Route>
            <Route path='/register'><Register updateToken={props.updateToken} /></Route>
        </Switch>
        </Router>
    )
}

export default Navbar;
