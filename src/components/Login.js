import React, { Component } from "react";
// import { Button } from "primereact/button";
// import logo from "../../logo.svg";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
// import "../../App.css";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class Login extends Component {
  render() {
    return (
      <div className="login-body">
        <div className="login-panel p-fluid">
          <div className="login-panel-header">
            <img
              src="assets/layout/images/logo-slim.png"
              alt="serenity-react"
            />
          </div>
          <div className="login-panel-content">
            <div className="p-grid">
              <div className="p-col-12">
                <h1>Sign-in to Schedule Picker</h1>
              </div>
              <div className="p-col-12">
                <span className="md-inputfield">
                  <InputText />
                  <label>Username</label>
                </span>
              </div>
              <div className="p-col-12">
                <span className="md-inputfield">
                  <InputText />
                  <label>Password</label>
                </span>
              </div>
              <div className="p-col-12">
                <Button
                  label="Sign In"
                  icon="pi-md-person"
                  onClick={() => {
                    window.location = "/#";
                  }}
                />
              </div>
              <div className="p-col-12">
                Don't have an account? <a href="/#">Sign Up</a> now.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// class Main extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h2>Welcome to the Schedule Picker</h2>
//         </div>
//         <div className="content-section implementation ">
//           <div>
//             <Link to={"/supervisor"}>
//               <Card className="card block p-col-4">
//                 <h1>Supervisors</h1>
//               </Card>
//             </Link>
//             <Link to={"/operator"}>
//               <Card className="card block p-col-4">
//                 <h1>Operators</h1>
//               </Card>
//             </Link>
//           </div>
//           <div className="App-intro">
//             {/* <Button label="Click" icon="pi pi-check" onClick={this.increment} /> */}

//             {/* <p>Number of Clicks: {this.state.count}</p> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Main;
