<template>
  <footer>
    <div class="footer-item" @click="changeTo(1)" :class="{active:showingTab==1}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
      </div>
      <div class="icon-header">首页</div>
    </div>
    <div class="footer-item" @click="changeTo(2)" :class="{active:showingTab==2}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenlei1"></use>
        </svg>
      </div>
      <div class="icon-header">分类</div>
    </div>
    <div class="footer-item" @click="changeTo(3)" :class="{active:showingTab==3}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche2"></use>
        </svg>        
      </div>
      <div class="icon-header">购物车</div>
    </div>
    <div class="footer-item" @click="changeTo(4)" :class="{active:showingTab==4}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>        
      </div>
      <div class="icon-header">我的</div>
    </div>
  </footer>
</template>

<script>
  export default {
    name :'Footer',
    data (){
      return {
        showingTab:1
      }
    },
    methods:{
      changeTo(num){
        this.showingTab = num
      }


    }
  }
</script>

<style lang="scss">
  footer{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 1rem;
    border-top:1px solid #aaa;
    box-shadow: 0px 0px 10px 1px #ccc;
    display: flex;
    justify-content: space-around;
    .footer-item{
      padding:.1rem
    }
    .icon-header{
      font-size:.18rem;
      margin-top:0.1rem;
    }
    .active{
      color : #FF6B00;
    }
  }
</style>
