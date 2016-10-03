import React from 'react';
import {browserHistory} from 'react-router';

import Video from './Video.jsx';
import VideoPicker from './VideoPicker.jsx';
import Thumbnail from './Thumbnail.jsx';
import videos from '../data/data.js';

export default class PlayerSurface extends React.Component {
    constructor(props) {
        super(props);

        //we'll use the class's constructor to define this component's initial state
        const videoIdFromRouter = this.props.params.id;
        this.state = {
            selectedVideo: this.getVideoById(this.props.videos, videoIdFromRouter)
        };
    }

    componentWillReceiveProps(nextProps) {
        //note: this method is not called for the initial render

        //we'll use it here to react to videoId changes from React Router
        const videoIdFromRouter = nextProps.params.id;

        //setState() causes React to rerender
        this.setState({
            selectedVideo: this.getVideoById(this.props.videos, videoIdFromRouter)
        });
    }

    getVideoById(videos, videoId) {
        let foundVideo;
        if (videoId) {
            //look for the video in our data
            foundVideo = videos.find(item => {
                //I used weak `==` in case '5' or 5, for example
                return item.id == videoId;
            });
        } 

        if (!foundVideo){
            //pick the first one
            foundVideo = videos[0];
        }
        
        return foundVideo;
    }

    handleThumbClick(videoId){
        /* 
            use react router to change the selected video. 
            the change will eventually be picked back up here in this class in
                componentWillReceiveProps(...)
        */
        browserHistory.push(`/video/${videoId}`);
    }

    renderThumbnails(videos) {
        return videos.map((video, idx) => {
            return (
                <Thumbnail imgUrl={video.thumbnailUrl}
                           title={video.title}
                           id={video.id}
                           onThumbClick={() => {this.handleThumbClick(video.id);}} 
                           isActive={video.id === this.state.selectedVideo.id}/>
            );
        });
    }


    render() {
        //we need to make this an array because that's what our <Video> component accepts
        const selectedVideoSources = [this.state.selectedVideo.video.url];

        return (
            <div className="player-surface">
                <Video sources={selectedVideoSources} 
                       poster={this.state.selectedVideo.heroUrl}
                       title={this.state.selectedVideo.title} />

                <VideoPicker>
                    {this.renderThumbnails(this.props.videos)}
                </VideoPicker>
            </div>
        );
    }
}

PlayerSurface.PropTypes = {
    videos: React.PropTypes.array
};

PlayerSurface.defaultProps = {
    videos: videos
};