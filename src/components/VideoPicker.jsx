import React from 'react';
import ScrollButton from './ScrollButton.jsx';

export default class VideoPicker extends React.Component {
    constructor() {
        super()

        this.scrollClickHandler = this.scrollClickHandler.bind(this);
    }

    scrollClickHandler(direction) {
        //potential enhancement? (disable/hide the scroll buttons if they can't scroll anymore)
        const SCROLL_AMOUNT = 200;

        //the this.thumbnails now refers to the dom element itself,  '.video-picker-thumbnails'
        const currentScrollLeft = this.thumbnails.scrollLeft;
        let modifier;
        if (direction === 'left'){
            modifier = -1;
        } else if (direction === 'right') {
            modifier = 1;
        }

        //will scroll the element left or right, depending on modifier
        this.thumbnails.scrollLeft = currentScrollLeft + (modifier * SCROLL_AMOUNT);
    }

    render() {
        return (
            <div className="video-picker">
                <ScrollButton direction="left" onScrollClick={() => {this.scrollClickHandler('left');}} />

                {/* refs are a way to store a reference to the DOM node for later use  */}
                <div className="video-picker-thumbnails" ref={(ref) => { this.thumbnails = ref;} }>
                    {this.props.children}
                </div>
                <ScrollButton direction="right" onScrollClick={() => {this.scrollClickHandler('right');}} />
            </div>
        );
    }
}

VideoPicker.PropTypes = {
    children: React.PropTypes.element.isRequired
};