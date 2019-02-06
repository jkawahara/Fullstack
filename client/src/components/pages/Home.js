import React from "react";
// import Lesson from "./Lesson";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
// import { img } from "./assets/images/dataFlow.png";

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        {/* idk... side stuff? */}
        <MDBCol md="4">
          <MDBContainer>
            <MDBCard color="red lighten-1" text="white" className="text-center">
              <MDBCardBody>
                Maybe we'll put some stuff here
              </MDBCardBody>
            </MDBCard>
            <hr />
            <MDBCard color="stylish-color" text="white" className="text-center maxHeight">
              <MDBCardBody>
              {/* <img src={img} alt="data-flow" /> */}Perhaps an image for visualization
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        {/* Body */}
        <MDBCol md="8">
          <MDBCard color="unique-color-dark" text="white" className="text-center">
            <MDBCardBody>
              <p>
              Fullstack is a web based application that enable users, affiliated with coding boot camps, to organize their curriculum and increase networking engagement.<br />
                {/* <img alt="data flow" src={img} /> */}
                <br />
                Kinfolk hexagon stumptown, viral banjo literally deep v twee VHS lyft bitters. Normcore edison bulb master cleanse, squid tacos umami roof party chicharrones. Meh vexillologist bitters mixtape mustache ugh cold-pressed. Deep v XOXO copper mug, authentic small batch banh mi locavore mustache.
                Perhaps We'll have a few more things here? Maybe offset it with some text and visuals?
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* // Parallax scroll */}
    
    
      <section>
        <div className="title">
          <h1>This could be the title to this section</h1>
          <h3>subtitle : </h3>
        </div>
      </section>
    </MDBContainer>
    
    
  );
}

export default Home;
