import axios from "axios";
const axiosInstace = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true, // Include cookies in requests
});
export { axiosInstace };
