import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavDropdown, Jumbotron} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resources from './pages/Resources'
import Guides from './pages/Guides'
import AboutHS from './pages/AboutHS'
import Home from './pages/Home'
import Logo from './images/yellowlogo.png'
import Elementary from './pages/Elementary'
import Middle from './pages/Middle'
import Highschool from './pages/Highschool'
function App() {
  return (

    <div>
      <Navbar className="Jugemu">
        <Navbar.Brand href='/' className="Jugemu"> <img className="icon" src={Logo} /> the modern homeschooler</Navbar.Brand>
        <Nav> <Nav.Link href='/' className="Jugemu"> Home</Nav.Link> </Nav>


        <NavDropdown title="Guides" className="Jugemu" >
        <NavDropdown.Item href="/elementary">Elementary</NavDropdown.Item>
        <NavDropdown.Item href="/middleschool">6-8th Grade</NavDropdown.Item>
        <NavDropdown.Item href="/highschool">Highschool</NavDropdown.Item>
        
      </NavDropdown>



        <Nav> <Nav.Link href='/guides' className="Jugemu"> Guides</Nav.Link></Nav>

        <Nav> <Nav.Link href='/resources' className="Jugemu">Resources</Nav.Link></Nav>

        <Nav> <Nav.Link href='/about-homeschooling'className="Jugemu"> About Homeschooling</Nav.Link></Nav>

      </Navbar>
      <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/guides" component={Guides} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/about-homeschooling" component={AboutHS} />
          <Route exact path="/elementary" component={Elementary} />
          <Route exact path="/middleschool" component={Middle} />
          <Route exact path="/highschool" component={Highschool} />

       </div>
        
              
          </Router>

          <div className="blueline footer">
            <div className="whitetext" >
              <h5 className="Jugemu homecenter"> the modern homeschooler</h5>
            </div>
       
          </div>
         


    </div>
  
  );
}

export default App;
