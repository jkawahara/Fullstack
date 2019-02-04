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
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">React Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/react/1">Lesson 1 - State</a></li>
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/react/2">Lesson 2 - Props</a></li>
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/react/3">Lesson 3 - Forms</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="dropdown-submenu">
                  <a className="dropdown-item" tabIndex="-1" href="#">Mongo Lessons</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/mongo/4">Lesson 4 - Create</a></li>
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/mongo/5">Lesson 5 - Delete</a></li>
                    <li className="dropdown-item"><a tabIndex="-1" href="/lessons/mongo/6">Lesson 6 - Update</a></li>
                  </ul>
                </li>
              </ul>
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
