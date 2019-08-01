import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/sobre',
      name: 'sobre',
      component: () => import('./views/Sobre.vue')
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: () => import('./views/Cursos.vue')
    },
    {
      path: '/fontawesome',
      name: 'fontawesome',
      component: () => import('./views/Fontawesome.vue')
    },
    {
      path: '/highlightjs',
      name: 'highlightjs',
      component: () => import('./views/Highlightjs.vue')
    },
    {
      path: '/ghpages',
      name: 'ghpages',
      component: () => import('./views/Ghpages.vue')
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: () => import('./views/Gsap.vue')
    },{
      path: '/storybook',
      name: 'storybook',
      component: () => import('./views/Storybook.vue')
    },{
      path: '/axios-and-vue',
      name: 'axios-and-vue',
      component: () => import('./views/AxiosAndVue.vue')
    }

  ]
})
