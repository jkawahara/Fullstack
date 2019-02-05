import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css";
import "../assets/images/fullStackLogoNew.png";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

let logo = "../assets/images/fullStackLogoNew.png"

function NavTabs() {
  return (
    <MDBNavbar
      color="bg-dark"
      dark
      expand="md"
      scrolling
      className="marBot"
    >
      <MDBNavbarBrand>
        <MDBNavLink to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <MDBBtn color="primary" >Fullstack</MDBBtn>
        </MDBNavLink>
      </MDBNavbarBrand>
        <MDBNavItem>
          <MDBDropdown className="marBot">
            <MDBDropdownToggle caret outline color="info">
              Lessons
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">React Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/1">Lesson 1 - State</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/2">Lesson 2 - Props</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/3">Lesson 3 - Forms</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">Mongo Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/4">Lesson 4 - Create</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/5">Lesson 5 - Delete</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/mongo/6">Lesson 6 - Update</Link></li>
                  </ul>
                </li>
              </ul>
            </MDBDropdownMenu>
          </MDBDropdown>
          </MDBNavItem>
          <MDBNavbarNav right>
          <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
            <MDBBtn color="primary" >Profile</MDBBtn>
          </Link>
          <Link to="/SignUp" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          <MDBBtn color="primary" >SignUp</MDBBtn>
          </Link>
          <Link to="/Login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
          <MDBBtn color="primary" >Login</MDBBtn>
          </Link>
          </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default NavTabs;
