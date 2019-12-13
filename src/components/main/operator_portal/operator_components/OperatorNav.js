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
        { label: "Home", icon: "pi pi-fw pi-home", url: "/operator" },
        {
          label: "Pick Your Schedule",
          icon: "pi pi-fw pi-calendar",
          url: "/pick"
        },
        {
          label: "My Team",
          icon: "pi pi-fw pi-users",
          url: "/myteam"
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
