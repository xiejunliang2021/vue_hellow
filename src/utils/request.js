import axios from "axios";


export function request(config) {
    const instance = axios.create({
        baseURL:import .meta.env.VITE_APP_BASEURL,
        timeout : 5000,
    })
    // 发送请求
    return instance(config)
}
