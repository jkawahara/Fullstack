// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST
export default {
  // Gets user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
