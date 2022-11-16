import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:7017'
})

export default instance;