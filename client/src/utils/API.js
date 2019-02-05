// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST
export default {
  // Login user with the given id
  loginUser: function(userData) {
    return axios.get("/api/login", userData);
  },
  // Gets user with the given id
  getUser: function(userEmail) {
    return axios.get("/api/users/", userEmail);
  },
  // Saves user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
