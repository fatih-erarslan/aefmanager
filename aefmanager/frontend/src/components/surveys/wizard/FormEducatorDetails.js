import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';

export class FormEducatorDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Please answer to the following questions:" />
                    <TextField
                        label="Do I feel free enough to plan and perform my work as an educator?"
                        multiline
                        rowsMax="12"
                        value={this.state.autonomy}
                        //onChange={this.handleChange('autonomy')}
                        className={classes.textField}
                        margin="normal"
                        hintText="Do I feel free enough to plan and perform my work as an educator?"
                        floatingLabelText="Autonomy"
                        onChange={handleChange('autonomy')}
                        defaultValue={values.autonomy}
                    />
                    <br />
                    <TextField
                        label="Do I feel safe and happy among my peers and other educators?"
                        multiline
                        rowsMax="12"
                        value={this.state.relatedness}
                        //onChange={this.handleChange('relatedness')}
                        className={classes.textField}
                        margin="normal"
                        hintText="Do I feel safe and happy among my peers and other educators?"
                        floatingLabelText="Relatedness"
                        onChange={handleChange('relatedness')}
                        defaultValue={values.relatedness}
                    />
                    <br />
                    <TextField
                        label="Do I feel competent enough in my role as an educator?"
                        multiline
                        rowsMax="12"
                        value={this.state.competence}
                        //onChange={this.handleChange('competence')}
                        className={classes.textField}
                        margin="normal"
                        hintText="Do I feel competent enough in my role as an educator?"
                        floatingLabelText="Competence"
                        onChange={handleChange('competence')}
                        defaultValue={values.competence}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default FormEducatorDetails;
