import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class ChartsPage extends React.Component {
  state = {
    dataRadar: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "#1",
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "#2",
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          data: [12, 42, 121, 56, 24, 12, 2]
        },
        {
          label: "#3",
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          data: [2, 123, 154, 76, 54, 23, 5]
        }
      ]
    }

  }


render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Radar chart</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
