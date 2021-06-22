import axios from "axios";

export default {
  // Gets all books
  login: function() {
    return axios.get("/api/login");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  logout: function() {
    return axios.get("/api/logout/");
  },
  // Saves a book to the database
  register: function(userData) {
    return axios.post("/api/register", userData);
  }
};
