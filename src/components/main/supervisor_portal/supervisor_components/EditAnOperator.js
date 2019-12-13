import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { editOperator } from "../../../../store/operators/actions";
import SupervisorNav from "./SupervisorNav";

export class EditAnOperator extends Component {
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
      schedule: "",
      operator: "",
      blankForm: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.editOperator(
      {
        name: this.state.name,
        aNumber: this.state.aNumber,
        supervisor: this.state.supervisor,
        schedule: this.state.schedule
      },
      this.state.aNumber
    );
    // this.setState({ blankForm: " " });
  };

  render() {
    console.log("editopprops", this.props);
    console.log("editopstate", this.state);
    const listOfSchedules = this.props.schedules.map(schedule => ({
      label: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`,
      value: `${schedule.daysOff} ${schedule.fromHours} ${schedule.fromMinutes} - ${schedule.untilHours} ${schedule.untilMinutes}`
    }));
    const listOfSupervisors = this.props.supervisors.map(supervisor => ({
      label: supervisor,
      value: supervisor
    }));
    const listOfOperators = this.props.operators.map(operator => ({
      label: `${operator.name} ${operator.aNumber}`,
      value: `${operator.name} ${operator.aNumber}`
    }));

    return (
      <div className="p-grid p-fluid ">
        <SupervisorNav />
        <div className="p-col-12 p-lg-6">
          <div className="card card-w-title">
            <h1>Edit An Operator</h1>
            <div className="card card-w-title">
              <h1> I Need to Edit This Operator:</h1>

              <div className="p-grid">
                <Dropdown
                  options={listOfOperators}
                  value={this.state.operator}
                  onChange={event => this.setState({ operator: event.value })}
                  autoWidth={false}
                />
                <div>
                  <h1>To Reflect These Changes:</h1>
                </div>
                <div className="p-grid form-group" onSubmit={this.handleSubmit}>
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
                        onChange={e =>
                          this.setState({ aNumber: e.target.value })
                        }
                      />
                      <label>A#</label>
                    </span>
                  </div>

                  <div className="p-col-12 p-lg-6">
                    <div>
                      <h1>Supervisor</h1>
                      <Dropdown
                        options={listOfSupervisors}
                        value={this.state.supervisor}
                        onChange={event =>
                          this.setState({ supervisor: event.value })
                        }
                        autoWidth={false}
                      />
                    </div>
                  </div>
                  <div className="p-col-12 p-lg-6">
                    <div>
                      <h1>Schedule</h1>
                      <Dropdown
                        options={listOfSchedules}
                        value={this.state.schedule}
                        onChange={event =>
                          this.setState({ schedule: event.value })
                        }
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
    schedules: state.schedules.all.map(schedule => schedule)
  };
};
export default connect(mapStateToProps, { editOperator })(EditAnOperator);
