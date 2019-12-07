import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import logo from "../../../logo.svg";
import { TabMenu } from "primereact/tabmenu";
import { AddASchedule } from "./supervisor_components/AddASchedule";
import ScheduleList from "./supervisor_components/ScheduleList";
import OperatorList from "./supervisor_components/OperatorList";
import SupervisorNav from "./supervisor_components/SupervisorNav";

export default class SupervisorPortal extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
        {
          label: "Add An Operator",
          icon: "pi pi-fw pi-user-plus",
          url: "/addoperator"
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
          </div>
        </div>
      </div>
    );
  }
}
