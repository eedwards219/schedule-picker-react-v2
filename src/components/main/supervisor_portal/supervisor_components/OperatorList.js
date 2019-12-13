import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import logo from "../../../../logo.svg";
import OperatorListItem from "./OperatorListItem";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

class OperatorList extends Component {
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
    const listOfOperators = this.props.operators.map(operator => ({
      name: `${operator.name}`,
      Value: `${operator.name}`,
      aNumber: `${operator.aNumber}`,
      Value: `${operator.aNumber}`,
      schedule: `${operator.schedule}`,
      Value: `${operator.schedule}`,
      supervisor: `${operator.supervisor}`,
      Value: `${operator.supervisor}`
    }));

    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            {/* <h1>DataTable</h1> */}
            <DataTable
              value={listOfOperators}
              paginatorPosition="both"
              selectionMode="single"
              header="All Operators"
              paginator={true}
              rows={25}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="name" header="Name" sortable={true} />
              <Column field="aNumber" header="A#" sortable={true} />

              <Column field="schedule" header="Schedule" sortable={true} />
              <Column field="supervisor" header="Supervisor" sortable={true} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    operators: state.operators.all.filter(operator => operator.id),
    supervisors: state.supervisors.all.filter(supervisor => supervisor.id),
    schedules: state.schedules.all.filter(schedule => schedule.id)
  };
};
export default connect(mapStateToProps)(OperatorList);

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
