import React from "react";
import Lesson from "./Lesson";


var sectionStyle = {
  padding: "25px",
  width: "100%",
  height: "100vh"
};
function Home() {
  return (
    <div style={sectionStyle}>
    {/* if material bootstrap is installed, you should see the below button as green */}
    <button className="btn-default">Welcome to Fullstack</button>
    {Lesson}
    </div>
  );
}

export default Home;
