import React, {Component, Fragment} from 'react';
import {Radar} from 'react-chartjs-2';
import ReactDOM from "react-dom";
import {viewPoll} from "../../actions/polls"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import ChartComponent from "./ChartComponent"

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
 constructor(props){
   super(props);
   this.state = {data : {}};
   }
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
export class PollsRadarChart extends Component {

  state = {
      data: []
  };

    componentDidMount() {
        this.setState(
            {
                data: [{
                    labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
                    datasets: [
                        {
                            label: 'My Current Inner Compass',
                            data: this.state,
                            //data: [5,	4,	4,	4,	4,	4,	4],
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#b5ff40',
                            pointHoverBackgroundColor: '#9251ff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)'
                        },
                        {
                            label: 'My Previous Inner Compass',
                            data: this.state.previousState,
                            //data: [3,	3,	4,	3,	3,	3,	3],
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
          <ChartComponent myProp={viewPoll}>
                <div className="card card-body mt-4 mb-4 container">
                    <Card>
                        <CardBody>
                            <CardTitle><h3>Inner Compass RadarGraph</h3>
                            </CardTitle>
                            <CardSubtitle>Inner Compass Details</CardSubtitle>
                              <Radar data={this.props.state} />
                        </CardBody>
                    </Card>
                </div>
              </ChartComponent>
        )
    }

}

if(document.getElementById("PollsRadarChart")){
  ReactDom.render(<PollsRadarChart/>, document.getElementById("PollsRadarChart"));
}

export default (PollsRadarChart);

/*

<Fragment>
{this.props.polls.map(poll => (  ))}
key={poll.id}
</Fragment>


    state = {
        poll: []
    };

static propTypes = {
    polls: PropTypes.array.isRequired,
    viewPoll: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    polls: state.polls.polls
});
connect(mapStateToProps, {viewPoll})
export default connect(mapStateToProps, {viewPoll})(PollsRadarChart);
 */
