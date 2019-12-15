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

export class RemoveASchedule extends Component {
  constructor() {
    super();

    this.state = {
      schedule: ""
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.props.removeSchedule(this.state.schedule);
  };

  render() {
    console.log("thisstate", this.state);

    const listOfSchedules = this.props.schedules.map(schedule => ({
      label: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`,
      value: `${schedule.id}`
    }));

    return (
      <div className="p-grid p-fluid ">
        <div className="p-col-12 p-lg-12">
          <div className="card card-w-title">
            <h1>Remove A Schedule</h1>
            <div className="p-grid form-group">
              <div className="p-col-12 p-md-12 ">
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
              onClick={this.handleClick}
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
export default connect(mapStateToProps, { removeSchedule })(RemoveASchedule);
