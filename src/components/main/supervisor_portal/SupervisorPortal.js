import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import logo from "../../../logo.svg";
import { TabMenu } from "primereact/tabmenu";
import { AddASchedule } from "./supervisor_components/AddASchedule";
import ScheduleList from "./supervisor_components/ScheduleList";
import OperatorList from "./supervisor_components/OperatorList";
import SupervisorNav from "./supervisor_components/SupervisorNav";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditAnOperator from "./supervisor_components/EditAnOperator";
import EditASchedule from "./supervisor_components/EditASchedule";
import RemoveAnOperator from "./supervisor_components/RemoveAnOperator";
import RemoveASchedule from "./supervisor_components/RemoveASchedule";
import FinalizeSchedule from "./supervisor_components/FinalizeSchedule";
import AddASupervisor from "./supervisor_components/AddASupervisor";
import EditASupervisor from "./supervisor_components/EditASupervisor";
import RemoveASupervisor from "./supervisor_components/RemoveASupervisor";
import AddAnOperator from "./supervisor_components/AddAnOperator";

export default class SupervisorPortal extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
        {
          label: "Add An Operator",
          icon: "pi pi-fw pi-user-plus",
          url: "/supervisor/addoperator"
        },
        {
          label: "Edit An Operator",
          icon: "pi pi-fw pi-pencil",
          url: "/editoperator"
        },
        {
          label: "Remove an Operator",
          icon: "pi pi-fw pi-user-minus",
          url: "/removeoperator"
        },
        {
          label: "Add a Schedule",
          icon: "pi pi-fw pi-calendar-plus",
          url: "/addschedule"
        },
        {
          label: "Edit a Schedule",
          icon: "pi pi-fw pi-pencil",
          url: "/editschedule"
        },
        {
          label: "Remove a Schedule",
          icon: "pi pi-fw pi-calendar-minus",
          url: "/removeschedule"
        },
        { label: "Settings", icon: "pi pi-fw pi-cog" }
      ]
    };
  }

  render() {
    return (
      <div className="p-grid">
        <SupervisorNav />

        <div className="p-col-12">
          <div className="p-grid">
            <OperatorList />
            <ScheduleList />

            <Route path="/sl" component={ScheduleList} />
            <Route path="/ol" component={OperatorList} />
            <Route path="/addoperator" component={AddAnOperator} />
            <Route path="/addsupervisor" component={AddASupervisor} />
            <Route path="/addschedule" component={AddASchedule} />
            <Route path="/editoperator" component={EditAnOperator} />
            <Route path="/editschedule" component={EditASchedule} />
            <Route path="/editsupervisor" component={EditASupervisor} />
            <Route path="/removeschedule" component={RemoveASchedule} />
            <Route path="/removeoperator" component={RemoveAnOperator} />
            <Route path="/removesupervisor" component={RemoveASupervisor} />
          </div>
        </div>
      </div>
    );
  }
}
