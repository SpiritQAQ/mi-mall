<template>
  <div id="index">
    

    <PageMain ref="pageMain" v-bind:content-height = "contentHeight" v-show="footerTab==1"/>
    <CategoryList ref='categoryList' v-bind:categoryListHeight = "categoryListHeight" v-show="footerTab ==2"/> 
    <Gouwuche ref='gouwuche' v-bind:cartContentHeight="cartContentHeight" v-show="footerTab==3"/>
    <UserPage ref ="userPage" v-show="footerTab==4" v-bind:noFooterHeight = "noFooterHeight"/>
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
  name: 'index',
  components:{TopBar,Footer,PageMain,CategoryList,Gouwuche,UserPage},
  store,
  data(){
    return {
      contentHeight : 0,
      categoryListHeight:0,
      noFooterHeight:0,
      cartContentHeight:0
    }
  },
  computed:{
    footerTab(){
      return this.$store.state.footerTab
    }
  },
  methods:{
    getHeight : function (){
      let appHeight = this.$el.offsetHeight
      let pageMainHeight =this.$refs.pageMain.$el.offsetHeight
      let footerHeight = this.$refs.footer.$el.offsetHeight
      let searchHeight = this.$refs.pageMain.$refs.topBar.$el.offsetHeight
      let mainTabHeight = this.$refs.pageMain.$refs.mainTab.offsetHeight
      let cateHeight = this.$refs.categoryList.$el.offsetHeight
      let cateSearchHeight = this.$refs.categoryList.$refs.catTopBar.offsetHeight
      this.cartContentHeight = appHeight - footerHeight 
      -this.$refs.gouwuche.$refs.gHeader.offsetHeight-this.$refs.gouwuche.$refs.gFooter.offsetHeight  
      this.contentHeight = pageMainHeight - footerHeight - searchHeight - mainTabHeight
      this.categoryListHeight = appHeight - footerHeight - cateSearchHeight 
      this.noFooterHeight = appHeight - footerHeight
    },
    
    
    fnResize: function() {
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
  updated(){
    this.fnResize()
    this.getHeight()
  },
  mounted(){
    let _this = this
    this.fnResize()
    this.getHeight()
    // console.log(this.contentHeight +'fa')
    window.onresize = function () {
      this.fnResize()
      this.getHeight()
    }


  }
}
</script>

<style>
#index {
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
