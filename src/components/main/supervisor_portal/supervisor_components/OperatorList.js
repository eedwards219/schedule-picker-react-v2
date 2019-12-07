import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import logo from "../../../../logo.svg";
import OperatorListItem from "./OperatorListItem";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";

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
    let searchOperators = this.props.operators
      .filter(operator => operator.name.includes(this.state.filterPhrase))
      .filter(operator => this.props.operators.length)
      .map(operator => (
        <OperatorListItem key={operator.id} operator={operator} />
      ));
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h2>Search For An Employee Below</h2>

            <InputText
              placeholder="Keyword"
              type="text"
              onChange={this.handleChange}
              name="filterPhrase"
              fluid
              icon="search"
              iconPosition="left"
              placeholder="Search Here"
              className="card2 block"
            />
            {searchOperators}
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
