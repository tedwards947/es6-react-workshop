import React from 'react';

import Video from './Video.jsx';
import VideoPicker from './VideoPicker.jsx';
import Thumbnail from './Thumbnail.jsx';

export default class PlayerSurface extends React.Component {
    //this.props.params.id for the video id
    render() {
        return (
            <div className="player-surface">
                <h3>video will go here</h3>

                <VideoPicker>
                    <h4>thumb 1</h4>
                    <h4>thumb 2</h4>
                </VideoPicker>
            </div>
        );
    }
}

PlayerSurface.PropTypes = {

};