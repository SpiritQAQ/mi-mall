<template>
  <div id="app">
    <!-- <router-view/> -->

    <PageMain ref="pageMain" v-bind:content-height = "contentHeight"/> 
    <Footer ref="footer"  />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar"
import cssReset from "../static/css/reset.css"
import Footer from "./components/Footer"
import PageMain from './components/PageMain'
export default {
  name: 'App',
  components:{TopBar,Footer,PageMain},
  data(){
    return {
      contentHeight : 0
    }
  },
  mounted(){
    let _this = this
    fnResize()
    getHeight()
    console.log(this.contentHeight +'fa')
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
