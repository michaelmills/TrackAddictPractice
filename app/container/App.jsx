import React, { Component, PropTypes } from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';

import './../../style/css/bootstrap.min.css';
import './../../style/font-awesome/css/font-awesome.min.css';
import './../../style/css/animate.min.css';
import './../../style/css/creative.css';

export default class App extends Component {
    render() {
        const title = 'Track Bootcards';
        return (
            <div className="container">
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}
