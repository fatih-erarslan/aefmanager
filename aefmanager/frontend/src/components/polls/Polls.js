import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { MDBContainer } from "mdbreact";
import { getPolls, deletePoll, viewPoll, updatePoll } from "../../actions/polls";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table, CardLink, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const columns = ["Empathy", "Flexibility", "Andragogy", "Trust", "Patience", "Culture", "Gender", "Date"];

export class Polls extends Component {
    static propTypes = {
        polls: PropTypes.array.isRequired,
        getPolls: PropTypes.func.isRequired,
        deletePoll: PropTypes.func.isRequired,
        viewPoll: PropTypes.func.isRequired,
        updatePoll: PropTypes.func.isRequired
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
        this.props.getPolls();
    }
    render() {
        return (
            <Fragment>
              <MDBContainer>
              <p></p>
                <p><h5>Inner Compass</h5></p>
                <Table responsive=" table-striped">
                    <thead>
                    <tr>
                        <th>Empathy</th>
                        <th>Flexibility</th>
                        <th>Andragogy</th>
                        <th>Trust</th>
                        <th>Patience</th>
                        <th>Culture</th>
                        <th>Gender</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.polls.map(poll => (
                        <tr key={poll.id}>
                            <td>{poll.empathy}</td>
                            <td>{poll.flexibility}</td>
                            <td>{poll.andragogy}</td>
                            <td>{poll.trust}</td>
                            <td>{poll.patience}</td>
                            <td>{poll.culture}</td>
                            <td>{poll.gender}</td>
                            <td>
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(poll.created_at.this)}
                            </td>
                            <td>
                                <Button color="primary btn-sm"
                                    onClick={this.toggle}>
                                    {" "}
                                    View
                                    {this.props.poll}
                                </Button>
                            </td>
                            <td>
                                <Button color="danger btn-sm"
                                        onClick={this.props.deletePoll.bind(this, poll.id)}>
                                    {" "}
                                    Delete
                                </Button>
                            </td>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Inner Compass Details</ModalHeader>
                                <ModalBody>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Inner Compass</CardTitle>
                                            <CardSubtitle>Poll Details</CardSubtitle>
                                            {this.props.polls.map(poll => (
                                                <div key={poll.id}>
                                                    <CardSubtitle>{poll.owner}</CardSubtitle>
                                                    <CardText>{poll.empathy}</CardText>
                                                    <CardText>{poll.flexibility}</CardText>
                                                    <CardText>{poll.andragogy}</CardText>
                                                    <CardText>{poll.trust}</CardText>
                                                    <CardText>{poll.patience}</CardText>
                                                    <CardText>{poll.culture}</CardText>
                                                    <CardText>{poll.gender}</CardText>
                                                    <CardText>
                                                        {new Intl.DateTimeFormat('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: '2-digit'
                                                        }).format(poll.created_at.this)}
                                                    </CardText>

                                                </div>
                                            ))}
                                        </CardBody>
                                    </Card>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary btn-sm"
                                        onClick={this.props.viewPoll.bind(this, poll.id)}>
                                        View
                                    {this.props.survey}
                                    </Button>
                                    <Button color="danger btn-sm"
                                        onClick={this.props.deletePoll.bind(this, poll.id)}>
                                        {" "}
                                        Delete
                                </Button>
                                    <Button
                                        onClick={this.props.updatePoll.bind(this, poll.id)}
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
                </MDBContainer>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    polls: state.polls.polls
});

export default connect(
    mapStateToProps,
    { getPolls, deletePoll, viewPoll, updatePoll}
)(Polls);
