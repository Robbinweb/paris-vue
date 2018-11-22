// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.1:加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource' 
// 1.2:将VueResource注册vue
Vue.use(VueResource);

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// 1.2.1设置请求的跟路径
Vue.http.options.root = "http://localhost:5000/";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
