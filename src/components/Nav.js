import React from 'react'
import '../styleSheet/Nav.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HogeHoge-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">ホーム</Nav.Link>
          <NavDropdown title="メニュー" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">アプリについて</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Twitter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;