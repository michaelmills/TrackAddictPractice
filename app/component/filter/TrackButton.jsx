import React, {Component} from 'react';

export default class TrackButton extends Component {
    render() {
        return (
            <div className="btn-group-justified">
                <div className="btn-group">
                    <button type="button" className="text-left btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Track <span className="caret"></span>
                    </button>
                </div>
            </div>
        )
    }
}
