import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-22598.firebaseio.com'
});

export default instance;