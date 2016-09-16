import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="video-wrapper">

                <video controls >
                    <source src={this.props.url} type="video/mp4"/>
                    {/* you could have more <source> elements here, see the <video> spec */}

                    {/* Fallback text for browsers that don't support HTML5 playback... */}
                    Your browser does not support HTML5 Video playback
                </video>

            </div>
        );
    }
}