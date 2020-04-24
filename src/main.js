import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap'
import axios from 'axios'

import BaiduMap from 'vue-baidu-map'
    Vue.use(BaiduMap, {
          /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
          ak: '4Wdhtd74HWQuVKmtoH01dtlmd14UWsi8'
    })

Vue.use(ElementUI)
axios.defaults.baseURL = 'http://40.73.72.56:1311/nacos-provide'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
