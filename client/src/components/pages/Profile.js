import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./style.css";

class Profile extends React.Component {
  state = {
    userPhotoUrl: "",
    name: "",
    class: "",
    lessons: ""
  };

  // componentWillMount() {
  //   this.unlisten = this.props.history.listen((location, action) => {
  //     console.log("on route change");

  //     //need a route to get user info based on req.user
  //     // axios.get("/api/userprofile")

// Needs: Lessons

componentDidMount() {
  // ID: IS HARD CODED FOR US
  axios.get("/api/users/2")
  .then(res => {
    console.log("we need req.user from passport to know which profile page to send user to, also to load this user's data")
    console.log(res.data.userPhotoUrl)
    this.setState({ userPhotoUrl: res.data.userPhotoUrl, name: res.data.name })
  })
  axios.get("/api/classes/1")
  .then(res => {
    console.log(res.data.name)
    this.setState({ class: res.data.name })
  })
  axios.get("/api/thisUserLessons/1")
  .then(res => {
    console.log(res.data)
    let lessonsArray = [];
    for (let i = 0; i < res.data.Lessons.length; i++) {
      lessonsArray.push(
      <li>
        <a target="_blank" rel="noopener noreferrer" href={res.data.Lessons[i].lessonUrl}>{res.data.Lessons[i].name}</a>
      </li>)
    }
    this.setState({ lessons: lessonsArray })
  })
}

  //       })
  //   });
  // }
  // componentWillUnmount() {
  //   this.unlisten();
  // }

  render() {
    return (
      <div>
        <MDBContainer>
          <h2>Welcome, {this.state.name}</h2>
          <div right>
          <Link to="/" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
            <MDBBtn className="peach-gradient">
              Logout
            </MDBBtn>
          </Link>
          </div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <img alt="Profile Pic" className="smallPic" src={this.state.userPhotoUrl} />
              </MDBCol>
              <MDBCol md="6">
                <h3>
                  Class: {this.state.class}
                </h3>
                <h5>
                  Lessons: {this.state.lessons}
                </h5>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </MDBContainer>
      </div>
    );
  }
}

export default Profile;

