import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholde5r.typicode.com/posts',
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        config.headers['version'] = '1.5.0';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (!error.response) {
            alert("تحقق من اتصالك بالإنترنت!");
        } else if (error.response.status === 404) {
            console.error("المورد غير موجود (404)");
        } else if (error.response.status >= 500) {
            alert("مشكلة في خادم البيانات، حاول لاحقاً");
        }
        return Promise.reject(error);
    }
);

export default api;