import axios from "axios";

const API_URL = "http://localhost:3300"; // server adress

export default {
  getArticles() {
    return axios.get(`${API_URL}/articles`);
  },
  getArticleByID(id) {
    return axios.get(`${API_URL}/articles/${id}`);
  },
  addArticle(articleData) {
    return axios.post(`${API_URL}/articles`, articleData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  updateArticle(id, articleData) {
    return axios.put(`${API_URL}/articles/${id}`, articleData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  deleteArticle(id) {
    return axios.delete(`${API_URL}/articles/${id}`);
  },
  getUsers() {
    return axios.get(`${API_URL}/users`);
  },
  getUserByID(id) {
    return axios.get(`${API_URL}/users/${id}`);
  },
};
