import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signin from '../views/Signin.vue'
import Products from '../components/Products/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !Store.getters.getUserInfos) next({ name: 'Login' })
//   else next()
// })

export default router
