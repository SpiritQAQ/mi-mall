<template>
  <div class="page-main">
    <TopBar ref="topBar"/>
    <div class="main-tab" ref="mainTab">
      <ul class= 'item-container'>
        <li v-for="(item,key) in navTabList" class="tab-item" 
            @click="clickTab(key)" :class="{active:navTab==key}">{{item.name}}</li>
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
  computed:{
    navTabList(){
      return this.$store.state.navTabList
    },
    navTab(){
      return this.$store.state.navTab
    }
  },
  methods:{
    clickTab(key){
      this.showingTab = key
      this.$store.commit('changeNavTab',key)
    }
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
        justify-content: space-around;
        width:120%;
        white-space: nowrap;
        .tab-item{
          background: #fff;
          list-style: none;
          font-size:.2rem;
          padding:0.2rem; 
        }
        .active{
        color : #FF6B00;
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
