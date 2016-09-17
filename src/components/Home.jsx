import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {

        return (
            <div className="home-page">
                <h1>hello world!</h1>
                <Link to="/video">Go to the video</Link>
                <Link to="/video/3">Go to the video 3</Link>
            </div>
        );
    }
}