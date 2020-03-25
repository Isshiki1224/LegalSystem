import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import axios from 'axios'

import BaiduMap from 'vue-baidu-map'
    Vue.use(BaiduMap, {
          /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
          ak: '4Wdhtd74HWQuVKmtoH01dtlmd14UWsi8'
    })

axios.defaults.baseURL = 'http://localhost:8081'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
