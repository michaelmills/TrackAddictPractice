import React, { Component, PropTypes } from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';

export default class App extends Component {
    render() {
        const title = 'Track Bootcards';
        return (
            <div className='container'>
                {this.props.children}
            </div>
        );
    }
}
