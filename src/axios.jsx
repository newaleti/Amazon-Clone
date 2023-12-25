import axios from "axios"

const instance = axios.create({
  baseURL: "amazon-clone-ten-zeta.vercel.app",
});

export default instance
