import axios from "axios";
import auth from "./auth"


const instance = axios.create({
    baseURL: "postgres://admin:1234@localhost:5432/portal_empleo",
    withCredentials: true
});

const services = {
    auth: auth(instance),
}

export default services;