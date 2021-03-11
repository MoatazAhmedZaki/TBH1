import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import '../../stylesheets/Navb.css';
import { NavLink } from 'react-router-dom';

export default class Navb extends Component {
  render() {
    return (
      <Container>
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
            {' '}
            <img className="navLogo mx-auto" alt="dawoudyLogo" src={logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink
                exact
                to="/"
                activeStyle={{
                  color: 'black',
                  backgroundColor: '#ED1C24',
                  textDecoration: 'none'
                }}
              >
                {' '}
                {/* <Nav.Link href="/">*/}
                HOME
                {/* </Nav.Link> */}
              </NavLink>

              <NavLink
                exact
                to="/space"
                activeStyle={{
                  color: 'black',
                  backgroundColor: '#ED1C24',
                  textDecoration: 'none'
                }}
              >
                {' '}
                {/* <Nav.Link href="/space">*/}
                SPACE
                {/* </Nav.Link>  */}
              </NavLink>
              <NavLink
                to="/blog"
                activeStyle={{
                  color: 'black',
                  backgroundColor: '#ED1C24',
                  textDecoration: 'none'
                }}
              >
                {' '}
                {/* <Nav.Link href="/blog"> */}
                BLOG
                {/* </Nav.Link> */}
              </NavLink>
              <NavLink
                exact
                to="/contact"
                activeStyle={{
                  color: 'black',
                  backgroundColor: '#ED1C24',
                  textDecoration: 'none'
                }}
              >
                {' '}
                {/* <Nav.Link href="/contact"> */}
                CONTACT
                {/* </Nav.Link> */}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
