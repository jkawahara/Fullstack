import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="#ffffff" className="font-small pt-4 mt-4 backWhite">
      <div className="text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://jkawahara.github.io">John Kawahara</a>, <a href="https://www.orionabrams.com">Orion Abrams</a>, <a href="http://www.jarrenpatao.com">Jarren Patao</a>, <a href="https://github.com/Momo0532">Jason Villaluz</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;