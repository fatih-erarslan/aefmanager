import React, {Component, Fragment} from 'react';
import {Radar} from 'react-chartjs-2';
import {connect} from "react-redux";
import {viewPoll} from "../../actions/polls";
import PropTypes from "prop-types";

export class OldPollsRadarChart extends Component {
    static propTypes = {
        polls: PropTypes.array.isRequired,
        viewPoll: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            id: polls.id,
            empathy: this.state.data.empathy,
            flexibility: this.state.data.flexibility,
            andragogy: this.state.data.andragogy,
            trust: this.state.data.trust,
            patience: this.state.data.patience,
            culture: this.state.data.culture,
            gender: this.state.data.gender,
            created_at: this.state.data.created_at
        };

        this.viewPoll = this.viewPoll.bind(this);
    }

    viewPoll(e) {
        this.setState({
            data: {
                labels: ['Empathy', 'Flexibility', 'Andragogy', 'Trust', 'Patience', 'Culture', 'Gender'],
                datasets: [
                    {
                        label: 'My Current Inner Compass',
                        data: propTypes.polls, // 'this.viewPoll' also the same error
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
        this.props.viewPoll();
    }

    componentDidMount() {
        this.props.viewPoll();
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h3> Inner Compass</h3>
                    <Radar data={this.state.data}>
                    </Radar>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    polls: state.polls.polls
});

export default connect(
    mapStateToProps,
    {viewPoll}
)(OldPollsRadarChart);