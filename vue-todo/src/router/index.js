import Vue from 'vue'
import Router from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Todo from '@/components/Todo'


Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
