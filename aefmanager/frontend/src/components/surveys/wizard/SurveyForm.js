import React, { Component } from 'react';
import FormEducatorDetails from './FormEducatorDetails';
import FormStudentDetails from './FormStudentDetails';
import Confirm from './Confirm';
import Success from './Success';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSurvey } from "../../../actions/surveys";

export class SurveyForm extends Component {
  
    state = {
        autonomy: "",
        relatedness: "",
        competence: "",
        autonomy_2: "",
        relatedness_2: "",
        competence_2: "",
        owner: "",
        created_at: ""

    };
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2 } = this.state;
        const values = { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2 };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
        }
    }
}

export default connect(
  null,
  { addSurvey }
)(SurveyForm);
