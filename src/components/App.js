import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    //utilising custom hook
    const [videos, search] = useVideos('catus');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    //setSelectedVideo(response.data.items[0]);


    return(
        <div className="ui container">
            <SearchBar onSubmit={search} />
            <div className="video-content">
                <VideoDetail video={selectedVideo} />
                <VideoList 
                    onVideoSelect={(video) => setSelectedVideo(video)} 
                    videos={videos} 
                />
            </div>
        </div>
    );
}

export default App;
