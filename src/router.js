import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify.vue'
import ProList from './pages/Classify/components/ProList'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import ProDetails from './pages/ProDetails/ProDetails.vue'
import proAssess from './pages/ProDetails/components/proAssess.vue'
import detailsImg from './pages/ProDetails/components/detailsImg.vue'
import proDetailsMain from './pages/ProDetails/components/proDetailsMain.vue'
import Search from './pages/Search/Search.vue'
import login from './pages/login/login.vue'
import register from './pages/login/register.vue'

Vue.use(Router);

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
        },
        {
            path: '/ProList',
            name: 'ProList',
            component: ProList
        },
        {
            path: '/ProDetails',
            name: 'ProDetails',
            component: ProDetails,
            redirect: '/ProDetails',
            children: [
                {
                    path: '/ProDetails',
                    component: proDetailsMain
                },
                {
                    path: '/ProDetails/detailsImg',
                    component: detailsImg
                },
                {
                    path: '/ProDetails/proAssess',
                    component: proAssess
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
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
