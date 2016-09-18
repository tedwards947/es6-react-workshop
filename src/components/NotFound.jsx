import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
    render() {

        return (
            <div className="not-found">
                <h1>404 - Not Found</h1>
                <Link to="/">Click here to return home.</Link>
            </div>
        );
    }
}