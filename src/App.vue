<template>
  <div id="app">
    <!-- <router-view/> -->

    <PageMain/> 
    <Footer/>
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
  mounted(){
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
