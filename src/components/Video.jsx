import React from 'react';

export default class Video extends React.Component {
    constructor() {
        super();

        this.togglePlayState = this.togglePlayState.bind(this);
    }

    togglePlayState() {
        if (this.video.paused){
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    componentDidUpdate(previousProps, previousState){
        if(previousProps.sources !== this.props.sources){
            /*
                We need to imperatively call .load() here because while React's render() will update the 
                <source>s within <video>, <video> will not reload automatically.
            */
            this.video.load();
        }
    }

    render() {
        return (
            <div className="video-wrapper" onClick={this.togglePlayState}>
                <h3>{this.props.title}</h3>
                <video controls height="700" width="1200" 
                       poster={this.props.poster} 
                       ref={(ref) => {this.video = ref;}}>

                    {/* will render _n_ <source/> elements. note the special key property. */}
                    {this.props.sources.map((source, idx) => {
                        const TYPE = 'video/mp4';
                        return (<source src={source} type={TYPE} key={idx} />);
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