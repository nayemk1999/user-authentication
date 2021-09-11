import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { UserContext } from "../../../../App";
// import ProfilePopper from "../../../ProfilePaper/ProfilePopper";
// import "./NavBar.css";

const NavBar = () => {
//   const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={
        isSticky || isCollapsed
          ? "slide in py-2 show shadow navbar navbar-expand-sm bg-light navbar-light fixed-top"
          : "slide out show navbar-expand-sm navbar-light py-2 fixed-top "
      }
    >
      <Container >
        <Navbar.Brand as={Link} to="/">
          <strong class="colornav">Suffix IT Limited</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
          aria-controls="basic-navbar-nav"
          style={{ background: "rgb(199 199 199 / 75%)", marginRight: "7px" }}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="mr-5 h5 nav-link">
              <strong class="colornav">Home</strong>
            </Nav.Link>
            <Nav.Link href="#buy" className="mr-5 h5 nav-link">
              <strong class="colornav">About</strong>
            </Nav.Link>
            <Nav.Link href="#rent" className="mr-5 h5 nav-link">
              <strong class="colornav">Contact</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/sold" className="mr-5 h5 nav-link">
              <strong class="colornav">Users</strong>
            </Nav.Link>
          </Nav>
          {/* <div>
            {loggedInUser?.email ?
              <ProfilePopper />
              :
              <Nav.Link style={{ marginLeft: "20px" }} className='h5 colornav' as={Link} to="/login" >
                Login
              </Nav.Link>
            }
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
