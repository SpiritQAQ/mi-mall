<template>
  <div class="page-main">
    <TopBar ref="topBar"/>
    <div class="main-tab" ref="mainTab">
      <ul class= 'item-container'>
        <li class="tab-item">推荐</li>
        <li class="tab-item">手机</li>
        <li class="tab-item">智能</li>
        <li class="tab-item">电视</li>
        <li class="tab-item">电脑</li>
        <li class="tab-item">全面屏</li>
        <li class="tab-item">生活周边</li>
        <li class="tab-item">盒子</li>
        <li class="tab-item">艺术</li>
      </ul>
    </div>
    <div class="content-box" v-bind:style="{height:contentHeight+'px'}">
      <Carrousel/>
    </div>
  </div>  
</template>

<script>
import Carrousel from "./Carrousel"
import TopBar from "@/components/TopBar"
require('swiper/dist/css/swiper.css')

export default {
  name:"PageMain",
  components:{Carrousel,TopBar},
  data(){
    return {
      
    }
  },
  props:['contentHeight'],
  mounted(){
    console.log(this.contentHeight)
    
  }
}
</script>

<style lang="scss">
  html{height:100%;}
  body{height:100%;}
  .page-main{
    height:100%;
    .main-tab{
      overflow: scroll;
      border-bottom: 1px solid #ccc;
      // box-shadow: 0 3px 1px 1px #ccc;
      z-index:5;
      background-color: #fff;
      .item-container{
        display: flex;
        justify-content: space-between;
        width:120%;
        white-space: nowrap;
        .tab-item{
          background: #fff;
          list-style: none;
          font-size:.2rem;
          padding:0.2rem;
        }
      }
    }
    .content-box{
      background: #ccc;
      z-index:1;
      overflow: scroll;
    }
}  
</style>
