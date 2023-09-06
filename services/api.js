import axios from 'axios'

const API_URL = 'http://localhost:3300'; // server adress

export default {
  getArticles() {
    return axios.get(`${API_URL}/articles`);
  },
  getArticleByID(id) {
    return axios.get(`${API_URL}/articles/${id}`);
  },
  getUsers() {
    return axios.get(`${API_URL}/users`);
  },
  getUserByID(id) {
    return axios.get(`${API_URL}/users/${id}`);
  },
};