import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
//import { SurveyForm} from "./surveys/wizard/SurveyForm"
import Header from "./layout/Header";
import SurveyDashboard from "./surveys/SurveyDashboard";
import PollDashboard from "./polls/PollDashboard";
import SurveyDetails from "./surveys/SurveyDetails";
import SurveyUpdate from "./surveys/SurveyUpdate";
import PollsRadarChart from "./polls/PollsRadarChart"
import PollsPolarChart from "./polls/PollsPolarChart"
import Help from "./Help";
import About from "./About";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/polls" component={PollDashboard} />
                  <PrivateRoute exact path="/radar" component={PollsRadarChart} />
                  <PrivateRoute exact path="/polar" component={PollsPolarChart} />
                  <PrivateRoute exact path="/" component={SurveyDashboard} />
                  <PrivateRoute exact path="/survey-detail" component={SurveyDetails} />
                  <PrivateRoute exact path="/survey-update" component={SurveyUpdate} />
                  <PrivateRoute exact path="/help" component={Help} />
                  <PrivateRoute exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
}
}

ReactDOM.render(<App />, document.getElementById("app"));

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.isAuthenticated())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
