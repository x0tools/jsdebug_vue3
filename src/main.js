import { createApp } from 'vue'
//import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/css/dark-vars.css'
import App from './App.vue'
import router from './router/index.js'






// 创建一个Vue应用实例
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 使用ElementPlus
//app.use(ElementPlus)
// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');