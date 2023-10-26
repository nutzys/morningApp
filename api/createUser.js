import axios from 'axios';

export const createUser = (email, username, password) => {
    const data = {
        email: email,
        username: username,
        password: password,
    };
    return axios.post('http://172.20.10.3:8080/api/user', data)
    .then((response) => {
        console.log('Data sent successfully');
    })
    .catch((error) => {
        console.error('Error sending data: ' + error.message);
    });
}