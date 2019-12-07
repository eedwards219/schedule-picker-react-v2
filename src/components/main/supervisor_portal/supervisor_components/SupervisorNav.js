import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import logo from "../../../logo.svg";
import { TabMenu } from "primereact/tabmenu";

export default class SupervisorNav extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null,
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", url: "/supervisor" },
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
      <div>
        <TabMenu
          model={this.state.items}
          activeItem={this.state.activeItem}
          onTabChange={e => this.setState({ activeItem: e.value })}
        />
      </div>
    );
  }
}
