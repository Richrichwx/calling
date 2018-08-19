// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import workspace from './workspace'
import Header from './componentsSpace/Header'
import leftspace from './componentsSpace/leftspace'
import rightspace from './componentsSpace/rightspace'

Vue.component('workspace', workspace)
Vue.component('Header', Header)
Vue.component('leftspace', leftspace)
Vue.component('rightspace', rightspace)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
