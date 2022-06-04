/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Shop from './components/Shop/Shop';
import Item from './components/Item/Item';
import AddReview from './components/add-review';
import Login from './components/login';
import Test from './components/Test';
import Footer from './components/Footer/Footer';

function App() {
    const [user, setUser] = useState(null);
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
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
            </Navbar>
            <Routes>
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:id/review" element={<AddReview/>} />
                <Route path="item/:name" element={<Item/>} />
                <Route path="login" element={<Login username="amTrinh" />} />
                <Route path="test" element={<Test />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
