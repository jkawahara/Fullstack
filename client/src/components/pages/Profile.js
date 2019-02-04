import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
  // ID: 1 IS HARD CODED FOR US
  axios.get("/api/users/1")
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
      lessonsArray.push(res.data.Lessons[i].name)
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
        {/* <div>
          <p>user profile info will go here</p>
        </div> */}
        <MDBContainer>
          <h2>Welcome, {this.state.name}</h2>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <img className="smallPic" src={this.state.userPhotoUrl} />
              </MDBCol>
              <MDBCol md="6">
                <h3>
                  Class: {this.state.class}
                </h3>
                <h5>
                  Lesson: {this.state.lessons}
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

