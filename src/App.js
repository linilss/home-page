import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './css/Home.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div className="wrapper">
            <Navbar dark id="navvv" fixed expand="md">
                 <NavbarBrand href="/">Archwood Music</NavbarBrand>
                 <NavbarToggler onClick={this.toggle} />
                 <Collapse isOpen={this.state.isOpen} navbar>
                   <Nav className="ml-auto" navbar>
                     <NavItem>
                       <NavLink href="/about/">About</NavLink>
                     </NavItem>
                   </Nav>
                 </Collapse>
               </Navbar>
              <div className="mainContainer">

                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                </Switch>
              </div>
            </div>
        );
  }
}

export default App;
