import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {updateSurvey, viewSurvey} from "../../actions/surveys";

export class SurveyUpdate extends Component {
    state = {
        id: "",
        autonomy: "",
        relatedness: "",
        competence: "",
        autonomy_2: "",
        relatedness_2: "",
        competence_2: "",
        owner: "",
        created_at: ""

    };

    static propTypes = {
        surveys: PropTypes.array.isRequired,
        viewSurvey: PropTypes.func.isRequired,
        updateSurvey: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.viewSurvey(this);
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at} = this.state;
        const survey = {autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at};
        this.props.updateSurvey(survey);
        this.setState({
            autonomy: "",
            relatedness: "",
            competence: "",
            autonomy_2: "",
            relatedness_2: "",
            competence_2: "",
            created_at: ""
        });
    };

    render() {
        const {autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at} = this.state;
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h2>Edit Self Determination Assessment Matrix Survey</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            {this.props.surveys.map(survey => (
                                <div key={survey.id}>
                                    <div className="form-group">
                                        <label>Educator Autonomy:
                                            Do I feel free enough to plan and perform my work as an educator?</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="autonomy"
                                            onChange={this.onChange}
                                            value={autonomy}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Educator Relatedness: Do I feel safe and happy among my peers and other
                                            educators?</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="relatedness"
                                            onChange={this.onChange}
                                            value={relatedness}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Educator Competence: Do I feel competent enough in my role as an
                                            educator?</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="competence"
                                            onChange={this.onChange}
                                            value={competence}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Student Autonomy: Do my student feel free to take part in my education as
                                            an independent individual? </label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="autonomy_2"
                                            onChange={this.onChange}
                                            value={autonomy_2}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Student Relatedness: Do my student have friends, family or community to
                                            relate to in their new country?</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="relatedness_2"
                                            onChange={this.onChange}
                                            value={relatedness_2}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Student Competence: Do my student trust my abilities and competences as
                                            an adult educator?</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="competence_2"
                                            onChange={this.onChange}
                                            value={competence_2}
                                        />
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                data-model="Survey"
                                                name="created_at"
                                                onChange={this.onChange}
                                                value={created_at}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                onClick={this.props.updateSurvey.bind(this, survey.id)}
                                                type="submit" className="btn btn-primary">
                                                {" "}
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    surveys: state.surveys.surveys
});
export default connect(
    mapStateToProps,
    {updateSurvey, viewSurvey}
)(SurveyUpdate);
