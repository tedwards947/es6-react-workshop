import React from 'react';
import ScrollButton from './ScrollButton.jsx';

export default class VideoPicker extends React.Component {

    scrollClickHandler(direction) {
        //TODO
    }

    render() {
        return (
            <div className="video-picker">
                <ScrollButton direction="left" onScrollClick={this.scrollClickHandler} />

                {this.props.children}

                <ScrollButton direction="right" onScrollClick={this.scrollClickHandler} />
            </div>
        );
    }
}

VideoPicker.PropTypes = {
    children: React.PropTypes.element.isRequired
};