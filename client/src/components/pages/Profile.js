import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./style.css";
import API from "../../utils/API.js";

let profileNum;

class Profile extends React.Component {
  state = {
    userPhotoUrl: "",
    name: "",
    class: "",
    lessons: "",
    users: [],
    isAdmin: false
  };

  componentDidMount() {
    let thisUserClass;
    let currentProfile = parseInt(window.location.pathname.split("/").pop());
    axios.get("/profile")
      .then(res => {
        this.setState({
          isAdmin: res.data.isAdmin
        })
        if (typeof res.data !== 'object') {
          alert("Must sign in first!")
        }
        else if (res.data.isAdmin && !currentProfile) {
          this.setState({
            isAdmin: true
          })
          profileNum = res.data.id
        }
        else if (res.data.isAdmin){
          this.setState({
            isAdmin: true
          })
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
                let lessonsArray = [];
                if (typeof res.data === 'object') {
                  for (let i = 0; i < res.data.Lessons.length; i++) {
                    lessonsArray.push(
                      <li>
                        <a target="_blank" rel="noopener noreferrer" href={res.data.Lessons[i].lessonUrl}>{res.data.Lessons[i].frontEndName}</a>
                      </li>)
                  }
                }
                this.setState({ class: res.data.name, lessons: lessonsArray })
              })
            this.usersNeedMentor();
          }))
  }

  // Get users that need mentor
  usersNeedMentor = () => {
    API.getUsers()
      .then((res) => {
        const needMentor = [];
        res.data.map(user => {
          if (user.needMentor) {
            needMentor.push(user);
          }
        })
        this.setState({
          users: needMentor
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Handles update to needMentor
  // handleGetMentor = event => {
  //   event.preventDefault();
  //   API.updateUser({
  //     name: this.state.name
  //   }).then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        <MDBContainer>
          <h2>Welcome, {this.state.name}</h2>
          <div right>
            <Link to="/logout">
              <MDBBtn className="peachy">
                Logout
              </MDBBtn>
            </Link>
            <Link to="/addLesson">
            {this.state.isAdmin ?  <MDBBtn className="peachy"> Add Lesson </MDBBtn>: null}
            </Link>
          </div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <img alt="Profile Pic" className="smallPic" src={this.state.userPhotoUrl} />
              </MDBCol>
              <MDBCol md="3">
                <h3>
                  Class: {this.state.class}
                </h3>
                <h5>
                  Lessons: {this.state.lessons}  
                </h5>
              </MDBCol>
              {this.state.isAdmin ? (
                <MDBCol md="3">
                  <h5>Users Needing Mentor:</h5>
                    {this.state.users.length ? (
                      <ul>
                        {this.state.users.map(user => (
                          <li>{user.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <h3>No users need a mentor</h3>
                    )}
                </MDBCol>
              ) : (
                <MDBCol>
                  <MDBBtn onClick={this.handleGetMentor} className="peachy">
                    Click for a mentor!
                  </MDBBtn>
                </MDBCol>
              )}
              
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
