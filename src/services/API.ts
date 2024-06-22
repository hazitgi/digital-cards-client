import axios from "axios";
// import { logout } from "../store/Actions/auth";
// import store from "../store";

const API = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

API.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            // store.dispatch(logout());
        }
        if (typeof error.response.data.error.name !== "undefined") {
            if (error.response.data.error.name === "TokenExpiredError") {
                // store.dispatch(logout());
                throw error;
            }
        }
        return Promise.reject(error);
    }
)