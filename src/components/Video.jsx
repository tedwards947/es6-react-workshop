import React from 'react';
import URI from 'urijs';

export default class Video extends React.Component {
    constructor() {
        super();
        this.VIDEO_TYPES = {
            'mp4': 'video/mp4',
            'ogg': 'video/ogg',
            'webm': 'video/webm'
        };
    }

    getSourceType(source){    
        /*
            <video>s take <source> elements of the form:
            <source src="https://...file.mp4" type="video/mp4" />

            we need to determine the correct type based on the file extension.
            we can use URI.js to get the extension for us
        */

        const fileExtension = URI(source).suffix();

        //if we can't look it up in our map, return null. The browser will then be left to its own devices
        return this.VIDEO_TYPES[fileExtension] || null;
    }

    render() {
        return (
            <div className="video-wrapper">
                <h3>{this.props.title}</h3>
                <video controls poster={this.props.poster} height="700" width="1200">

                    {/* will render _n_ <source/> elements. note the special key property. */}
                    {this.props.sources.map((source, idx) => {
                        const type = this.getSourceType(source);
                        return (<source src={source} type={type} key={idx} />);
                    })}

                    {/* Fallback text for browsers that don't support HTML5 playback... */}
                    Your browser does not support HTML5 Video playback
                </video>

            </div>
        );
    }
}

Video.PropTypes = {
    poster: React.PropTypes.string,
    sources: React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
    ).isRequired,
    title: React.PropTypes.string
};