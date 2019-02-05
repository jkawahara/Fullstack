// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST
export default {
  // Login user with the given id
  loginUser: function(id) {
    return axios.get("/api/login/" + id);
  },
  // Gets user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
