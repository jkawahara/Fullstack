// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST, DELETE
export default {
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  }
};
