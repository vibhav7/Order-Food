import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-project-1ab70.firebaseio.com/'
})

export default instance;