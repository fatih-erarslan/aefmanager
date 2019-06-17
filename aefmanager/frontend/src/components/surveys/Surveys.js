import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSurveys, deleteSurvey, viewSurvey, updateSurvey} from "../../actions/surveys";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table, CardLink, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const columns = ["Educator Autonomy", "Educator Relatedness", "Educator Competence", "Student Autonomy", "Student Relatedness", "Student Competence", "Date"];

export class Surveys extends Component {
    static propTypes = {
        surveys: PropTypes.array.isRequired,
        getSurveys: PropTypes.func.isRequired,
        deleteSurvey: PropTypes.func.isRequired,
        viewSurvey: PropTypes.func.isRequired,
        updateSurvey: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.props.getSurveys();
    }
    render() {
        return (
          <Fragment>
            <p></p>
            <p><h5>Self Determination Assessment Matrix</h5></p>
            <Table responsive=" table-striped">
                <thead>
                <tr>
                    <th>Educator Autonomy</th>
                    <th>Educator Relatedness</th>
                    <th>Educator Competence</th>
                    <th>Student Autonomy</th>
                    <th>Student Relatedness</th>
                    <th>Student Competence</th>
                    <th> Date</th>
                </tr>
                </thead>
                <tbody>
                {this.props.surveys.map(survey => (
                    <tr key={survey.id}>
                        <td>{survey.autonomy}</td>
                        <td>{survey.relatedness}</td>
                        <td>{survey.competence}</td>
                        <td>{survey.autonomy_2}</td>
                        <td>{survey.relatedness_2}</td>
                        <td>{survey.competence_2}</td>
                        <td>
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(survey.created_at.this)}
                        </td>
                        <td>
                            <Button color="primary btn-sm" onClick={this.toggle}>
                                View
                                {this.props.survey}
                            </Button>
                        </td>
                        <td>
                            <Button color="danger btn-sm"
                                    onClick={this.props.deleteSurvey.bind(this, survey.id)}>
                                {" "}
                                Delete
                            </Button>
                        </td>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Survey Details</ModalHeader>
                            <ModalBody>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Self Determination Assessment Matrix</CardTitle>
                                        <CardSubtitle>Survey Details</CardSubtitle>
                                        {this.props.surveys.map(survey => (
                                            <div key={survey.id}>
                                                <CardSubtitle>{survey.owner}</CardSubtitle> 
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
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary btn-sm"
                                        onClick={this.props.viewSurvey.bind(this, survey.id)}>
                                    View
                                    {this.props.survey}
                                </Button>
                                <Button color="danger btn-sm"
                                        onClick={this.props.deleteSurvey.bind(this, survey.id)}>
                                    {" "}
                                    Delete
                                </Button>
                                <Button
                                    onClick={this.props.updateSurvey.bind(this, survey.id)}
                                    color="warning btn-sm"
                                >
                                    {" "}
                                    Update
                                </Button>
                                <Button color="secondary btn-sm" onClick={this.toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    surveys: state.surveys.surveys
});

export default connect(
    mapStateToProps,
    {getSurveys, deleteSurvey, viewSurvey, updateSurvey}
)(Surveys);
