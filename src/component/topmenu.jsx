import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Topmenu=()=>{
   return(
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{color:`green`,fontSize:`18px`,fontWeight:`600`}}>HeadPhones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',margin:`auto`,gap:`10px` }}
            navbarScroll
          >
            <Nav.Link href="#action1" as={Link} to="home" style={{color:`black`,fontSize:`18px`,fontWeight:`600`}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:`black`,fontSize:`18px`,fontWeight:`600`}}>About</Nav.Link>
            <NavDropdown title="Categrary" id="navbarScrollingDropdown" style={{color:`black`,fontSize:`18px`,fontWeight:`600`}}>
              <NavDropdown.Item href="#action3" as={Link} to="wireless">Wireless</NavDropdown.Item>
              <NavDropdown.Item href="#action4" as={Link} to="neakband">
                neakband
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#action2" style={{color:`black`,fontSize:`18px`,fontWeight:`600`}}>Review</Nav.Link>
            <Nav.Link href="#action2" style={{color:`black`,fontSize:`18px`,fontWeight:`600`}}>ContactUs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            style={{fontSize:`15px`,fontWeight:`500`}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{fontSize:`18px`,fontWeight:`500`}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
   )
}
export default Topmenu;