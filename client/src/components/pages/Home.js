import React from "react";
// import Lesson from "./Lesson";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import { img } from "./assets/images/dataFlow.png";

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
              <img src={img} alt="data-flow" />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        {/* Body */}
        <MDBCol md="8">
          <MDBCard color="unique-color-dark" text="white" className="text-center">
            <MDBCardBody>
              <p>
                Lorem ipsum dolor amet williamsburg swag cold-pressed heirloom bespoke marfa truffaut selvage kitsch. Tofu la croix offal, dreamcatcher lomo readymade live-edge succulents vexillologist selfies migas woke yr williamsburg neutra. Tbh chia glossier wolf pork belly mumblecore four loko neutra slow-carb meditation unicorn green juice. Semiotics twee keytar fingerstache master cleanse paleo listicle portland pug. Deep v man bun irony pinterest succulents 3 wolf moon kitsch coloring book. Hella XOXO disrupt pork belly migas fashion axe offal single-origin coffee DIY meh.<br />
                <img alt="data flow" src={img} />
                <br />
                Kinfolk hexagon stumptown, viral banjo literally deep v twee VHS lyft bitters. Normcore edison bulb master cleanse, squid tacos umami roof party chicharrones. Meh vexillologist bitters mixtape mustache ugh cold-pressed. Deep v XOXO copper mug, authentic small batch banh mi locavore mustache.
                Perhaps We'll have a few more things here? Maybe offset it with some text and visuals?
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
