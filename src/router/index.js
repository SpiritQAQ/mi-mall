import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageMain from '@/components/PageMain'
import CategoryList from "@/components/CategoryList"
import Gouwuche from "@/components/Gouwuche"
import UserPage from "@/components/UserPage"
import error404 from "@/views/error/404"
import products from "@/views/products/product"
import building from "@/views/error/building"
import Search from "@/views/Search"
import index from '@/index'

Vue.use(Router)



export default new Router({
  // mode:'history',
  // base: __dirname,
  routes: [
    {
      path:"/", 
      redirect:'/index' //默认重定向
    },
    // {
    //   path:"/#",
    //   redirect:'/#/index'
    // },
    {
      path:'/index',
      name:'index',
      component: index
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
      props:true,
      component(resolve){
        require(['@/views/products/product.vue'],resolve) //异步懒加载
      }
      // component:products
    },
    {
      path:'/error/404',
      name:'404',
      // component(resolve){
      //   require(['../views/error/404.vue'],resolve)
      // }
      component:error404
    },
    {
      path:"/error/building",
      name:'building',
      component:building
    }
    ,
    {
      path:"/search",
      name: Search,
      component:Search
    }
    
    
  ]
})
