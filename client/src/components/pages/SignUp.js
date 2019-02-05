import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import API from "../../utils/API.js";                                                          

class SignUp extends React.Component {
    state = {
      name: "",
      email: "",
      password: ""
    };
handleInputChange = event => {
      const { name, value } = event.target;
      
      this.setState({
        [name]: value
      });
    };

 handleFormSubmit = event => {
      event.preventDefault();

      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then(() => { 
        this.setState({
          name: "",
          email: "",
          password: ""
        })
      })
  
    };
  


render() { 
  return (
    <div >
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4">
          <form className="form"> //for comp
            <div className="form-group">
              <input size="30" name="name" className="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input size="30" name="email" className="form-control" placeholder="Your e-mail" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input size="30" name="password" className="form-control" placeholder="Your password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
            <button onClick={this.handleFormSubmit} type="submit" className="btn btn-lg btn-danger float-right">
              Sign Up
            </button>
          </form>
        </MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow>
    </MDBContainer>


    </div>
     
  );
}
}
export default SignUp;
