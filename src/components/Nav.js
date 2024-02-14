import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocalStorage } from '@uidotdev/usehooks';

function NavBar() {
    const [allApps, setAllApps] = useLocalStorage("allApps");
    const [user, setUser] = useLocalStorage('loggedin');

    const handleLogout = e => {
        e.preventDefault()
        setUser(undefined)
        window.location.href = 'http://localhost:3000/'
  }
  return (

    <Navbar expand="lg" className="navbar navbar-expand-lg d-flex justify-content-between">
        <Container className='container-fluid navDiv'>
            <Navbar.Brand href="/" className='text-light'>
                <span className='m-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                    </svg>    
                </span>
                JobSearch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/" className="nav-link active text-light" aria-current="page">Home</Nav.Link>
                    <Nav.Link href="/jobs" className="nav-link text-light" aria-current="page">Jobs</Nav.Link>
                    <NavDropdown className="nav-link text-light" title={user ? user.fullname : 'Guest'} id="basic-nav-dropdown">
                        {
                            (user != undefined) ? <>
                            <NavDropdown.Item href="/myjobs" className="nav-link text-light" aria-current="page">My jobs <span className='bg-danger p-1 px-2 fw-bold rounded-5'>{(allApps != undefined && allApps.length) && allApps.length}</span></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#" className="nav-link text-light"onClick={handleLogout}>
                            Logout
                            </NavDropdown.Item>
                            </> : <>
                            <NavDropdown.Item href="/login" className="nav-link text-light">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/signup" className="nav-link text-light">Sign up</NavDropdown.Item>
                            </>
                        }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}

export default NavBar;