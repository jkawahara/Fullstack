import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./style.css"

var sectionStyle = {
  width: "100%",
  height: "100vh"
};

class Login extends React.Component {
    state = {
      login: ''
    };

render() { 
  return (
    <div style={sectionStyle} >
    {/* if material bootstrap is installed, you should see the below button as green */}
  
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
        <MDBCol md="4">
          <div className="form-group">
            <input size="30" type="email" className="form-control" placeholder="Your e-mail" />
          </div>
          <div className="form-group">
            <input size="30" type="password" className="form-control" placeholder="Your password" />
          </div>
          <button className="btn-default">Login</button> 
          <hr />
          <p>or login with Google</p>
          <div className="nav-item g-signin2 center" data-onsuccess="onSignIn"></div>

        </MDBCol>
        <MDBCol md="4">{/* Grid Spacer */}</MDBCol>
      </MDBRow>
    </MDBContainer>

    </div>
     
  );
}
}
export default Login;
