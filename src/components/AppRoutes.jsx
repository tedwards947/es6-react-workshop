import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes.jsx';

export default class AppRoutes extends React.Component {
    render() {

        //onUpdate={() => window.scrollTo(0, 0) }
        return (
            <Router history={browserHistory} routes={routes} />
        );
    }
}