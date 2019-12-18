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
import OperatorNav from "./OperatorNav";
import { PickList } from "primereact/picklist";

export class PickYourSchedule extends Component {
  constructor() {
    super();
    this.state = {
      source: [],
      target: []
    };
    // this.scheduleservice = new ScheduleService();
    this.scheduleTemplate = this.scheduleTemplate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.scheduleTemplateTwo = this.listOfSchedules.bind(this);
  }
  componentDidMount() {
    this.listOfSchedules().then(data => this.setState({ source: data }));
  }

  onChange(event) {
    this.setState({
      source: event.source,
      target: event.target
    });
  }

  scheduleTemplate(schedule) {
    // var imageSource =
    //   "https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/" +
    //   schedule.brand +
    //   ".png";
    return (
      <div className="p-clearfix">
        <img
          //   src={imageSource}
          alt={schedule.brand}
          style={{
            display: "inline-block",
            margin: "2px 0 2px 2px",
            width: 48
          }}
        />
        <div
          style={{ fontSize: "14px", float: "right", margin: "15px 5px 0 0" }}
        >
          {schedule.daysOff}:{schedule.fromHours}
          {schedule.fromMinutes} - {schedule.untilHours}
          {schedule.untilMinutes}
        </div>
      </div>
    );
  }

  render() {
    console.log("pickstate", this.state);
    console.log("pickprops", this.props);
    const listOfSchedules = this.props.schedules.map(schedule => ({
      daysOff: `${schedule.daysOff}`,
      fromHours: `${schedule.fromHours}`,
      fromMinutes: `${schedule.fromMinutes}`,
      untilHours: `${schedule.untilHours}`,
      untilMinutes: `${schedule.untilMinutes}`
    }));

    return (
      <div className="p-grid p-fluid ">
        <div>
          <div className="card card-w-title">
            <h1>Pick Your Schedule</h1>
            <PickList
              source={this.state.source}
              target={this.state.target}
              itemTemplate={this.scheduleTemplate}
              sourceHeader="Available"
              targetHeader="Selected"
              responsive={true}
              sourceStyle={{ height: "300px" }}
              targetStyle={{ height: "300px" }}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

// class ScheduleService {
//   constructor() {
//     this.data = [
//       { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
//       { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
//       { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
//       { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
//       { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
//       { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
//       { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
//       { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
//       { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
//       { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" }
//     ];
//   }
//   getCarsSmall() {
//     return this.data;
//   }
// }

const mapStateToProps = state => {
  return {
    operators: state.operators.all.filter(operator => operator.id),
    // supervisors: state.supervisors.all.filter(supervisor => supervisor.name),
    supervisors: state.supervisors.all.map(supervisor => supervisor.name),
    // schedules: state.schedules.all.map(schedule => schedule)

    schedules: state.schedules.all.map(schedule => schedule)
  };
};
export default connect(mapStateToProps, { addOperator })(PickYourSchedule);
