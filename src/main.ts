// 引入createApp用于创建应用
import { createApp } from 'vue'

import App from './App.vue'

// 第一步：引入pinia
import { createPinia } from 'pinia'
const app = createApp(App)
// 第二步：创建pinia，最好是在app创建好以后在进行创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)

createApp(App).mount('#app')