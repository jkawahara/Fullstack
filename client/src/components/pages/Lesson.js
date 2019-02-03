import React from "react";
import Iframe from "react-iframe"
import axios from "axios";

// we need to get user's window from url to direct them to right lesson from database

// currentLesson will actually always change to whatever embed link we get from database
// let currentLesson = "https://codesandbox.io/embed/olrox0pxv5"

class Lesson extends React.Component {
  state = {
    lesson: ""
  };

  componentWillMount() {
    // n this case, lastTWo will become ajax/1 or whatever window user is in
    var url = window.location.pathname;
    var lessonNumber = url
      .split("/") // split to an array
      .slice(-2) // take the two last elements
      .join('/') // join back to a string;
    console.log(lessonNumber);
    axios.get("/api/lesson/" + lessonNumber)

    .then(res => {
      console.log("Sent")
      console.log(res.data.lessonUrl)
      this.setState({ lesson: res.data.lessonUrl })
    })
  }


  render() {
    return (
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div>
          <Iframe url={this.state.lesson}
            width="100%"
            height="75vh"
            border="0"
            border-radius="4px"
            overflow="hidden"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
        </div>
      </div>
    );
  }
}

export default Lesson;

