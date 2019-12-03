import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "babel-polyfill";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AppWrapper></AppWrapper>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();