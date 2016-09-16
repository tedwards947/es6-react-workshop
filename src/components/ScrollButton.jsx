import React from 'react';
import classNames from 'classnames';

export default class ScrollButton extends React.Component {

    getButtonLabel(direction) {
        if (direction === 'left') {
            return '<';
        } else if (direction === 'right') {
            return '>';
        }
    }

    render() {

        const classes = classNames('scroll-button', {
            //there may be terser ways to express this, but I wrote it out here for clarity
            'scroll-button-left': this.props.direction === 'left',
            'scroll-button-right': this.props.direction === 'right'
        });

        /* 
        notice the arrow function to pass the direction to getButtonLabel()
        this is a contrived example. a more practical solution would be to do 

            const buttonValue = this.getButtonLabel(this.props.direction);
            
        in the render() method and then refer to it directly within the tag:

            value={buttonValue}
        */
        return (
            <input type="button"
                   className={classes}
                   value={() => {this.getButtonLabel(this.props.direction);}} 
                   onClick={this.props.onScrollClick} />
        );
    }
}

ScrollButton.propTypes = {
    direction: React.propTypes.string.isRequired,
    onScrollClick: React.propTypes.func.isRequred
};