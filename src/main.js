import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import global_menuBar from './plugins/global_menuBar.js'
import './style/common.css'
import './style/iconfont.css'
import axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(global_menuBar);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
