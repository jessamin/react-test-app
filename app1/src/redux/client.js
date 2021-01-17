import axios from "axios"

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000'
});

export default axiosClient

export const apiUrl = 'http://localhost:4000/movies?'
