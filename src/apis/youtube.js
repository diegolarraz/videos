import axios from 'axios';

const KEY = 'AIzaSyAwfipXjTT5i93Z1-TjgDd_tqNhPmtvuTI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
