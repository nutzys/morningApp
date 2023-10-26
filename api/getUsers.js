import axios from 'axios';

export const getUsers = () => {
    return axios.get('http://172.20.10.3:8080/api/users')
    .then(res => {console.log(res.data)});
}