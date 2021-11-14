import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';




const Navigation = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand='lg' >
                <Container>
                    <Navbar.Brand className='brand'><Link to='/home'><span className="text-danger">ZTM Camera</span></Link></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/products">Explore</Nav.Link>


                            {
                                user?.email ?
                                    <>
                                        {/* --------- */}

                                        <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
                                            <NavDropdown.Item href="#action3"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/myorders">My Orders</Nav.Link></NavDropdown.Item>
                                            <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/pay">Payment</Nav.Link></NavDropdown.Item>
                                            <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/review">Review</Nav.Link></NavDropdown.Item>

                                            {admin && <> <h6 className='text-center text-danger'>Admin Panel</h6>
                                                <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/makeadmin">Make an Admin</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/manageallorders">Manage All Orders</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/addproduct">Add New Product</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item href="#action4"><Nav.Link as={HashLink} style={{ color: "navy", fontWeight: 600 }} to="/manageproducts">Manage Products</Nav.Link></NavDropdown.Item>
                                            </>}

                                        </NavDropdown>

                                        <button onClick={logOut} className='btn btn-danger'>Logout</button>

                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text>
                            Signed in as : <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;