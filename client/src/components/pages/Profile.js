import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./style.css";
var profileNum

class Profile extends React.Component {
  state = {
    userPhotoUrl: "",
    name: "",
    class: "",
    lessons: ""
  };

  componentDidMount() {
    var thisUserClass
    var currentProfile = parseInt(window.location.pathname.split("/").pop());
    console.log(currentProfile)
    if (!currentProfile){
      currentProfile= 1
      console.log(currentProfile)
    }
    axios.get("/profile")
    .then(res => {
      console.log(res.data)
      if (typeof res.data !== 'object'){
        alert("Must sign in first!")
      }
      else if (res.data.isAdmin){
        profileNum = currentProfile
      }
      else {
      profileNum = res.data.id
      }
  }).then(() =>
    axios.get("/profile/" + profileNum)
      .then(res => {
          thisUserClass = res.data.ClassId
        this.setState({ userPhotoUrl: res.data.userPhotoUrl, name: res.data.name })
      }).then(() => {
        axios.get("/profile/class/" + thisUserClass)
          .then(res => {
            console.log(res.data)
            let lessonsArray = [];
            if (typeof res.data === 'object'){
            for (let i = 0; i < res.data.Lessons.length; i++) {
              lessonsArray.push(
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={res.data.Lessons[i].lessonUrl}>{res.data.Lessons[i].frontEndName}</a>
                </li>)
            }
          }
            this.setState({ class: res.data.name, lessons: lessonsArray })
          })
      }))
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <h2>Welcome, {this.state.name}</h2>
          <div right>

            <Link to="/logout">
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

