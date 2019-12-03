import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppBreadcrumb extends Component {

    static propTypes = {
        match: PropTypes.object
    }

    render() {
        const { location } = this.props;

        return (
            <div className="layout-breadcrumb">
                <ul>
                    <li><button className="p-link"><i className="material-icons">home</i></button></li>
                    <li>{location.pathname}</li>
                </ul>
    
                <div className="layout-breadcrumb-options">
                    <button className="p-link" title="Backup">
                        <i className="material-icons">backup</i>
                    </button>
                    <button className="p-link" title="Bookmark">
                        <i className="material-icons">bookmark</i>
                    </button>
                    <button className="p-link" title="Logout">
                        <i className="material-icons">power_settings_new</i>
                    </button>
                </div>
            </div>
        );
    }
}