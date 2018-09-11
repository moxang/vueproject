import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import data from '@/components/data'
import header from '@/components/header'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
