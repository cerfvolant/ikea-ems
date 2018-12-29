// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import './permission'
import './mock'

import '@/icons' // icon
import '@/styles/index.scss'
import '../node_modules/lib-flexible/flexible'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import 'element-ui/packages/popover'

// import common from './views/subWrap/components/index'
// Vue.use(common.NavWrap2)

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App)
  components: { App },
  template: '<App/>'
})
