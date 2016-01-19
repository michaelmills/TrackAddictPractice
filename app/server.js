import express from 'express';
import React from 'react';
import path from 'path';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import routes from './../app/routes';
import template from './template/template';

const app = express();
const port = process.env.PORT || 5050;

// mongoose.connect('mongodb://localhost:27017/track-bootcards');

// var db = mongoose.connection;
// db.on('error', function() {
//     console.info('Error: Unable to connect to database.');
// });
//
// db.once('open', function() {
//     console.info('Success: Connected to database.');
// });

app.set('port', port);

app.use('/static', express.static(path.join(__dirname, 'dist/static')));
// app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/favicon.ico', (req, res) => res.send(''));

app.use((req, res) => {
    match({routes, location: req.url},
            (error, redirectLocation, renderProps) => {
                if (error) {
                  res.status(500).send(error.message);
                }
                else if (renderProps) {
                  const renderedContent = renderToString(<RoutingContext {...renderProps} />);
                  const renderedPage = template(renderedContent);

                  res.status(200).send(renderedPage);
                }
                else {
                  res.status(404).send('Not found');
                }
            }
    );
});

app.listen(app.get('port'), () => {
    console.log('Listening on ' + app.get('port'));
});
