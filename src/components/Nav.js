import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{ fontWeight: 'bold' }} href="/">HogeHoge-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">ホーム</Nav.Link>
          <NavDropdown title="メニュー" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">アプリについて</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://twitter.com/1720Noa">Twitter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;