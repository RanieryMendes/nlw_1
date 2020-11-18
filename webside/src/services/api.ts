import axios from 'axios';

//axios allows you to use base url 

const api = axios.create
({
 baseURL:'http://localhost:3333'

});

export default api;