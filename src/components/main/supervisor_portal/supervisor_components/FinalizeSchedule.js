import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "primereact/button";

import SupervisorNav from "./SupervisorNav";

export class FinalizeSchedule extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <Button
              label="Click Here to Finalize the Schedule"
              type="submit"
              value="Submit"
              style={{ margin: 50, padding: 50, width: "auto" }}
              className="indigo-btn btn"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(FinalizeSchedule);
