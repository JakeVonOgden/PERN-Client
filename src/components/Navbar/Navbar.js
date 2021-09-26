import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Container,
    Nav,
    Navbar,
    NavbarBrand, 
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Landing from '../Landing/Landing';
import Bakery from '../sites/Bakery';
import WallArt from '../sites/WallArt';
import HandmadeGoods from '../sites/HandmadeGoods';
import Apparel from '../sites/Apparel';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Account from '../Auth/Account';
import BakeryIndex from '../sites/BakeryIndex';

const JuniperNav = (props) => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
console.log("navbar test");
    return (
        <div>
        <Container>
        <Router>
        <Navbar color="light" light expand="md" >
            
            <NavbarBrand href="/" className="mr-auto">Juniper</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" /> 
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Categories
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to='/apparel'>Apparel</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/bakery'>Bakery</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/handMadeGoods'>Handmade Goods</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/wallart'>Wall Art</Link>
                            </DropdownItem> 
                        </DropdownMenu>
                    </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Account
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link to='/account'>Account Home</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/login'>Sign In</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/' onClick={props.clearToken}>Logout</Link> 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
                </Collapse>
         </Navbar>

        <Switch>
            <Route exact path='/'><Landing /></Route>
            <Route path='/bakery'><BakeryIndex /></Route>
            <Route path='/wallart'><WallArt /></Route>
            <Route path='/handmadegoods'><HandmadeGoods /></Route>
            <Route path='/apparel'><Apparel /></Route>
            <Route path='/login'><Login updateToken={props.updateToken} /></Route>
            <Route path='/register'><Register updateToken={props.updateToken} /></Route>
            <Route path='/account'><Account sessionToken={props.sessionToken} protectedViews={props.protectedViews} /></Route>            
        </Switch>
        </Router>
        </Container>
        </div>
    )
}

export default JuniperNav;