import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageMain from '@/components/PageMain'
import CategoryList from "@/components/CategoryList"
import Gouwuche from "@/components/Gouwuche"
import UserPage from "@/components/UserPage"
import error404 from "@/views/error/404"
import app from '@/App'

Vue.use(Router)



export default new Router({
  // mode:'history',
  base: __dirname,
  routes: [
    {
      path:"/", 
      redirect:'/index' //默认重定向
    },
    {
      path:'/index',
      name:'index',
      component: app
    },
    {
      path: '/CategoryList',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/PageMain',
      name: 'PageMain',
      component: PageMain
    },
    {
      path: '/UserPage',
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/Gouwuche',
      name: 'Gouwuche',
      component: Gouwuche
    },
    {
      path:"/products/:id",
      name:'products',
      component(resolve){
        require(['@/views/products/product.vue'],resolve) //异步懒加载
        
      }
    },
    {
      path:'/error/404',
      name:'404',
      // component(resolve){
      //   require(['../views/error/404.vue'],resolve)
      // }
      component:error404
    }
    
    
  ]
})
