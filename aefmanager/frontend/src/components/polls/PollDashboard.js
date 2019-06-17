import React, {Fragment} from "react";
import Form from "./Form";
import Polls from "./Polls";

//import PollSRadarChart from "./PollsRadarChart"; <PollSRadarChart/>



export default function PollDashboard() {
    return (
        <Fragment>

            <Form />
            <Polls />

        </Fragment>
    );
}
