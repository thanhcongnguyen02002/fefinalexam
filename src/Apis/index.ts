import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    token: "",
  },
});
export default axiosClient;