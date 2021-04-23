import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {
    //BrowserRouter as Router,
    Link
} from 'react-router-dom'

function Navigation() {
    
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="static">
<Link to = "/Home">
<Navbar.Brand href="#home" >
  <img
    alt=""
    src = "https://images.ctfassets.net/6bn5iyrtf007/2M9RCDe5W4fTEbqZcIgCOS/f00a7981c7c5d0408244a5558a101c5e/Logo_Animation2.gif?h=250"
    width="80"
    height="60"
    style = {{borderRadius: "45%"}}
    className="d-inline-block align-top"
  />{' '}
</Navbar.Brand>
</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>


    <Link to = "/Home">
      <Nav.Link href="#Home">Home</Nav.Link>
    </Link>

    <Link to = "/DevBlog">
      <Nav.Link href="#Blog">
        Dev Blog
      </Nav.Link>
      </Link>

    <Link to = "/Aboutus">
      <Nav.Link href="#AboutUs">About us</Nav.Link>
    </Link>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
    );
   }
export default Navigation



