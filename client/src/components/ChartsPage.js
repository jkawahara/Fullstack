import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./style.css";

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["React.js", "Node.js", "jQuery", "HTML", "CSS", "SQL", "MongoDB"],
      datasets: [
        {
          label: "Test Grade Average",
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          data: [80, 86, 80, 90, 95, 91, 98],
          borderWidth: 1
        },
        {
          label: "Homework Grade Average",
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          data: [65, 72, 75, 90, 52, 88, 79],
          borderWidth: 1
        },
        {
          label: "Weekly Survey Scores",
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          data: [89, 90, 93, 60, 94, 91, 99],
          borderWidth: 1
        }
      ]
    }

  }


render() {
    return (
      <MDBContainer>
        <h3 left className="mt-5">Administrative View</h3>
        <Bar data={this.state.dataBar} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;