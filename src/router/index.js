import Vue from 'vue'
import Router from 'vue-router'
import Workspace from '@/Workspace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Workspace',
      component: Workspace
    }
  ]
})
