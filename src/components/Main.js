import React, { Component } from "react";
// import { Button } from "primereact/button";
// import logo from "../../logo.svg";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
// import "../../App.css";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to the Schedule Picker</h2>
        </div>
        <div className="content-section implementation ">
          <div>
            <Link to={"/supervisor"}>
              <Card className="card block">
                <h1>Supervisors</h1>
              </Card>
            </Link>
            <Link to={"/operator"}>
              <Card className="card block">
                <h1>Operators</h1>
              </Card>
            </Link>
          </div>
          <div className="App-intro">
            {/* <Button label="Click" icon="pi pi-check" onClick={this.increment} /> */}

            {/* <p>Number of Clicks: {this.state.count}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
