import React from 'react';
import './VideoItem.css';

const VideoItem = ({selectedVid, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(selectedVid)} className="video-item item">
            <img className="ui image" alt={selectedVid.snippet.title} src={selectedVid.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{selectedVid.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;