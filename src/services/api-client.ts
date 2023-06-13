import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '892d2a1d73064259ad35bb1258547fc5'
    }
})