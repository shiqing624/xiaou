import axios from 'axios'

let instance = axios.create({
    baseURL: '/api',
    timeout: 10000 //请求过期时间
})
//请求拦截
instance.interceptors.request.use((config) => {
    console.log(config);
    let token = localStorage.getItem("token");
    if (token) {
        config.headers.token = token;
    }
    return config;
}, (err) => {
    Promise.reject(err)
})

function get(url, params) {
    return instance.get(url, {
        params
    })
}

function post(url, parmas) {
    return instance.post(url, parmas)
}

export default {
    get,
    post
}