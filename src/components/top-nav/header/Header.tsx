import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.less';

const Header = () => {
  const shopItems = ['Televisions & Entertainment', 'Home & Kitchen Appliances', 'Electronics', 'Beds & Furniture', 'Fitness & Beauty', 'Outdoors'];

  const profileItems = ['Wishlist', 'Login/Register'];

  return (
    <div className="before-nav">
      <Navbar expand="lg" className="bg-body-tertiary header" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Bazajoy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                {shopItems.map(shopItem => (
                  <NavDropdown.Item href="#action/3.1">{shopItem}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                {profileItems.map(profileItem => (
                  <NavDropdown.Item href="#action/3.2">{profileItem}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
