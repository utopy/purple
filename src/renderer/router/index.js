import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/index.vue')
    },
    {
      path: "/new",
      name: 'new',
      component: require("@/components/new.vue")
    },
    {
      path:"/reader/:url",
      name:"reader",
      component: require("@/components/reader.vue")
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
