import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import logo from "../../../../logo.svg";
import OperatorListItem from "./OperatorListItem";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import ScheduleListItem from "./ScheduleListItem";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { fetchAllSchedules } from "../../../../store/schedules/actions";

class ScheduleList extends Component {
  state = {
    filterPhrase: "",
    filterBy: "name",
    dataTableValue: []
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  // componentDidMount() {
  //   this.props
  //     .fetchAllOperators()
  //     .then(data => this.setState({ dataTableValue: data.data }));
  // }

  render() {
    console.log("fetchAllOperators", this.fetchAllOperators);

    // let showSchedules = this.props.schedules
    //   .filter(schedule => schedule.daysOff.includes(this.state.filterPhrase))
    //   .filter(schedule => this.props.schedules.length)
    //   .map(schedule => (
    //     <ScheduleListItem key={schedule.id} schedule={schedule} />
    //   ));

    const listOfSchedules = this.props.schedules.map(schedule => ({
      dataTableValue: [schedule.daysOff]
      // value: `${schedule.daysOff} ${schedule.time}`
    }));
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            {/* <h1>DataTable</h1> */}
            <DataTable
              value={listOfSchedules}
              paginatorPosition="both"
              selectionMode="single"
              header="All Schedules"
              paginator={true}
              rows={25}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="Days Off" header="Days Off" sortable={true} />
              <Column field="Times" header="Times" sortable={true} />
            </DataTable>
          </div>
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
export default connect(mapStateToProps, { fetchAllSchedules })(ScheduleList);

{
  /* <div className="p-col-12">
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
          </div>
        </div> */
}
