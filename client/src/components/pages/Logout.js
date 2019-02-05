import React from "react";
import axios from "axios";
import { MDBContainer} from "mdbreact";
import "./style.css";

class Logout extends React.Component {


  componentDidMount() {
    axios.get("/logout/")
      .then(res => {
          console.log(res.data)
          alert(res.data)
      })
  }

  render() {
    return (
      <div>
          <MDBContainer>
            Go to another page, wanker!
          </MDBContainer>
      </div>
    );
  }
}

export default Logout;

