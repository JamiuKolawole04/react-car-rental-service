import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-car-rental-service.herokuapp.com"
});

export default instance;