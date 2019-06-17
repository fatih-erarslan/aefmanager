import React, { Component, Fragment } from 'react';
import { Radar} from 'react-chartjs-2';
import { getPolls, viewPoll } from "../../actions/polls"
import PropTypes from "prop-types";
import {connect} from "react-redux";
/*
state = {
    empathy: "",
    flexibility: "",
    andragogy: "",
    trust: "",
    patience: "",
    culture: "",
    gender: ""
 };
export const viewChart = id => (dispatch, getState) => {
   axios
    .get(`/api/icompass/${id}/`, tokenConfig(getState))
      .then(res => {
         dispatch(createMessage({ viewChart: "Viewing Inner Compass" }));
         dispatch({
            type: VIEW_POLL,
            payload: id
         });
      })
      .catch(err =>
         dispatch(returnErrors(err.response.data, err.response.status))
      );
   console.log('current state:', getState());

};

const charData = () => (dispatch, getState) =>  {
  axios
     .get(`/api/icompass/`, tokenConfig(getState))
     .then(res => {
        dispatch(createMessage({ viewPoll: "Viewing Inner Compass" }));
        dispatch({
           type: VIEW_POLL,
           payload: res.data,
           labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
           datasets: [
             {
               label: 'My First dataset',
               backgroundColor: 'rgba(179,181,198,0.2)',
               borderColor: 'rgba(179,181,198,1)',
               pointBackgroundColor: 'rgba(179,181,198,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(179,181,198,1)',
               data: data
             },
             {
               label: 'My Second dataset',
               backgroundColor: 'rgba(255,99,132,0.2)',
               borderColor: 'rgba(255,99,132,1)',
               pointBackgroundColor: 'rgba(255,99,132,1)',
               pointBorderColor: '#fff',
               pointHoverBackgroundColor: '#fff',
               pointHoverBorderColor: 'rgba(255,99,132,1)',
               data: data
             }
           ]
        });
     })
     .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
     );
  console.log('current state:', getState());
};

      //const loadData = `/api/icompass/${id}/`;
       axios.get(viewPoll)
         .then(res => {
            charData =[ res.data];
        //    let dimensions = [];
        //    let values = [];
        //    iCompassData.forEach(element => {
        //      dimensions.push(element.dimension);
        //      values.push(element.value);
            });
          this.setState({
 */
export class ICRadarChart extends Component {
  static propTypes = {
      polls: PropTypes.array.isRequired,
      getPolls: PropTypes.func.isRequired,
      viewPoll: PropTypes.func.isRequired
  };

    componentDidMount(){
       this.props.viewPoll(
          {
             data: [{
               labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
               datasets: [
                  {
                     label: 'My Current Inner Compass',
                     data: this.state.polls,
                     backgroundColor: 'rgba(179,181,198,0.2)',
                     borderColor: 'rgba(179,181,198,1)',
                     pointBackgroundColor: 'rgba(179,181,198,1)',
                     pointBorderColor: '#b5ff40',
                     pointHoverBackgroundColor: '#9251ff',
                     pointHoverBorderColor: 'rgba(179,181,198,1)'
                  }
               ]
             }
             ]
          }
       );
   }
   render() {
      return (
        <Fragment>
          <div className="container">
            <h2>Inner Compass RadarGraph</h2>
                        <Radar data={this.state.[${id}]} />
          </div>
        </Fragment>
      )
   }
}
const mapStateToProps = state => ({
    polls: state.polls.polls
});

export default connect(
    mapStateToProps,
    {viewPoll, getPolls}
)(ICRadarChart);
