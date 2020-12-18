import axios from "axios";

const api = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
