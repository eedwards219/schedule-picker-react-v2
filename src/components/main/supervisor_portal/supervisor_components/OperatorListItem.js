import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { connect } from "react-redux";

export class OperatorListItem extends Component {
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

    console.log("OLIprops", this.props);
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
      <div>
        <div className="content-section implementation">
          <Card
            title={this.props.operator.name}
            subTitle="Subtitle"
            style={{ width: "360px" }}
            className="ui-card-shadow card block"
            footer={footer}
            // header={header}
          >
            {/* <div>{operatorSchedule}</div> */}
          </Card>
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
export default connect(mapStateToProps)(OperatorListItem);
