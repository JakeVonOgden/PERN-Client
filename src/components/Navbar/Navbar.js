import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink, Button, NavItem } from 'reactstrap';
import Landing from '../Landing/Landing';
import Bakery from '../sites/Bakery';
import WallArt from '../sites/WallArt';
import HandmadeGoods from '../sites/HandmadeGoods';
import Apparel from '../sites/Apparel';


const Navbar = () => {
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
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
            </NavItem>
            <NavLink>
                <Button to='/sign-in'>Sign In</Button>
            </NavLink>
        </Nav>

        <Switch>
            <Route exact path='/'><Landing /></Route>
            <Route path='/bakery'><Bakery /></Route>
            <Route path='/wallart'><WallArt /></Route>
            <Route path='/handmadegoods'><HandmadeGoods /></Route>
            <Route path='/apparel'><Apparel /></Route>
        </Switch>
        </Router>
    )
}

export default Navbar;