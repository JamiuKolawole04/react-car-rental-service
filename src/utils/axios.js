import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8020/api/v1/auth"
});

export default instance;