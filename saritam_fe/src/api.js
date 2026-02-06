import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:7777/saritam",
});

export default API;
