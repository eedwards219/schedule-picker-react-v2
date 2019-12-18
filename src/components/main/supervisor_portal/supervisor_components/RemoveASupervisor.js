import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { removeSupervisor } from "../../../../store/supervisors/actions";
import SupervisorNav from "./SupervisorNav";

export class RemoveASupervisor extends Component {
  constructor() {
    super();

    this.state = {
      supervisor: ""
    };
  }
  handleClick = e => {
    e.preventDefault();
    console.log("removeOp", this.state);
    this.props.removeSupervisor(this.state.supervisor);
  };

  render() {
    console.log("removestate", this.state);
    console.log("removeprops", this.props);
    // console.log("schedules", this.props.schedules);

    const listOfSupervisors = this.props.supervisors.map(supervisor => ({
      label: `${supervisor.name}`,
      value: `${supervisor.id}`
    }));

    return (
      <div className="p-grid p-fluid card">
        <h1>Remove A Supervisor</h1>
        <div className="p-col-12 p-md-12 ">
          <Dropdown
            options={listOfSupervisors}
            value={this.state.supervisor}
            onChange={event => this.setState({ supervisor: event.value })}
            autoWidth={false}
          />
          <div></div>
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
    supervisors: state.supervisors.all.map(supervisor => supervisor),
    // schedules: state.schedules.all.map(schedule => schedule)

    schedules: state.schedules.all.map(schedule => schedule)
  };
};
export default connect(mapStateToProps, { removeSupervisor })(
  RemoveASupervisor
);
