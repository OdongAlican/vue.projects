import Vue from 'vue'
import Router from 'vue-router'
import ViewUsers from './views/ViewUsers.vue'
import Users from "./views/Users";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/ViewUsers',
      name: 'ViewUsers',
      component: ViewUsers,
    }
  ]
})
