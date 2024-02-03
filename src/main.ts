// 引入createApp用于创建应用
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'  // 在这里导入可以全局进行引用
import 'element-plus/dist/index.css'   // 引入element-plus中的css文件
import locale from 'element-plus/es/locale/lang/zh-cn'   // 引入element_plus中的汉化包
import '@/assets/bootstrap-5/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
const app = createApp(App)
// import Axios from 'axios'
import router from '@/router/index'


app.use(router)
// app.use(Axios)

// 使用elementplus和汉化
app.use(ElementPlus, {locale})



// 第一步：引入pinia
import { createPinia } from 'pinia'

app.use(createPinia())

// 第二步：创建pinia
const pinia = createPinia()

// 第三步：安装pinia
app.use(pinia)


app.mount('#app')
