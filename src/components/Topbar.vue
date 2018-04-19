<template>
<div class='top-bar'>
  <div class="loading-bar"></div>
  <div class="search-box">
    <div class="logo-box">
      <span class="iconfont icon-xiaomi"></span>
    </div>
    <input id="search" type="text">
    <div class='user-box'></div>
  </div>
</div>
</template>

<script>
  export default {
    name:'TopBar'
  }
</script>

<style lang='scss'>
  .topbar{
    display: -webkit-flex;  
    display:flex;
    justify-content: space-around;
    .logo-box{
      width:1rem;
      content: "\E649"
    }
  }
</style>
  

