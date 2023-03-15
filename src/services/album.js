import axios from 'axios'

export default {
    get(id) {
        return axios.get('https://jsonplaceholder.typicode.com/albums' + id)
    },
    all() {
        return axios.get('https://jsonplaceholder.typicode.com/albums')
    },

}
