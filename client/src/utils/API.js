// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST
export default {
  // Login user with the given id
  loginUser: function(userData) {
    return axios.post("/api/login", userData);
  },
  // Gets user with the given id
  getProfile: function(userId) {
    return axios.get("/profile/" + userId);
  },
  // Saves user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  updateUser: function(userId) {
    return axios.put("/api/users/" + userId);
  }
};
