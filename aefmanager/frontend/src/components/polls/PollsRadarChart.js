import React, {Component, Fragment} from 'react';
import {Radar} from 'react-chartjs-2';
import ReactDOM from "react-dom";
import {viewPoll} from "../../actions/polls"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { MDBContainer } from "mdbreact";
import axios from "axios"
/*

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
*/

export class PollsRadarChart extends Component{
  state= {
    polls: [ ]
  }

  componentDidMount() {
    axios.get("/api/polls/")
      .then(res => {
        console.log(res);
        this.setState({
          polls:res.data.slice(0,3)
        })
      })
  }

  polls = {
    dataRadar: {
      datasets: [
        {
          label: 'My Current Inner Compass',
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#b5ff40',
          pointHoverBackgroundColor: '#9251ff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          //data: [5, 5, 5, 4, 3, 5, 4]
          data: this.state

        },
        {
          label: 'My Previous Inner Compass',
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#b5ff40',
          pointHoverBackgroundColor: '#9251ff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          //data: [5,	4,	4,	4,	4,	4,	4]
          data: this.state.previousState

        },
        {
          label: 'My Earlier Inner Compass',
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#b5ff40',
          pointHoverBackgroundColor: '#9251ff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [3,	3,	4,	3,	3,	3,	3]
        }
      ],
      labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender']
    }
  }

  render() {
      const { polls } = this.state;
      const dataRadar = polls.length ? (
        polls.map(poll => {
          return(
                  <Card key={poll.id}>
                      <CardBody>
                          <CardTitle>{poll.owner}<h3>Inner Compass RadarGraph</h3>
                          </CardTitle>
                          <CardSubtitle>Inner Compass Details {poll.created_at}</CardSubtitle>
                      </CardBody>
                  </Card>
          )
        })
      ) : (
        <div className="center"> No RadarGraph Yet </div>
      )
      return (
        <MDBContainer>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
        {dataRadar}
        </MDBContainer>
      )
    }
  }

//if(document.getElementById("PollsRadarChart")){
//  ReactDom.render(<PollsRadarChart/>, document.getElementById("PollsRadarChart"));
//}
export default (PollsRadarChart);
