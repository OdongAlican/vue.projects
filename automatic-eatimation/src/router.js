import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from './views/CreateUser.vue'
import ViewUsers from './views/ViewUsers.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/ViewUsers',
      name: 'ViewUsers',
      component: ViewUsers,
    }
  ]
})
