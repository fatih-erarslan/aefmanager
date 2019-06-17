import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

export class FormStudentDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Please answer to the following questions:" />
                    <TextField
                        label="Do my student feel free to take part in my education as an independent individual? "
                        multiline
                        rowsMax="12"
                        value={this.state.autonomy_2}
                        //onChange={this.handleChange('autonomy')}
                        className={classes.textField}
                        margin="normal"
                        hintText="Do my student feel free to take part in my education as an independent individual? "
                        floatingLabelText="Autonomy from the Student Perspective"
                        onChange={handleChange('autonomy_2')}
                        defaultValue={values.autonomy_2}
                    />
                    <br />
                    <TextField
                        label=" Do my student have friends, family or community to relate to in their new country?"
                        multiline
                        rowsMax="12"
                        value={this.state.relatedness_2}
                        //onChange={this.handleChange('relatedness')}
                        className={classes.textField}
                        margin="normal"
                        hintText=" Do my student have friends, family or community to relate to in their new country?"
                        floatingLabelText="Relatedness from the Student Perspective"
                        onChange={handleChange('relatedness_2')}
                        defaultValue={values.relatedness_2}
                    />
                    <br />
                    <TextField
                        label="Do I feel competent enough in my role as an educator?"
                        multiline
                        rowsMax="12"
                        value={this.state.competence_2}
                        //onChange={this.handleChange('competence')}
                        className={classes.textField}
                        margin="normal"
                        hintText="Do my student trust my abilities and competences as an adult educator?"
                        floatingLabelText="Competence from the Student Perspective"
                        onChange={handleChange('competence_2')}
                        defaultValue={values.competence_2}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
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

export default FormStudentDetails;
