import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSurvey } from "../../actions/surveys";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { MDBContainer } from "mdbreact";

export class Form extends Component {
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

  static propTypes = {
    addSurvey: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at } = this.state;
    const survey = { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at };
    this.props.addSurvey(survey);
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
    const { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2, created_at} = this.state;
    return (
      <MDBContainer>
            <Card>
                <CardBody>
                    <CardTitle><h3>Add Self Determination Assessment Matrix Survey</h3>
                    </CardTitle>
                    <CardSubtitle> Please see the instructions on the help page.</CardSubtitle>
        <form onSubmit={this.onSubmit}>

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
            <label>Educator Relatedness: Do I feel safe and happy among my peers and other educators?</label>
            <textarea
              className="form-control"
              type="text"
              name="relatedness"
              onChange={this.onChange}
              value={relatedness}
            />
          </div>
          <div className="form-group">
            <label>Educator Competence: Do I feel competent enough in my role as an educator?</label>
            <textarea
              className="form-control"
              type="text"
              name="competence"
              onChange={this.onChange}
              value={competence}
            />
          </div>
          <div className="form-group">
            <label>Student Autonomy: Do my student  feel free to take part in my education as an independent individual?    </label>
            <textarea
              className="form-control"
              type="text"
              name="autonomy_2"
              onChange={this.onChange}
              value={autonomy_2}
            />
          </div>
          <div className="form-group">
            <label>Student Relatedness: Do my student have friends, family or community to relate to in their new country?</label>
            <textarea
              className="form-control"
              type="text"
              name="relatedness_2"
              onChange={this.onChange}
              value={relatedness_2}
            />
          </div>
          <div className="form-group">
            <label>Student Competence: Do my student trust my abilities and competences as an adult educator?</label>
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
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </CardBody>
        </Card>
  </MDBContainer>
    );
  }
}

export default connect(
  null,
  { addSurvey }
)(Form);
