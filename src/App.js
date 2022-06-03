/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import AddReview from './components/add-review';
import Login from './components/login';

function App() {
    const [user, setUser] = useState(null);
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/movies">Movie Reviews</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="movies">Movies</Link>
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
                <Route path="movies" element={<MoviesList />} />
                <Route path="movie/:id/review" element={<AddReview/>} />
                <Route path="movies/:id" element={<Movie/>} />
                <Route path="login" element={<Login username="amTrinh" />} />
            </Routes>
        </div>
    );
}

export default App;
