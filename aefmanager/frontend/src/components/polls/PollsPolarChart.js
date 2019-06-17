import React, {Component, Fragment} from 'react';
import ReactDOM from "react-dom";
import {viewPoll} from "../../actions/polls"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { MDBContainer } from "mdbreact";
import { Polar } from "react-chartjs-2";

class PollsPolarChart extends React.Component {
state = {
  dataPolar: {
    datasets: [
      {
        label: 'My Current Inner Compass',
        data: [5, 5, 5, 4, 3, 5, 4],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "rgba(90, 173, 246, 0.5)", "rgba(245, 74, 85, 0.5)"]
      },
      {
        label: 'My Previous Inner Compass',
        data: [4, 3, 4, 2, 5, 2, 4],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "rgba(90, 173, 246, 0.5)", "rgba(245, 74, 85, 0.5)"]
      },
      {
        label: 'My Earlier Inner Compass',
        data: [3,	3, 4, 3, 3, 3, 3],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "rgba(90, 173, 246, 0.5)", "rgba(245, 74, 85, 0.5)"]
      }
    ],
    labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender']
  }
}

render() {
  return(
        <MDBContainer>
              <Card>
                  <CardBody>
                      <CardTitle><h3>Inner Compass PolarGraph</h3>
                      </CardTitle>
                      <CardSubtitle>Inner Compass Details</CardSubtitle>
                        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
                  </CardBody>
              </Card>
        </MDBContainer>
        );
      }
}

if(document.getElementById("PollsPolarChart")){
ReactDom.render(<PollsPolarChart/>, document.getElementById("PollsPolarChart"));
}
export default (PollsPolarChart);
