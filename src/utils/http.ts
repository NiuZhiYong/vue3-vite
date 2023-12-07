import axios from 'axios';

// export class http {
//     get(url: string, params: any = {}, headers: any = {}) {
//         return axios.get(url, {
//             params,
//             headers
//         });
//     }
//     post(url: string, data: any = {}, headers: any = {}) {
//         return axios.post(url, data, {
//             headers
//         });
//     }
//     put(url: string, data: any = {}, headers: any = {}) {
//         return axios.put(url, data, {
//             headers
//         });
//     }
//     delete(url: string, data: any = {}, headers: any = {}) {
//         return axios.delete(url, {
//             data,
//             headers
//         });
//     }
// }

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
