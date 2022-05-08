import axios from "axios"
import {Toast} from "vant";
axios.defaults.withCredentials = true;
const instance = axios.create({
    timeout: 3000, //请求超时时间
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'

    }
})
instance.interceptors.request.use(config => {
    Toast.loading({
        //打开加载效果
        message: '加载中...',
        forbidClick: true,
    });
    return config
})
// 添加响应拦截器
instance.interceptors.response.use(response => {
    Toast.clear()
    // console.log(response)
    return response.data
}, error => {
    console.log('TCL: error', error)
    Toast({
        message: '服务端错误~' + error,
        icon: 'like-o',
    });
    return Promise.reject(error)
})
// 封装一个函数 暴露出去
export function fetch (url, params) {
    return instance.get(url, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}