// import axios from 'axios';
 
// // 创建 Axios 实例
// const instance = axios.create({
//     baseURL: process.env.BASE_API, // 设置 API 地址
//     timeout: 5000 // 设置超时时间
// });
 
// export default {
//     get(url:any, params:any) {
//         return new Promise((resolve, reject) => {
//             instance.get(url, {params})
//                 .then(response => resolve(response))
//                 .catch(error => reject(error));
//         });
//     },
    
//     post(url:any, data:any) {
//         return new Promise((resolve, reject) => {
//             instance.post(url, data)
//             .then(response => resolve(response))
//             .catch(error => reject(error));
//     });
// }
// };