import React from "react";
// import Lesson from "./Lesson";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import ChartsPage from "../ChartsPage";
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
                
              </MDBCardBody>
            </MDBCard>
            <hr />
            <MDBCard color="stylish-color" text="white" className="text-center maxHeight">
              <MDBCardBody>
                <blockquote>
                  Developers:
                  <hr />
                  * Jason Villaluz<br />
                  * Orion Abrams<br />
                  * John Kawahara<br />
                  * Jarren Patao<br />
                </blockquote>
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
              We've designed Fullstack with boot camps in mind. As students we've found that in many programs the lessons are often separated into segments which is understandable from an educational standpoint, but what about after you've learned the material? How many times have you've learned something too quickly and you need to go back and refer to your notes? We have, many- many times. So we built this application for you.
              </p>
              <MDBRow>
                <MDBCol md="8">
                  <ChartsPage />
                </MDBCol>
                <MDBCol md="4">
                  <p>
                  As a boot camp administrator, how often have you struggled with platforms to manage your student's data analytics? With Fullstack you'll be able to upload lessons belonging to your cohort for easy management.
                  <hr />
                  In possible future updates, we will add live editing to an IDE with multiple sockets for mentoring sessions and more!
                  </p>
                </MDBCol>
              </MDBRow>
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
