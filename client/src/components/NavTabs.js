import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
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
          <MDBBtn className="peachy">Fullstack</MDBBtn>
        </MDBNavLink>
      </MDBNavbarBrand>
    {/* ---------------- Nav Items --------------- */}
        {/* ------- Lessons Dropdown Button ------ */}
        <MDBNavItem>
          <MDBDropdown className="marBot">
            <MDBDropdownToggle className="peachy">
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
                  <a className="dropdown-item" tabIndex="-1" href="/lessons/jquery/4">jQuery Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/jquery/4">Lesson 4 - Fridge Game</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/jquery/5">Lesson 5 - Calculator</Link></li>
                    <li className="dropdown-item"><Link tabIndex="-1" to="/lessons/jquery/6">Lesson 6 - Timeouts</Link></li>
                  </ul>
                </li>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          </MDBNavItem>
        {/* ------ Right Navigation Buttons ------ */}
        <MDBNavbarNav right>
        <MDBDropdown className="marGinz">
            <MDBDropdownToggle className="bluey">
              Charts
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="/chart">Classes Taken</a>
                </li>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="/chartreg">Classes By Region</a>
                </li>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
         
        <MDBNavItem>
          <Link to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="bluey">Profile</MDBBtn>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/SignUp" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="bluey">SignUp</MDBBtn>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/Login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="bluey">Login</MDBBtn>
          </Link>
        </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
  );
}

export default NavTabs;
