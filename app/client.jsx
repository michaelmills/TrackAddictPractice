import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';

import './../style/css/bootstrap.min.css';

render(<Router routes={routes} />, document.getElementById('app'));
