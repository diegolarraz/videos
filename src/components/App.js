import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('otter sounds');
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };
    
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit} />
                <div className="video-content">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default App;
