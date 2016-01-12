import React from 'react';
import Route, {IndexRoute} from 'react-router';
import App from 'container/App';
import TrackBrowser from 'container/TrackBrowser';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={TrackBrowser} />
    </Route>
);
