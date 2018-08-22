// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Workspace from './components/Workspace'
import headerSpace from './components/workspace/headerSpace'
import sidebar from './components/workspace/sidebar'
import space from './components/workspace/space'

Vue.component('Workspace', Workspace)
Vue.component('header-space', headerSpace)
Vue.component('sidebar', sidebar)
Vue.component('space', space)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
