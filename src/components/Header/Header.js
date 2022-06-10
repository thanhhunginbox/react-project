import React from 'react'
import {
    Navbar
    , Container
    ,Button
    ,Offcanvas
    // ,Nav
    ,NavDropdown
} from 'react-bootstrap';
import { useState } from 'react';
import Cart from '../Cart/Cart'
import './Header.css'
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='no-bd position-rela btn-icon-cart' variant='a' onClick={handleShow}>
            <span className='fa-solid fa-cart-shopping'></span>
            <span className='cart-badge'>1</span>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
          </Offcanvas.Header>
            <Cart/>
        </Offcanvas>
      </>
    );
  }
  
function Example() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
function Header()
{
    const name = 'user';
    return (
        <div className='header'>
            <Navbar key='xll' bg="light" expand='xll' className="mb-3">
                <Container>
                    <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" >
                        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                    </form>
                    <Example/>
                    <NavDropdown title= {name} id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/addproduct">Add Product</NavDropdown.Item>
                      <NavDropdown.Item href="/yourorders">Your orders</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/logout">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                    <div class="text-end">
                        <button type="button" class="btn btn-outline-dark me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                </Container>
            </Navbar>
            </div>
    )
}


export default Header;
