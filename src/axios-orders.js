import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-training-9a6e8.firebaseio.com/"
});

export default instance;
