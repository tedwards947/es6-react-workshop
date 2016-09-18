import React from 'react';
import classNames from 'classnames';

export default class ScrollButton extends React.Component {
    render() {

        const classes = classNames('scroll-button', {
            //there may be terser ways to express this, but I wrote it out here for clarity
            'scroll-button-left': this.props.direction === 'left',
            'scroll-button-right': this.props.direction === 'right'
        });

        return (
            <input type="button"
                   className={classes}
                   value={this.props.direction} 
                   onClick={this.props.onScrollClick} />
        );
    }
}

ScrollButton.PropTypes = {
    direction: React.PropTypes.string.isRequired,
    onScrollClick: React.PropTypes.func.isRequred
};