import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引用Vant相关组件
import Vant from 'vant';
import 'vant/lib/index.css';
const app = createApp(App);
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import App from './App.vue'
app.use(Vant);
app.use(ElementPlus)
app.use(router).mount('#app')
