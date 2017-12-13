import axios from 'axios'
/* returns a axios object that points to an URL*/ 
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8082/'
    })
}