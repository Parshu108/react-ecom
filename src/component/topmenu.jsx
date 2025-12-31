import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topmenu=()=>{

  const navegite=useNavigate();
  const product=useSelector(state=>state.mycart.cart);
  console.log(product);
  const prlength=product.length;
   return(
      <>
         <Navbar expand="lg" className="bg-body-tertiary justify-content-around ">
      <Container fluid>
        <Navbar.Brand href="#" className=' text-black fs-2 fw-bold ms-2 hover:text-danger ' >HeadPhones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',margin:`auto`,gap:`10px` }}
            navbarScroll
          >
            <Nav.Link href="#action1" as={Link} to="home" className='text-black fs-6 fw-semibold'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-black fs-6 fw-semibold'>About</Nav.Link>
            <NavDropdown title="Categrary" id="navbarScrollingDropdown" className='text-black fs-6 fw-semibold'>
              <NavDropdown.Item href="#action3" as={Link} to="wireless">Wireless</NavDropdown.Item>
              <NavDropdown.Item href="#action4" as={Link} to="neakband">
                neakband
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#action2" className='text-black fs-6 fw-semibold'>Review</Nav.Link>
            <Nav.Link href="#action2" as={Link} to="search" className='text-black fs-6 fw-semibold'>Search</Nav.Link>
          </Nav>
          <Nav.Link href="#" >
            <a href="#" onClick={()=>{navegite("./Cartdata")}} className='p-2 text-black fs-5'>
        <FaShoppingCart />
        </a>
          </Nav.Link>
          {prlength}
          <Nav.Link href="#" >
          <a href="#"  onClick={()=>{navegite("./Customber")}} className='p-2 text-black fs-5'>
          <RiAdminFill />
        </a>
          </Nav.Link>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
   )
}
export default Topmenu;