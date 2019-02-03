import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.css"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn } from "mdbreact";

function NavTabs() {
  return (
    <nav className="navbar fixed-top bg-dark navbar-dark navbar-expand my-nav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            <MDBBtn color="primary" >Fullstack</MDBBtn>       </Link>
        </li>
        <li className="nav-item">
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Lessons
      </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <Link
                to="/lessons/react"
                className={window.location.pathname === "/lessons/react" ? "nav-link active" : "nav-link"}
              >
                <MDBDropdownItem>React Lessons</MDBDropdownItem>
              </Link>
              <li class="dropdown-submenu">
                <a class="dropdown-item" tabindex="-1" href="#">React Lessons</a>
                <ul class="dropdown-menu">
                  <li class="dropdown-item"><a tabindex="-1" href="/lessons/ajax/1">Lesson 1 - State</a></li>
                  <li class="dropdown-item"><a tabindex="-1" href="/lessons/ajax/2">Lesson 2 - Props</a></li>
                </ul>
              </li>
            </MDBDropdownMenu>
          </MDBDropdown>
        </li>
      </ul>
      <ul className="navbar-nav navbar-right ml-auto">
        <li>
          <div className="nav-item g-signin2" data-onsuccess="onSignIn"></div>
        </li>
        <li className="nav-item active">
          <Link to="/SignUp" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
            Signup
        </Link>
        </li>
        <li className="nav-item active">
          <Link to="/Login" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
            Login
        </Link>
        </li>
      </ul>


    </nav>
  );
}

export default NavTabs;
