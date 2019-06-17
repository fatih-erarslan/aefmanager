import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPoll } from "../../actions/polls";
import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import { MDBContainer } from "mdbreact";
// import { Form, Select } from 'react-form';

export class Form extends Component {
  state = {
    empathy: "",
    flexibility: "",
    andragogy: "",
    trust: "",
    patience: "",
    culture: "",
    gender: ""
  };

  static propTypes = {
    addPoll: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { empathy, flexibility, andragogy, trust, patience, culture, gender } = this.state;
    const poll = { empathy, flexibility, andragogy, trust, patience, culture, gender };
    this.props.addPoll(poll);
    this.setState({
    empathy: "",
    flexibility: "",
    andragogy: "",
    trust: "",
    patience: "",
    culture: "",
    gender: ""
    });
  };

  render() {
    const { empathy, flexibility, andragogy, trust, patience, culture, gender } = this.state;
    return (
      <MDBContainer>
            <Card>
                <CardBody>
                    <CardTitle><h3>Add Inner Compass Survey</h3>
                    </CardTitle>
                    <CardSubtitle>How do you feel you have been doing on this dimension? Rate yourself on the scale of 1 to 5.
            For more instructions click on this link (se below)</CardSubtitle>
            <li>
              1= I am not aware of this ability/skill in myself
            </li>
            <li>
              2= I need support for improving this ability/skill
            </li>
            <li>
               3= I feel competent in this ability/skill some of the time
            </li>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Empathy</label>
                <input
                  className="form-control"
                  type="number"
                  id="empathy"
                  aria-valuemax={5}
                  maxLength={1}
                  name="empathy"
                  onChange={this.onChange}
                  value={empathy}
                />
              </div>
              <div className="form-group">
                <label>Adaptive Action and Flexibility</label>
                <input
                  className="form-control"
                  type="number"
                  id="flexibility"
                  aria-valuemax={5}
                  maxLength={1}
                  name="flexibility"
                  onChange={this.onChange}
                  value={flexibility}
                />
              </div>
              <div className="form-group">
                <label>Andragogy Aptitude</label>
                <input
                  className="form-control"
                  type="number"
                  id="andragogy"
                  aria-valuemax={5}
                  maxLength={1}
                  name="andragogy"
                  onChange={this.onChange}
                  value={andragogy}
                />
              </div>
              <div className="form-group">
                <label>Ability to Build Trust and Confidentiality</label>
                <input
                  className="form-control"
                  type="number"
                  id="trust"
                  aria-valuemax={5}
                  maxLength={1}
                  name="trust"
                  onChange={this.onChange}
                  value={trust}
                />
              </div>
              <div className="form-group">
                <label>Patience and Understanding</label>
                <input
                  className="form-control"
                  type="number"
                  id="patience"
                  aria-valuemax={5}
                  maxLength={1}
                  name="patience"
                  onChange={this.onChange}
                  value={patience}
                />
              </div>
              <div className="form-group">
                <label>Cultural Intelligence</label>
                <input
                  className="form-control"
                  type="number"
                  id="culture"
                  aria-valuemax={5}
                  maxLength={1}
                  name="culture"
                  onChange={this.onChange}
                  value={culture}
                />
              </div>
              <div className="form-group">
                <label>Gender Sensitivity</label>
                <input
                  className="form-control"
                  type="number"
                  id="gender"
                  aria-valuemax={5}
                  data-model="Survey"
                  maxLength={1}
                  name="gender"
                  onChange={this.onChange}
                  value={gender}
                />
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
  { addPoll }
)(Form);
