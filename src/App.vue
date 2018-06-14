<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

import TopBar from "@/components/TopBar"
import cssReset from "../static/css/reset.css"
import Footer from "./components/Footer"
import PageMain from './components/PageMain'
import CategoryList from "./components/CategoryList"
import Gouwuche from "./components/Gouwuche"
import UserPage from "./components/UserPage"
import store from './store/index'
import router from "vue-router"

export default {
  name: 'App',
  components:{TopBar,Footer,PageMain,CategoryList,Gouwuche,UserPage},
  store,
  data(){
    return {
      transitionName:'slide-go'
    }
  },
  // created(){
  //   let cart =localStorage.getItem('cart')
  //   console.log(cart)  
  //   console.log(123)
  //   if(cart){
  //     cart = JSON.parse(cart)
  //   }else{
  //     return 
  //   }
  //   this.$store.commit('initCart',cart)  
  // },
  mounted(){
    let _this = this
    fnResize()
    window.onresize = function () {
      fnResize()
    
    }
    function fnResize() {
      var deviceWidth = document.documentElement.clientWidth || window.innerWidth
      if (deviceWidth >= 720) {
      deviceWidth = 750
      }
      if (deviceWidth <= 320) {
      deviceWidth = 320
      }
      document.documentElement.style.fontSize = (deviceWidth / 7.5 ) + 'px'
      //这里设置的比例是100px=1rem,例如，宽度为100px时，可以直接写成1rem。
    }

  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-back' : 'slide-go'
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  
  /* color: #2c3e50;
  margin-top: 60px; */
  font-size :.14rem;
  width:100%;
  /* max-width:10rem; */
  /* min-width:320px; */
  height:100vh;
  overflow: auto;
  /* border:1px solid ; */
  /* color:#FF6B00; */
  position: relative;
}
.icon {
  width: 0.5rem; height: 0.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
::-webkit-scrollbar {display:none}
.prod-app,#index{
  position:absolute;
  top:0;
  left:0;
}
/* 路由跳转 */
.slide-go-enter-active,.slide-go-leave-active,.slide-back-enter-active,.slide-back-leave-active{
  -webkit-transition: transform 0.4s cubic-bezier(.55,0,.1,1);
  transition: transform 0.4s cubic-bezier(.55,0,.1,1);
   /* transition-delay: 0.5s; */
}
.slide-back-leave-to,.slide-go-enter{
  transform: translate3d(100%,0,0);
}
.slide-go-leave,.slide-go-enter-to,.slide-back-leave,.slide-back-enter-to{
  transform:translate3d(0%,0,0)
}
.slide-back-enter,.slide-go-leave-to{
  transform:translate3d(-100%,0,0)
  
}

</style>
