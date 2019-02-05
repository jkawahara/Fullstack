// *** Include Modules: npm (react, mdbreact), /utils
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from "../../utils/API";
import { FormInput, FormBtn } from "../FormInput";
import "./style.css";

class Login extends React.Component {
  state = {
    user: {},
    email: "",
    password: "",
  };
  
  // Loads user profile and sets to this.state.user
  loadUser = () => {
    API.getUser()
      .then(res => {
        this.setState({ user: res.data, email: "", password: "" })
      })
      .catch(err => console.log(err));
    };
  
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Handles login
  handleLoginSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(() => {
          this.loadUser();
        })
        .catch(err => console.log(err));
    }
  };

  render() { 
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
            <MDBCol md="4">
              <form>
                <FormInput
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  type="email"
                  placeholder="Your e-mail"
                />
                <FormInput
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleLoginSubmit}
                >
                  Login
                </FormBtn>
              </form>
              {/* <hr />
              <p>or login with Google</p>
              <div className="nav-item g-signin2 center" data-onsuccess="onSignIn"></div> */}
            </MDBCol>
            <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Login;
