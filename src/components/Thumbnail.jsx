import React from 'react';
import classNames from 'classnames';

export default class Thumbnail extends React.Component {
    render() {

        const classes = classNames('thumbnail-wrapper', {
            'thumbnail-clickable': !!this.props.onThumbClick,
            'thumbnail-active': this.props.isActive
        });

        const divStyle = {
            backgroundImage: `url(${this.props.imgUrl})`
        };

        //notice the arrow function which allows us to pass this.props.id to the click handler function
        return (
            <div className={classes} 
                 title={this.props.title}
                 onClick={() => {this.props.onThumbClick(this.props.id)}}
                 style={divStyle}>

                <span className="thumbnail-title">{this.props.title}</span>
               
            </div>
        );
    }
}

Thumbnail.PropTypes = {
    imgUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.oneOfType([
        //we'll let id be either a string or a number
        React.PropTypes.string,
        React.PropTypes.number
    ]).isRequired,
    onThumbClick: React.PropTypes.func,
    isActive: React.PropTypes.bool
};