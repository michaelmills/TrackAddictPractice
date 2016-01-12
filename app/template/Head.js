import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import config from './headConfig';

class Header from Component {
    render() {
        return(
            <Helmet title={config.title}
                    meta={config.meta}
                    link={config.link}
            />
        );
    }
}
ReactDOMServer.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
