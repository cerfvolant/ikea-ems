import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout.vue'
import SubWrap from '../views/subWrap/SubWrap.vue'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        hidden: true
      },
      {
        path: 'applyCenter',
        name: 'ApplyCenter',
        component: () => import('@/views/apply-center/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/wasteWater',
    component: Layout,
    name: 'WasteWater',
    hidden: true,
    redirect: '/wasteWater',
    children: [
      {
        path: '/',
        component: SubWrap,
        hidden: true,
        redirect: '/wasteWater/siteMap',
        children: [
          {
            path: 'siteMap',
            name: 'SiteMap',
            component: () => import('@/views/siteMap/index'),
            hidden: true
          },
          {
            path: 'stateForm',
            name: 'StateForm',
            component: () => import('@/views/stateForm/index'),
            hidden: true
          },
          {
            path: 'settings',
            name: 'Settings',
            component: () => import('@/views/settings/index'),
            hidden: true
          }
        ]
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
