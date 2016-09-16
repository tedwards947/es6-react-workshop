import React from 'react';
import { Link } from 'react-router';

export default class Thumbnail extends React.Component {
    render() {

        //notice the arrow function which allows us to pass this.props.id to the click handler function
        return (
            <div className="thumbnail-wrapper" onClick={() => {this.props.onThumbClick(this.props.id)}}>

                <img src={this.props.url} alt={this.props.title} />
                
                <span className="thumbnail-title">{this.props.title}</span>
               
            </div>
        );
    }
}


Thumbnail.PropTypes = {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.oneOfType([
        //we'll let id be either a string or a number
        React.PropTypes.string,
        React.PropTypes.number
    ]).isRequired,
    onThumbClick: React.PropTypes.func
};