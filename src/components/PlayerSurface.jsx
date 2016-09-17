import React from 'react';

import Video from './Video.jsx';
import VideoPicker from './VideoPicker.jsx';
import Thumbnail from './Thumbnail.jsx';
import trailers from '../data/data.js';

export default class PlayerSurface extends React.Component {
    constructor(props) {
        super(props);

        //we'll use the class's constructor to define this component's initial state
        let initialVideo;
        const videoIdFromRouter = this.props.params.id;

        if (videoIdFromRouter) {
            //look for the video in our data
            initialVideo = this.getVideoFromVideoId(this.props.videos, videoIdFromRouter);
            // initialVideo = this.props.videos.find(item => {
            //     //I used weak `==` in case '5' or 5, for example
            //     return item.id == videoIdFromRouter;
            // });
        } 

        if (!initialVideo){
            //pick the first one
            initialVideo = this.props.videos[0];
        }
        
        this.state = {
            selectedVideo: initialVideo
        };
    }

    getVideoFromVideoId(videos, id) {
        return videos.find(item => {
            //I used weak `==` in case '5' or 5, for example
            return item.id == id;
        });
    }

    changeVideo(videoId){
        const newVideo = this.getVideoFromVideoId(this.props.videos, videoId);
        this.setState({
            selectedVideo: newVideo
        });
    }

    renderThumbnails(videos) {
        return videos.map((video, idx) => {
            return (
                <Thumbnail imgUrl={video.thumbnailUrl}
                           title={video.title}
                           id={video.id}
                           onThumbClick={() => {this.changeVideo(video.id);}} 
                           isActive={video.id === this.state.selectedVideo.id}/>
            );
        });
    }

    render() {
            console.log('HEY!', this.props.videos);
            console.log('selected video', this.state.selectedVideo);
        
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
    videos: trailers
};