import React, { Component } from 'react';
import { Radar} from 'react-chartjs-2';
import axios from 'axios';
import { tokenConfig } from "../../actions/auth";

export default class ICRadarChart extends Component {
	
	constructor(props){
		super(props);
		this.state = {data : {}};
	}


 	render(){
      	return(
        	<div>
        		<Radar data={this.state.data}/>
     		</div>
      )
    }

	componentDidMount(){
        axios.get(`/api/icompass/${id}/`, tokenConfig(getState))
         .then(res => {
            dispatch({
               payload: id
            });
         })
         .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
         );
          this.setState(
          { 
            data : {
                labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
              datasets:[
                 {
                    label:'My Current Inner Compass',
                    data: this.state.data,
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#b5ff40',
                    pointHoverBackgroundColor: '#9251ff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)'
                 }
              ]
           }
        });
	}


}