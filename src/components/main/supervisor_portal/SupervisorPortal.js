import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import logo from "../../../logo.svg";
import { TabMenu } from "primereact/tabmenu";
import AddASchedule from "./supervisor_components/AddASchedule";
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
          url: "/supervisor/editoperator"
        },
        {
          label: "Remove an Operator",
          icon: "pi pi-fw pi-user-minus",
          url: "/supervisor/removeoperator"
        },
        {
          label: "Add a Schedule",
          icon: "pi pi-fw pi-calendar-plus",
          url: "/supervisor/addschedule"
        },
        {
          label: "Edit a Schedule",
          icon: "pi pi-fw pi-pencil",
          url: "/supervisor/editschedule"
        },
        {
          label: "Remove a Schedule",
          icon: "pi pi-fw pi-calendar-minus",
          url: "/supervisor/removeschedule"
        },
        { label: "Settings", icon: "pi pi-fw pi-cog" }
      ]
    };
  }

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="p-grid">
            {/* <MyTeam /> */}
            {/* <Route path="/supervisor/sl" component={ScheduleList} />
            <Route path="/supervisor/ol" component={OperatorList} /> */}
            <Route path="/supervisor/addoperator" component={AddAnOperator} />
            <Route
              path="/supervisor/addsupervisor"
              component={AddASupervisor}
            />
            <Route path="/supervisor/addschedule" component={AddASchedule} />
            <Route path="/supervisor/editoperator" component={EditAnOperator} />
            <Route path="/supervisor/editschedule" component={EditASchedule} />
            <Route
              path="/supervisor/editsupervisor"
              component={EditASupervisor}
            />
            <Route
              path="/supervisor/removeschedule"
              component={RemoveASchedule}
            />
            <Route
              path="/supervisor/removeoperator"
              component={RemoveAnOperator}
            />
            <Route
              path="/supervisor/removesupervisor"
              component={RemoveASupervisor}
            />
            <Route path="/supervisor/finalize" component={FinalizeSchedule} />
          </div>
        </div>
      </div>
    );
  }
}
