import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBFooter, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#ffffff" className="font-small pt-4 mt-4 backWhite">
      <div className="text-center py-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="10" className="va">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://jkawahara.github.io">John Kawahara</a>, <a href="https://www.orionabrams.com">Orion Abrams</a>, <a href="http://www.jarrenpatao.com">Jarren Patao</a>, <a href="https://github.com/Momo0532">Jason Villaluz</a>
            </MDBCol>
            <MDBCol md="2">
              <MDBBtn className="bluey btn-floating btn-sm">
                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                  <MDBIcon icon="hands-helping fa-2x" />
                </Link>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;