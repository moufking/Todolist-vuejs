/* eslint-disable */
const API_URL = 'http://localhost:8000';
import axios from 'axios';
import TokenService from './storage.service';

const Apiservice = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  setHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`;
},

removeHeader() {
  axios.defaults.headers.common = {};
      // delete axios.defaults.headers.common['Authorization']
},

get(resource) {
  return axios.get(resource)
},

post(resource, data) {
  return axios.post(resource, data)
},

put(resource, data) {
  return axios.put(resource, data)
},

delete(resource) {
  return axios.delete(resource)
},

}
export default Apiservice

