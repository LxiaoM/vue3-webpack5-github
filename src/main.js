import { createApp } from 'vue';
import App from './App.vue'

import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).config.productionTip = false

createApp(App).use(router).use(Antd).mount('#app')
