import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { addSupervisor } from "../../../../store/supervisors/actions";
import SupervisorNav from "./SupervisorNav";

export class AddASupervisor extends Component {
  constructor() {
    super();

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);
    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    this.state = {
      name: "",
      aNumber: "",
      supervisor: "",
      schedule: ""
      // blankForm: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("addOp", this.state);
    this.props.addSupervisor({
      aNumber: this.state.aNumber,
      name: this.state.name,
      schedule: this.state.schedule,
      role: "supervisor"
    });
  };

  render() {
    console.log("thisstate", this.state);
    // console.log("addprops", this.props);
    // console.log("schedules", this.props.schedules);

    const listOfSupervisors = this.props.supervisors.map(supervisor => ({
      label: supervisor,
      value: supervisor
    }));
    const listOfSchedules = this.props.schedules.map(schedule => ({
      label: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`,
      value: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`
    }));

    return (
      <div className="p-grid p-fluid ">
        <div className="p-col-12 p-lg-12">
          <div className="card card-w-title">
            <h1>Add A Supervisor</h1>
            <div className="p-grid form-group">
              <div className="p-col-12 p-md-6">
                <span className="md-inputfield">
                  <InputText
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <label>Name</label>
                </span>
              </div>
              <div className="p-col-12 p-md-6">
                <span className="md-inputfield">
                  <InputText
                    keyfilter="pint"
                    onChange={e => this.setState({ aNumber: e.target.value })}
                  />
                  <label>A#</label>
                </span>
              </div>

              <div className="p-col-12 p-lg-6">
                <div>
                  <h1>Schedule</h1>
                  <Dropdown
                    options={listOfSchedules}
                    value={this.state.schedule}
                    onChange={event => this.setState({ schedule: event.value })}
                    autoWidth={false}
                  />
                </div>
              </div>
            </div>
            <Button
              label="Submit"
              type="submit"
              value="Submit"
              style={{ marginBottom: 10, width: "auto" }}
              className="indigo-btn btn"
              onClick={this.handleSubmit}
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
export default connect(mapStateToProps, { addSupervisor })(AddASupervisor);
