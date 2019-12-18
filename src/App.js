import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppBreadcrumb } from "./AppBreadcrumb";
import DomHandler from "primereact/components/utils/DomHandler";
import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import { withRouter } from "react-router";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "./ripple.js";
import "./App.css";
import Login from "./components/Login";
import supervisorPortal from "./components/main/supervisor_portal/SupervisorPortal";
import operatorPortal from "./components/main/operator_portal/OperatorPortal";
import OperatorListItem from "./components/main/supervisor_portal/supervisor_components/OperatorListItem";
import OperatorList from "./components/main/supervisor_portal/supervisor_components/OperatorList";
import AddAnOperator from "./components/main/supervisor_portal/supervisor_components/AddAnOperator";
import { fetchAllOperators } from "./store/operators/actions";
import { fetchAllSupervisors } from "./store/supervisors/actions";
import { fetchAllSchedules } from "./store/schedules/actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddASchedule from "./components/main/supervisor_portal/supervisor_components/AddASchedule";
import ScheduleList from "./components/main/supervisor_portal/supervisor_components/ScheduleList";
import ScheduleListItem from "./components/main/supervisor_portal/supervisor_components/ScheduleListItem";
import EditAnOperator from "./components/main/supervisor_portal/supervisor_components/EditAnOperator";
import EditASchedule from "./components/main/supervisor_portal/supervisor_components/EditASchedule";
import createBrowserHistory from "history/createBrowserHistory";
import RemoveAnOperator from "./components/main/supervisor_portal/supervisor_components/RemoveAnOperator";
import RemoveASchedule from "./components/main/supervisor_portal/supervisor_components/RemoveASchedule";
import PickYourSchedule from "./components/main/operator_portal/operator_components/PickYourSchedule";
import FinalizeSchedule from "./components/main/supervisor_portal/supervisor_components/FinalizeSchedule";
import AddASupervisor from "./components/main/supervisor_portal/supervisor_components/AddASupervisor";
import EditASupervisor from "./components/main/supervisor_portal/supervisor_components/EditASupervisor";
import RemoveASupervisor from "./components/main/supervisor_portal/supervisor_components/RemoveASupervisor";

class App extends Component {
  componentDidMount() {
    this.props.fetchAllOperators();
    this.props.fetchAllSupervisors();
    // this.props.addToCart();
    // fetchAllMessagesByUserId(this.props.loggedInUser.id);
    this.props.fetchAllSchedules();
  }
  constructor() {
    super();
    this.state = {
      activeTopbarItem: null,
      layoutMode: "horizontal",
      mobileMenuActive: null,
      topbarMenuActive: null,
      currentRoute: null,
      menuActive: false
    };

    this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onTopbarMobileMenuButtonClick = this.onTopbarMobileMenuButtonClick.bind(
      this
    );
    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onSidebarMouseEnter = this.onSidebarMouseEnter.bind(this);
    this.onSidebarMouseLeave = this.onSidebarMouseLeave.bind(this);
    this.onToggleMenuClick = this.onToggleMenuClick.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (
      !this.menuClick &&
      !this.menuButtonClick &&
      this.state.mobileMenuActive
    ) {
      this.setState({ mobileMenuActive: false });
    }

    if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
      this.setState({
        activeTopbarItem: null,
        topbarMenuActive: false
      });
    }

    if (!this.menuClick) {
      if (this.isHorizontal() || this.isOverlay()) {
        this.setState({
          menuActive: false
        });
      }
    }

    this.menuClick = false;
    this.menuButtonClick = false;
    this.topbarMenuClick = false;
    this.topbarMenuButtonClick = false;
  }

  onTopbarItemClick(event) {
    this.topbarMenuClick = true;
    if (this.state.activeTopbarItem === event.item)
      this.setState({ activeTopbarItem: null });
    else this.setState({ activeTopbarItem: event.item });

    event.originalEvent.preventDefault();
  }

  onMenuButtonClick(event) {
    this.menuButtonClick = true;

    if (this.isMobile()) {
      this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
    }

    event.preventDefault();
  }

  onTopbarMobileMenuButtonClick(event) {
    this.topbarMenuButtonClick = true;
    this.setState({ topbarMenuActive: !this.state.topbarMenuActive });
    event.preventDefault();
  }

  onToggleMenuClick(event) {
    this.setState({
      layoutMode: this.state.layoutMode !== "static" ? "static" : "overlay"
    });
  }

  onSidebarClick(event) {
    this.menuClick = true;
  }

  onSidebarMouseEnter(event) {
    if (this.sidebarTimeout) {
      clearTimeout(this.sidebarTimeout);
    }
    DomHandler.addClass(this.sidebar, "layout-sidebar-active");
  }

  onSidebarMouseLeave(event) {
    this.sidebarTimeout = setTimeout(() => {
      DomHandler.removeClass(this.sidebar, "layout-sidebar-active");
    }, 250);
  }

  onRootMenuItemClick(event) {
    this.setState({
      menuActive: !this.state.menuActive
    });
  }

  onMenuItemClick(event) {
    if (!event.item.items && this.isHorizontal()) {
      this.setState({
        menuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      { label: "Dashboard", icon: "dashboard", to: "/supervisor" },
      {
        label: "Operators",
        icon: "person",
        items: [
          {
            label: "Add An Operator",
            to: "/supervisor/addoperator",
            icon: "person_add"
          },

          {
            label: "Edit An Operator",
            to: "/supervisor/editoperator",
            icon: "edit"
          },
          {
            label: "Remove An Operator",
            to: "/supervisor/removeoperator",
            icon: "remove_circle_outline"
          }
        ]
      },
      {
        label: "Supervisors",
        icon: "supervisor_account",
        items: [
          {
            label: "Add A Supervisor",
            to: "/supervisor/addsupervisor",
            icon: "person_add"
          },

          {
            label: "Edit A Supervisor",
            to: "/supervisor/editsupervisor",
            icon: "edit"
          },
          {
            label: "Remove A Supervisor",
            to: "/supervisor/removesupervisor",
            icon: "remove_circle_outline"
          }
        ]
      },
      {
        label: "Schedules",
        icon: "schedule",
        items: [
          {
            label: "Add A Schedule",
            to: "/supervisor/addschedule",
            icon: "add"
          },

          {
            label: "Edit A Schedule",
            to: "/supervisor/editschedule",
            icon: "edit"
          },
          {
            label: "Remove A Schedule",
            to: "/supervisor/removeschedule",
            icon: "remove_circle_outline"
          },
          {
            label: "Finalize A Schedule",
            to: "/supervisor/finalize",
            icon: "check"
          }
        ]
      }
    ];
  }

  changeTheme(theme) {
    this.changeStyleSheetUrl("theme-css", theme, "theme");
  }

  changeLayout(theme) {
    this.changeStyleSheetUrl("layout-css", theme, "layout");
  }

  changeStyleSheetUrl(id, value, prefix) {
    let element = document.getElementById(id);
    let urlTokens = element.getAttribute("href").split("/");
    urlTokens[urlTokens.length - 1] = prefix + "-" + value + ".css";
    let newURL = urlTokens.join("/");
    element.setAttribute("href", newURL);
  }

  isMobile() {
    return window.innerWidth <= 1024;
  }

  isTablet() {
    let width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isOverlay() {
    return this.state.layoutMode === "overlay";
  }

  isHorizontal() {
    return this.state.layoutMode === "horizontal";
  }

  render() {
    let wrapperClass = classNames("layout-wrapper", {
      "layout-wrapper-static": this.state.layoutMode === "static",
      "layout-wrapper-active": this.state.mobileMenuActive,
      "layout-menu-horizontal": this.state.layoutMode === "horizontal"
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.darkMenu
    });
    const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);
    let History = createBrowserHistory();

    return (
      <Router>
        <div className={wrapperClass} onClick={this.onWrapperClick}>
          <div
            ref={el => (this.sidebar = el)}
            className={sidebarClassName}
            onClick={this.onSidebarClick}
            onMouseEnter={this.onSidebarMouseEnter}
            onMouseLeave={this.onSidebarMouseLeave}
          >
            <div className="sidebar-logo">
              <button className="p-link">
                <img alt="logo" src="assets/layout/images/logo-slim.png" />
                <span className="app-name">SERENITY</span>
              </button>
              <button
                className="p-link sidebar-anchor"
                title="Toggle Menu"
                onClick={this.onToggleMenuClick}
              ></button>
            </div>

            <ScrollPanel
              ref={el => (this.layoutMenuScroller = el)}
              style={{ height: "100%" }}
            >
              <div className="layout-menu-container">
                <AppMenu
                  model={this.menu}
                  onRootMenuItemClick={this.onRootMenuItemClick}
                  layoutMode={this.state.layoutMode}
                  active={this.state.menuActive}
                  onMenuItemClick={this.onMenuItemClick}
                />
              </div>
            </ScrollPanel>
          </div>
          <div className="layout-main">
            <AppTopbar
              layoutMode={this.state.layoutMode}
              activeTopbarItem={this.state.activeTopbarItem}
              onTopbarItemClick={this.onTopbarItemClick}
              onMenuButtonClick={this.onMenuButtonClick}
              onTopbarMobileMenuButtonClick={this.onTopbarMobileMenuButtonClick}
              topbarMenuActive={this.state.topbarMenuActive}
            />

            <AppBreadCrumbWithRouter />
            <div className="layout-content">
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/supervisor" component={supervisorPortal} />
                <Route path="/operator" component={operatorPortal} />
                <Route path="/operatorlist" component={OperatorList} />
                <Route path="/schedulelist" component={ScheduleList} />
              </Switch>
            </div>

            <AppFooter />

            {this.state.mobileMenuActive && (
              <div className="layout-main-mask"></div>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("state", state);
  console.log("props", props);

  return {
    // customers: this.state.customers,
    // tee_times: this.state.tee_times
  };
};
export default connect(mapStateToProps, {
  fetchAllOperators,
  fetchAllSupervisors,
  fetchAllSchedules
})(App);
