import React, { Fragment } from "react";
import Form from "./Form";
import Surveys from "./Surveys";
//import SurveyDetails from "./SurveyDetails";       <SurveyDetails />

export default function SurveyDashboard() {
  return (
    <Fragment>
      <Form />
      <Surveys />
    </Fragment>
  );
}
