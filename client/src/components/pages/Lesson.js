import React from "react";
import Iframe from "react-iframe"
import axios from "axios";

// currentLesson will actually always change to whatever embed link we get from database
let currentLesson = "https://codesandbox.io/embed/olrox0pxv5"

class Lesson extends React.Component {
  state = {
    lesson: currentLesson
  };

  componentDidMount(){
    // we need to get id somehow from user clicking on a route beforehand, or use window's url or something
    // axios.get("/api/lesson/" + id)
    // .then(res => {
    //   console.log(res.data)
    //   this.setState({ lesson: res.data })
    }
  

  render() {
    return (
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br>
         <div>
         <Iframe url={this.state.lesson}
        width="100vh"
        height="75vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
      </div>
      </div>
    );
  }
}

export default Lesson;

