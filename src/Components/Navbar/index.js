import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/style.css";

function NavbarHeader() {
  return (
    <Navbar className="NavbarMain" collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="logo" href="#home">Salman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbarFull">
            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
            <Nav.Link className="navLink" href="#about">About</Nav.Link>
            <Nav.Link className="navLink" href="#services">Services</Nav.Link>
            <Nav.Link className="navLink" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
