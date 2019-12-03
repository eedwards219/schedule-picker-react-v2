import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { connect } from "react-redux";

export class ScheduleListItem extends Component {
  render() {
    // let operatorSchedule = this.props.schedules.filter(
    //   schedule => schedule.id === this.props.operator.id
    // );
    //   .filter(
    //     individualSchedule => individualSchedule.id === this.props.operator.id
    //   );
    // let operatorSchedule = this.props.schedules.filter(thisSchedule =>
    //   thisSchedule.filter(
    //     thisSchedule => thisSchedule.id === this.props.operator.id
    //   )
    // );

    console.log("SLIprops", this.props);
    // console.log("opsched", operatorSchedule);

    const header = (
      <img alt="Card" src="showcase/resources/demo/images/usercard.png" />
    );
    const footer = (
      <span>
        <Button label="Save" icon="pi pi-check" />
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-secondary"
        />
      </span>
    );
    return (
      <div className="p-grid" fluid>
        <div className="p-col-12" fluid>
          {/* <div
            className="card"
            title={this.props.schedule.daysOff}
            subTitle={this.props.schedule.time}
            footer={footer}
            header={header}
          > */}
          <Card
            title={this.props.schedule.daysOff}
            subTitle={this.props.schedule.time}
            style={{ width: "360px" }}
            className="ui-card-shadow card"
            // footer={footer}
            // header={header}
            // className="p-col-10"
            fluid
          ></Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    operators: state.operators.all.filter(operator => operator.id),
    supervisors: state.supervisors.all.filter(supervisor => supervisor.id),
    schedules: state.schedules.all.filter(schedule => schedule.operators)
    //   .filter(
    //     individualSchedule => individualSchedule.id === this.props.operator.id
    //   )
  };
};
export default connect(mapStateToProps)(ScheduleListItem);
