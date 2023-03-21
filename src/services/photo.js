import axios from 'axios'

export default {
    get(id) {
        return axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
    },
    all() {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
    },
    valid() {
        return axios.get('https://jsonplaceholder.typicode.com/albums')
    },
}
