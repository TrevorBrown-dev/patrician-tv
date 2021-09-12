import axios from 'axios';

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyChUSMI1ta7xwZ3PX5L2yKzN9WwDqI9bls',
        channelId: 'UCnw3aIEiz60S6O3XcztCVkQ',
        part: 'id, snippet',
        order: 'date',
    },
});
