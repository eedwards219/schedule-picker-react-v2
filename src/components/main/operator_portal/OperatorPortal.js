import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import OperatorNav from "./operator_components/OperatorNav";
import ScheduleList from "../supervisor_portal/supervisor_components/ScheduleList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PickYourSchedule from "./operator_components/PickYourSchedule";

export default class OperatorPortal extends Component {
  render() {
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
      <div className="p-grid">
        <PickYourSchedule />
        {/* <Route path="/pick" component={PickYourSchedule} /> */}

        <div className="p-col-12">
          <div className="p-grid">
            <ScheduleList />
          </div>
        </div>
      </div>
    );
  }
}
