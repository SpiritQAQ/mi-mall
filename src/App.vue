<template>
  <div id="app">
    

    <PageMain ref="pageMain" v-bind:content-height = "contentHeight" v-show="footerTab==1"/>
    <CategoryList ref='categoryList' v-bind:categoryListHeight = "categoryListHeight" v-if="footerTab ==2"/> 
    <Gouwuche ref='gouwuche' v-show="footerTab==3"/>
    <UserPage ref ="userPage" v-show="footerTab==4" v-bind:noFooterHeight = "noFooterHeight"/>
    <!-- <router-view></router-view> -->
    <Footer ref="footer"/>
    
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
      contentHeight : 0,
      categoryListHeight:0,
      noFooterHeight:0
    }
  },
  computed:{
    footerTab(){
      return this.$store.state.footerTab
    }
  },
  mounted(){
    let _this = this
    fnResize()
    getHeight()
    // console.log(this.contentHeight +'fa')
    window.onresize = function () {
      fnResize()
      getHeight()
    }
    function getHeight(){
      let pageMainHeight =_this.$refs.pageMain.$el.offsetHeight
      let footerHeight = _this.$refs.footer.$el.offsetHeight
      let searchHeight = _this.$refs.pageMain.$refs.topBar.$el.offsetHeight
      let mainTabHeight = _this.$refs.pageMain.$refs.mainTab.offsetHeight
      _this.contentHeight = pageMainHeight - footerHeight - searchHeight - mainTabHeight
      _this.categoryListHeight = pageMainHeight - footerHeight - searchHeight 
      _this.noFooterHeight = pageMainHeight - footerHeight
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
  height:100%;
  overflow: auto;
  /* border:1px solid ; */
  /* color:#FF6B00; */
  /* position: relative; */
}
.icon {
  width: 0.5rem; height: 0.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
::-webkit-scrollbar {display:none}
</style>
