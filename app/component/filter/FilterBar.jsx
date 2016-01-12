import React, {Component} from 'react';
import {Link} from 'react-router';
import StateButton from './StateButton';
import TrackButton from './TrackButton';

export default class FilterBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <StateButton />
                </div>

                <div className="col-md-3">
                    <TrackButton />
                </div>
            </div>
        )
    }
}
