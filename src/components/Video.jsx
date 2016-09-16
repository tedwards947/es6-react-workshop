import React from 'react';

export default class Video extends React.Component {

    render() {
        return (
            <div className="video-wrapper">

                <video controls poster={this.props.poster} >
                    <source src={this.props.url} type="video/mp4"/>
                    {/* you could have more <source> elements here, see the <video> spec */}

                    {/* Fallback text for browsers that don't support HTML5 playback... */}
                    Your browser does not support HTML5 Video playback
                </video>

            </div>
        );
    }
}

Video.propTypes = {
    url: React.propTypes.string.isRequired,
    poster: React.propTypes.string
};