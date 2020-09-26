import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID _4zFg8_HO6L7u7RdPXX2xy-6gf5AFbmVnvkugiTCLUc'
      }
});