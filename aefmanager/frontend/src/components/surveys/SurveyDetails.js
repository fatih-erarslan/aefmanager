import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSurveys, deleteSurvey, viewSurvey ,updateSurvey } from "../../actions/surveys";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class SurveyDetails extends Component {
  static propTypes = {
    surveys: PropTypes.array.isRequired,
    getSurveys: PropTypes.func.isRequired,
    deleteSurvey: PropTypes.func.isRequired,
    viewSurvey: PropTypes.func.isRequired,
    updateSurvey: PropTypes.func.isRequired
  };

  state = {
        survey: []
  };

  componentDidMount() {
      this.props.viewSurvey();
    }

    render() {
        return (
          <Fragment>
            <div className="card card-body mt-4 mb-4 container">
              <Card>
                  <CardBody>
                      <CardTitle>Self Determination Assessment Matrix</CardTitle>
                      <CardSubtitle>Survey Details</CardSubtitle>
                      {this.props.surveys.map(survey => (
                          <div key={survey.id}>
                              <CardText>{survey.autonomy}</CardText>
                              <CardText>{survey.relatedness}</CardText>
                              <CardText>{survey.competence}</CardText>
                              <CardText>{survey.autonomy_2}</CardText>
                              <CardText>{survey.relatedness_2}</CardText>
                              <CardText>{survey.competence_2}</CardText>
                              <CardText>
                                  {new Intl.DateTimeFormat('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: '2-digit'
                                  }).format(survey.created_at.this)}
                              </CardText>
                          </div>
                      ))}
                  </CardBody>
              </Card>
            </div>
            </Fragment>
        );
    }
}

//export default SurveyDetails;
const mapStateToProps = state => ({
  surveys: state.surveys.surveys
});

export default connect(
  mapStateToProps,
  { getSurveys, viewSurvey, deleteSurvey, updateSurvey }
)(SurveyDetails);
