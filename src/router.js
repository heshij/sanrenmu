import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import Search from './pages/Search/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/Classify',
          name: 'Classify',
          component: Classify
      },
      {
          path: '/ShopCar',
          name: 'ShopCar',
          component: ShopCar
      },
      {
          path: '/User',
          name: 'User',
          component: User
      },
      {
          path: '/Search',
          name: 'Search',
          component: Search
      }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
