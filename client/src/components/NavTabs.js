import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css";
// import { Logo } from "/pages\/assets/images/fullStackLogoNew.png";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

function NavTabs() {
  return (
    <MDBNavbar
      color="bg-dark"
      dark
      expand="md"
      scrolling
      className="marBot"
    >
    {/* ----------------- Brand ------------------ */}
      <MDBNavbarBrand>
        <MDBNavLink to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        {/* <img src={ Logo } /> */}
          <MDBBtn className="peach-gradient">Fullstack</MDBBtn>
        </MDBNavLink>
      </MDBNavbarBrand>
    {/* --------------- Nav Items --------------- */}
        <MDBNavItem>
          <MDBDropdown className="marBot">
            <MDBDropdownToggle className="peach-gradient">
              Lessons
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="/lessons/react/1">React Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/1">Lesson 1 - State</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/2">Lesson 2 - Props</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/3">Lesson 3 - Forms</Link></li>
                  </ul>
                </li>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="/lessons/react/1">React Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/1">Lesson 1 - State</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/2">Lesson 2 - Props</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/react/3">Lesson 3 - Forms</Link></li>
                  </ul>
                </li>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          </MDBNavItem>
        <MDBNavbarNav right>
        
        <MDBNavItem>
          <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="blue-gradient">Profile</MDBBtn>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/SignUp" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="blue-gradient">SignUp</MDBBtn>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/Login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="blue-gradient">Login</MDBBtn>
          </Link>
        </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
  );
}

export default NavTabs;
