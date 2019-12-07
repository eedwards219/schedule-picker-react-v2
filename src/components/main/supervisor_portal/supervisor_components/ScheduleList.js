import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import logo from "../../../../logo.svg";
import OperatorListItem from "./OperatorListItem";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import ScheduleListItem from "./ScheduleListItem";

class ScheduleList extends Component {
  state = {
    filterPhrase: "",
    filterBy: "name"
  };
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    let showSchedules = this.props.schedules
      .filter(schedule => schedule.daysOff.includes(this.state.filterPhrase))
      .filter(schedule => this.props.schedules.length)
      .map(schedule => (
        <ScheduleListItem key={schedule.id} schedule={schedule} />
      ));
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h2>Search For A Schedule Below</h2>

            <InputText
              placeholder="Keyword"
              type="text"
              onChange={this.handleChange}
              name="filterPhrase"
              icon="search"
              iconPosition="left"
              placeholder="Search Here"

              // className="card "
            />
            {showSchedules}
          </div>{" "}
        </div>
      </div>
    );
  }
}
//   <div className="App-header">
//     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//     <h2>Search By Weekend Days</h2>
//     <div>
//       <div className="p-grid p-fluid">
//         <div className="p-col-12 p-md-4">
//           <div className="p-inputgroup"></div>
//         </div>
//         <div>
//           {/* <Button label="Search" className="card2 block" /> */}
//           <InputText
//             placeholder="Keyword"
//             type="text"
//             onChange={this.handleChange}
//             name="filterPhrase"
//             fluid
//             icon="search"
//             iconPosition="left"
//             placeholder="Search Here"
//             // className="card "
//           />
//         </div>
//       </div>
//     </div>
//     {showSchedules}
//   </div>
// );

const mapStateToProps = state => {
  return {
    operators: state.operators.all.filter(operator => operator.id),
    supervisors: state.supervisors.all.filter(supervisor => supervisor.id),
    schedules: state.schedules.all.filter(schedule => schedule.id)
  };
};
export default connect(mapStateToProps)(ScheduleList);
