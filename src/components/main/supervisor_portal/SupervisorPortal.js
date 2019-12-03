import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import logo from "../../../logo.svg";
import { TabMenu } from "primereact/tabmenu";

export default class SupervisorPortal extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home" },
        { label: "Add An Operator", icon: "pi pi-fw pi-user-plus" },
        { label: "Edit An Operator", icon: "pi pi-fw pi-pencil" },
        { label: "Remove an Operator", icon: "pi pi-fw pi-user-minus" },
        { label: "Add a Schedule", icon: "pi pi-fw pi-calendar-plus" },
        { label: "Edit a Schedule", icon: "pi pi-fw pi-pencil" },
        { label: "Remove a Schedule", icon: "pi pi-fw pi-calendar-minus" },
        { label: "Settings", icon: "pi pi-fw pi-cog" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to the Schedule Picker</h2>
        </div>
        <div>
          <div className="content-section introduction">
            <div className="feature-intro"></div>
          </div>

          <div className="content-section implementation">
            <TabMenu model={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}
