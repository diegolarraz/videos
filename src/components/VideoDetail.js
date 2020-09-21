import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Please create a search!</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe title="videoplayer" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;