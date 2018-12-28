import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/',
      children:[
        {
          path:'/',
          name:'page1',
          component:Page1,
        },
        {
          path:'/page2',
          name:'page2',
          component:Page2,
        }
      ]
    }
  ]
})
