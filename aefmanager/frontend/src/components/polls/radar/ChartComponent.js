import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

export class ChartComponent extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

    render() {
        return (
            <Fragment>
              <div>{this.props.myProp}</div>
            </Fragment>
        );
    }
}
export default (ChartComponent);
