import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { addSchedule } from "../../../../store/schedules/actions";
import SupervisorNav from "./SupervisorNav";
import { MultiSelect } from "primereact/multiselect";

export class AddASchedule extends Component {
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
    this.onCheckboxChange = this.onCheckboxChange.bind(this);

    this.state = {
      daysOff: [],
      fromHours: "",
      fromMinutes: "",
      untilHours: "",
      untilMinutes: "",
      hourOptions: [
        { label: "00", value: "00" },
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
        { label: "04", value: "04" },
        { label: "05", value: "05" },
        { label: "06", value: "06" },
        { label: "07", value: "07" },
        { label: "08", value: "08" },
        { label: "09", value: "09" },
        { label: "10", value: "10" },
        { label: "11", value: "11" },
        { label: "12", value: "12" },
        { label: "13", value: "13" },
        { label: "14", value: "14" },
        { label: "15", value: "15" },
        { label: "16", value: "16" },
        { label: "16", value: "16" },
        { label: "17", value: "17" },
        { label: "18", value: "18" },
        { label: "19", value: "16" },
        { label: "20", value: "20" },
        { label: "21", value: "21" },
        { label: "22", value: "22" },
        { label: "23", value: "23" }
      ],
      minuteOptions: [
        { label: "00", value: "00" },
        { label: "15", value: "15" },
        { label: "30", value: "30" },
        { label: "45", value: "45" }
      ]
    };
  }
  onCheckboxChange(event) {
    let selected = [...this.state.daysOff];
    if (event.checked) selected.push(event.value);
    else selected.splice(selected.indexOf(event.value), 1);

    this.setState({ daysOff: selected });
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("addSched", this.state);
    this.props.addSchedule({
      daysOff: this.state.daysOff,
      timeFrom: this.state.timeFrom,
      timeUntil: this.state.timeUntil
    });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.state.addOperator({
  //     name: this.state.name,
  //     serialNumber: this.state.serialNumber,
  //     hireDate: this.state.hireDate,
  //     supervisor: this.state.supervisor,
  //     schedule: this.state.schedule
  //   });
  //   // this.setState({ blankForm: " " });
  // };

  render() {
    console.log("addprops", this.props);
    console.log("addstate", this.state);
    // console.log("supervisors", this.props.supervisors);
    // console.log("schedules", this.props.schedules);

    return (
      <div className="p-grid p-fluid">
        <SupervisorNav />
        <div className="p-col-12 p-lg-6">
          <div className="p-col-12 p-lg-12">
            <div className="card card-w-title">
              <h1>Add a Schedule</h1>
              <div className="p-grid form-group" onSubmit={this.handleSubmit}>
                <h1>Days Off</h1>

                <div className="p-grid">
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Sunday"
                      inputId="cb7"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Sunday") > -1}
                    />
                    <label htmlFor="cb7" className="p-checkbox-label">
                      Sunday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Monday"
                      inputId="cb6"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Monday") > -1}
                    />
                    <label htmlFor="cb6" className="p-checkbox-label">
                      Monday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Tuesday"
                      inputId="cb5"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Tuesday") > -1}
                    />
                    <label htmlFor="cb5" className="p-checkbox-label">
                      Tuesday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Wednesday"
                      inputId="cb4"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Wednesday") > -1}
                    />
                    <label htmlFor="cb4" className="p-checkbox-label">
                      Wednesday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Thursday"
                      inputId="cb3"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Thursday") > -1}
                    />
                    <label htmlFor="cb3" className="p-checkbox-label">
                      Thursday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Friday"
                      inputId="cb2"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Friday") > -1}
                    />
                    <label htmlFor="cb2" className="p-checkbox-label">
                      Friday
                    </label>
                  </div>
                  <div className="p-col-12 p-md-4">
                    <Checkbox
                      value="Saturday"
                      inputId="cb1"
                      onChange={this.onCheckboxChange}
                      checked={this.state.daysOff.indexOf("Saturday") > -1}
                    />
                    <label htmlFor="cb2" className="p-checkbox-label">
                      Saturday
                    </label>
                  </div>
                </div>

                <div className="p-col-12 p-md-6">
                  <h1>Times</h1>

                  <div>
                    From
                    <Dropdown
                      options={this.state.hourOptions}
                      value={this.state.fromHours}
                      onChange={event =>
                        this.setState({ fromHours: event.value })
                      }
                      autoWidth={false}
                    />
                    <Dropdown
                      options={this.state.minuteOptions}
                      value={this.state.fromMinutes}
                      onChange={event =>
                        this.setState({ fromMinutes: event.value })
                      }
                      autoWidth={false}
                    />
                  </div>
                  <div>
                    to
                    <div>
                      <Dropdown
                        options={this.state.hourOptions}
                        value={this.state.untilHours}
                        onChange={event =>
                          this.setState({ untilHours: event.value })
                        }
                        autoWidth={false}
                      />
                    </div>
                    <Dropdown
                      options={this.state.minuteOptions}
                      value={this.state.untilMinutes}
                      onChange={event =>
                        this.setState({ untilMinutes: event.value })
                      }
                      autoWidth={false}
                    />
                  </div>
                  <Button
                    label="Submit"
                    type="submit"
                    value="Submit"
                    style={{ margin: 5, width: "auto" }}
                    className="indigo-btn btn"
                  />
                </div>
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
    supervisors: state.supervisors.all.find(supervisor => supervisor.name),
    schedules: state.schedules.all
      // .find(schedule => schedule.id)
      .filter(schedule => schedule.length)
    // .map(schedule => schedule)
  };
};
export default connect(mapStateToProps, { addSchedule })(AddASchedule);
