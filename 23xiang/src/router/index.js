import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/zhuc',
    name: 'ZhuC',
    component: () => import('../views/ZhuC.vue')
  },
  {
    path: '/dengl',
    name: 'DengL',
    component: () => import('../views/DengL.vue')
  },
  {
    path: '/xiangq',
    name: 'XiangQ ',
    component: () => import('../views/XiangQ.vue')
  },
  {
    path: '/shouy',
    name: 'ShouY',
    component: () => import('../views/ShouY.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // if (to.name !== 'DengL') { 
  //   next();
  // } else if (to.name !== 'ZhuC') { 
  //   if (sessionStorage.getItem('username') == '') { 
  //     next({
  //       name: 'DengL'
  //     })
  //   }
  // }
  // next();
  if(to.name=="DengL"&&!sessionStorage.getItem("username"))next({name:'DengL'})
  else next()
})
export default router