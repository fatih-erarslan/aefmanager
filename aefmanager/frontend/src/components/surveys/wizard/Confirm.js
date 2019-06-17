import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { autonomy, relatedness, competence, autonomy_2, relatedness_2, competence_2  }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Reflection Submission" />
          <List>
            <ListItem primaryText="Autonomy" secondaryText={autonomy} />
            <ListItem primaryText="Relatedness" secondaryText={relatedness} />
            <ListItem primaryText="Competence" secondaryText={competence} />
            <ListItem primaryText="Autonomy from the Student Perspective" secondaryText={autonomy_2} />
            <ListItem primaryText="Relatedness from the Student Perspective" secondaryText={relatedness_2} />
            <ListItem primaryText="Competence from the Student Perspective" secondaryText={competence_2} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
