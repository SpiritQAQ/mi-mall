<template>
<div class='top-bar'>
  <div class="loading-bar">
    <transition name="loading">
      <div class="loading" v-show="loadingShow"></div>
    </transition>
  </div>
  <div class="search-box">
    <div class="logo-box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaomi1"></use>
      </svg>
    </div>
    <div class="input-box" @click="linkToSearch()">
      <svg class="icon icon-search" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input class="search" type="text">
    </div>
    <div class='user-box'>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-saoma"></use>
      </svg>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    name:'TopBar',
    data(){
      return {
        loadingShow:false
      }
    },
    mounted(){
        this.loadingShow = true
    },
    methods:{
      linkToSearch(){
        preventDefault();
        this.$router.push("/search")
      }
    }
  }
</script>

<style lang='scss'>
  .top-bar{
    // position:fixed;
    width:100%;
    z-index:3;
    background-color: #fff;
    .loading-bar{
      height:2px;
      content:'';
      .loading{
        width:0;
        height:2px;
        background-color: #FF6B00;
        opacity: 0.7;
      }
      .loading-enter-active{
        animation: loading .4s cubic-bezier(1.0, 0.5, 0.1, 1.0);
      }
      @keyframes loading {
        0%{width:0;}99%{width:100%}
        100%{width:0;}
      }
    }
    .search-box{
      display: -webkit-flex;  
      display:flex;
      justify-content: center;
      padding:.1rem 0 .15rem;
      .logo-box{
        padding:0 .25rem;
      }
      .input-box{
        position: relative;
        width:75%;
        
        // -webkit-appearance: none;
        .icon-search{
          position: absolute;
          top:.05rem;
          left:.075rem;
          width:.4rem;
          height:.4rem;
          color:#bbb;
        }
        .search{
          outline: none;
          border-radius: 7px;
          box-sizing: border-box;
          border:1px solid #ccc;
          padding:0 0 0 .5rem;
          background-color: #eeeeee;
          width:100%;
          height:0.5rem;
          font-size:.16rem;
        }
      }
      .icon{
        width:.5rem;
        height:.5rem
      } 
      .user-box{
        padding:0 .25rem;
      }
    }
  }
</style>
  

