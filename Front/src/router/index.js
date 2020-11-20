import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Login from '../components/Customers/Login.vue'
import Signin from '../components/Customers/Signin.vue'
import Account from '../components/Customers/Account.vue'
import Products from '../components/Products/Products.vue'
import Basket from '../components/Products/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Store - Accueil',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Store - A propos',
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) next({ name: 'Home' })
      else next()
    },
    meta: {
      title: 'Store - Connexion',
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
    },
    meta: {
      title: 'Store - Inscription',
    }
    
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) next({ name: 'Home' })
      else next()
    },
    meta: {
      title: 'Store - Compte',
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Store - Produits',
    }
  },
  { path: "*", 
    component: PageNotFound,
    meta: {
      title: 'Store - Page non trouvée',
    }
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) next({ name: 'Home' })
      else next()
    },
    meta: {
      title: 'Store - Panier',
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
