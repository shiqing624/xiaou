import axios from 'axios'
import store from "../store/index.js";
import router from "../router"
let instance = axios.create({
    baseURL: '/api',
    timeout: 10000 //请求过期时间
})
//请求拦截
instance.interceptors.request.use((config) => {
    config.headers.authorization = store.state.userInf.token
    return config;
}, (err) => {
    Promise.reject(err)
})
//响应拦截
instance.interceptors.response.use((res) => {
	// console.log(res)
	if (res.data.code == 403) {
		router.push("/login")
	} 
	return res
}, err => {
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