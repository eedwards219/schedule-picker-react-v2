import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { connect } from "react-redux";
// import logo from "../../../../logo.svg";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { addOperator } from "../../../../store/operators/actions";

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
      checkboxValue: []
    };
  }
  onCheckboxChange(event) {
    let selected = [...this.state.checkboxValue];
    if (event.checked) selected.push(event.value);
    else selected.splice(selected.indexOf(event.value), 1);

    this.setState({ checkboxValue: selected });
  }

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
    // console.log("addstate", this.state);
    // console.log("supervisors", this.props.supervisors);
    console.log("schedules", this.props.schedules);

    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-lg-6">
          <div className="p-col-12 p-lg-12">
            <div className="card card-w-title">
              <h1>Days Off</h1>

              <div className="p-grid">
                <div className="p-col-12 p-md-4">
                  <Checkbox
                    value="Sunday"
                    inputId="cb7"
                    onChange={this.onCheckboxChange}
                    checked={this.state.checkboxValue.indexOf("Sunday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Monday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Tuesday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Wednesday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Thursday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Friday") > -1}
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
                    checked={this.state.checkboxValue.indexOf("Saturday") > -1}
                  />
                  <label htmlFor="cb2" className="p-checkbox-label">
                    Saturday
                  </label>
                </div>

                <div className="p-col-12">
                  <h1>Times</h1>
                  From
                  <Calendar
                    placeholder="Time"
                    timeOnly={true}
                    showTime={true}
                    value={this.state.date4}
                    onChange={e => this.setState({ date4: e.value })}
                  />
                </div>
                <div className="p-col-12">
                  to
                  <Calendar
                    placeholder="Time"
                    timeOnly={true}
                    showTime={true}
                    value={this.state.date}
                    onChange={e => this.setState({ date4: e.value })}
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
export default connect(mapStateToProps)(AddASchedule);
