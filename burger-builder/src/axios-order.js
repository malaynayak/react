import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-29acf.firebaseio.com/'
});

export default instance;