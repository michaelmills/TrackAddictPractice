import React, {Component} from 'react';

export default class StateButton extends Component {
    render() {
        return (
            <div className="btn-group-justified">
                <div className="btn-group">
                    <button type="button" className="btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        State <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>California</li>
                        <li>Arizona</li>
                    </ul>
                </div>
            </div>
        )
    }
}
