// 导入需要的模块，例如 axios
import axios from 'axios';

// 这里可以定义一些初始配置，拦截器等
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 2000;

axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    console.log("请求的基本配置",config);
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.response.use(res => {
    // 对响应数据做点什么
    console.log("响应的基本配置",res);
        return res.data;
}, err =>{
    console.log("响应错误",err);
    return Promise.reject(err);
})

// 导出 axios 实例或相关配置
export default axios;