import { createApp } from 'vue'
//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router/index.js'

// 创建一个Vue应用实例
const app = createApp(App);
// 使用ElementPlus
//app.use(ElementPlus)
// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');