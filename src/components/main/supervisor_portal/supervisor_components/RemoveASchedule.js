import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { removeSchedule } from "../../../../store/schedules/actions";
import SupervisorNav from "./SupervisorNav";

export class RemoveAnOperator extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      aNumber: "",
      supervisor: "",
      schedule: "",
      blankForm: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("addOp", this.state);
    this.props.addOperator({
      name: this.state.name,
      aNumber: this.state.aNumber,
      supervisor: this.state.supervisor,
      schedule: this.state.schedule
    });
  };

  render() {
    console.log("thisstate", this.state);
    // console.log("addprops", this.props);
    // console.log("schedules", this.props.schedules);

    const listOfSchedules = this.props.schedules.map(schedule => ({
      label: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`,
      value: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`
    }));

    return (
      <div className="p-grid p-fluid ">
        <SupervisorNav />

        <div className="p-col-6 p-lg-6">
          <div className="card card-w-title">
            <h1>Remove A Schedule</h1>
            <div className="p-grid form-group" onSubmit={this.handleSubmit}>
              <div className="p-col-6 p-md-6 ">
                <Dropdown
                  options={listOfSchedules}
                  value={this.state.schedule}
                  onChange={event => this.setState({ schedule: event.value })}
                  autoWidth={false}
                />
                <div></div>
              </div>
            </div>
            <Button
              label="Submit"
              type="submit"
              value="Submit"
              style={{ marginBottom: 10, width: "auto" }}
              className="indigo-btn btn"
            />
          </div>
        </div>
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
export default connect(mapStateToProps, { removeSchedule })(RemoveAnOperator);
