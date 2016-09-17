import React from 'react';
import ScrollButton from './ScrollButton.jsx';

export default class VideoPicker extends React.Component {
    constructor() {
        super()

        this.scrollClickHandler = this.scrollClickHandler.bind(this);
    }

    scrollClickHandler(direction) {
        //finish this
        console.log(this.thumbnails);
        //TODO
    }

    render() {
        return (
            <div className="video-picker">
                <ScrollButton direction="left" onScrollClick={this.scrollClickHandler} />
                <div className="video-picker-thumbnails" ref={(ref) => { this.thumbnails = ref;} }>
                    {this.props.children}
                </div>
                <ScrollButton direction="right" onScrollClick={this.scrollClickHandler} />
            </div>
        );
    }
}

VideoPicker.PropTypes = {
    children: React.PropTypes.element.isRequired
};