import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = () => (
    <div>
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
        <a href="#">WK訂閱制 - DEMO</a>
    </Navbar.Brand>
    <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem eventKey={1} href="#">登出</NavItem>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
);

export default Navigation;
