import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log("Axios response error: ", error);
        return Promise.reject(error);
    }
);

export default axiosInstance