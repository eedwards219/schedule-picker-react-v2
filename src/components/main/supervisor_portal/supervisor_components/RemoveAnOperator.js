import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { removeOperator } from "../../../../store/operators/actions";
import SupervisorNav from "./SupervisorNav";

export class RemoveAnOperator extends Component {
  constructor() {
    super();

    this.state = {
      operator: ""
    };
  }
  handleClick = e => {
    e.preventDefault();
    console.log("removeOp", this.state);
    this.props.removeOperator(this.state.operator);
  };

  render() {
    console.log("removestate", this.state);
    console.log("removeprops", this.props);
    // console.log("schedules", this.props.schedules);

    const listOfOperators = this.props.operators.map(operator => ({
      label: `${operator.name} ${operator.aNumber}`,
      value: `${operator.id}`
    }));

    return (
      <div className="p-grid p-fluid card">
        <h1>Remove An Operator</h1>
        <div className="p-col-12 p-lg-12 ">
          <span className="md-inputfield">
            <Dropdown
              options={listOfOperators}
              value={this.state.operator}
              onChange={event => this.setState({ operator: event.value })}
              autoWidth={false}
            />
          </span>
        </div>
        <Button
          label="Submit"
          type="submit"
          value="Submit"
          style={{ marginBottom: 10, width: "auto" }}
          className="indigo-btn btn"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    operators: state.operators.all.filter(operator => operator.id),
    // supervisors: state.supervisors.all.filter(supervisor => supervisor.name),
    supervisors: state.supervisors.all.map(supervisor => supervisor.name),
    // schedules: state.schedules.all.map(schedule => schedule)

    schedules: state.schedules.all.map(schedule => schedule)
  };
};
export default connect(mapStateToProps, { removeOperator })(RemoveAnOperator);
