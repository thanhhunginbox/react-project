/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import {
     Container
    // , Nav
    , Navbar
    // ,Form
    // ,FormControl
    ,Button
    // ,NavDropdown
    ,Offcanvas
 } from 'react-bootstrap';
import { 
    // Link,
     Route
    , Routes } from 'react-router-dom';
import { useState } from 'react';
import Shop from './components/Shop/Shop';
import Item from './components/Item/Item';
import Login from './components/login';
import Test from './components/Test';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'

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
            {/* <Offcanvas.Body>
            </Offcanvas.Body> */}
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
  
function App() {
    // const [user, setUser] = useState(null);
    return (
        <div className="App">
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Movie Reviews</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="shop">Shop</Link>
                            </Nav.Link>
                            <Nav.Link>
                                {user ? (
                                    <a>Logout User</a>
                                ) : (
                                    <Link to="login" onClick={() => setUser('19522343')}>
                                        Login
                                    </Link>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <div className='header'>
            <Navbar key='xll' bg="light" expand='xll' className="mb-3">
                <Container>
                    <Navbar.Brand href="/">Navbar Offcanvas</Navbar.Brand>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" >
                        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                    </form>
                    <Example/>

                    <div class="text-end">
                        <button type="button" class="btn btn-outline-dark me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                    
                </Container>
            </Navbar>
            </div>
            <Routes>
                <Route path="/" element={<Shop />} />
                {/* <Route path="shop/:id/review" element={<AddReview/>} /> */}
                <Route path="/:name" element={<Item/>} />
                <Route path="login" element={<Login username="amTrinh" />} />
                <Route path="test" element={<Test />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
