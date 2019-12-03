import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

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
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Card</h1>
            <p>Card is a flexible container component.</p>
          </div>
        </div>

        <div className="content-section implementation">
          <Card title="Simple Card" style={{ width: "360px" }}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </Card>

          <br />
          <br />

          <Card
            title="Advanced Card"
            subTitle="Subtitle"
            style={{ width: "360px" }}
            className="ui-card-shadow"
            footer={footer}
            header={header}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
