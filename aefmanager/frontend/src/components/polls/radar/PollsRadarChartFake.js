import React, {Component, Fragment} from 'react';
import {Radar} from 'react-chartjs-2';
import ReactDOM from "react-dom";
import {viewPoll} from "../../actions/polls"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { MDBContainer } from "mdbreact";

const data = {
    labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
    datasets: [
        {
            label: 'My Current Inner Compass',
            //data: this.state,
            data: [5,	4,	4,	4,	4,	4,	4],
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#b5ff40',
            pointHoverBackgroundColor: '#9251ff',
            pointHoverBorderColor: 'rgba(179,181,198,1)'
        },
        {
            label: 'My Previous Inner Compass',
            //data: this.state.previousState,
            data: [3,	3,	4,	3,	3,	3,	3],
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#b5ff40',
            pointHoverBackgroundColor: '#9251ff',
            pointHoverBorderColor: 'rgba(179,181,198,1)'
        }
    ]
}

export class PollsRadarChart extends Component{
  render() {
    return (
            <div className="card card-body mt-4 mb-4 container">
                <Card>
                    <CardBody>
                        <CardTitle><h3>Inner Compass RadarGraph</h3>
                        </CardTitle>
                        <CardSubtitle>Inner Compass Details</CardSubtitle>
                          <Radar ref="chart" data={data} />
                    </CardBody>
                </Card>
            </div>
          );
        }
componentDidMount() {
  const { datasets } = this.refs.chart.chartInstance.data
  console.log(datasets[0,1].data);
}
      }

if(document.getElementById("PollsRadarChart")){
  ReactDom.render(<PollsRadarChart/>, document.getElementById("PollsRadarChart"));
}
export default (PollsRadarChart);
