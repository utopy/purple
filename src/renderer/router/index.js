import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'landing-page',
      component: require('@/components/index.vue')
    },
    {
      path: "/new",
      name: 'new',
      component: require("@/components/new.vue")
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
