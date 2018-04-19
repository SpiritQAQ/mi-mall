<template>
  <div id="app">
    <!-- <router-view/> -->
    <TopBar/>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar"
export default {
  name: 'App',
  components:{TopBar}
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
  font-size :14px;
  width:50rem;
  border:1px solid ;
  color:#FF6B00;
}
</style>
