<template>
  <footer>
    <div class="footer-item" @click="changeTo(1,'PageMain')" :class="{active:footerTab==1}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
      </div>
      <div class="icon-header">首页</div>
    </div>
    <div class="footer-item" @click="changeTo(2,'CategoryList')" :class="{active:footerTab==2}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenlei1"></use>
        </svg>
      </div>
      <div class="icon-header">分类</div>
    </div>
    <div class="footer-item" @click="changeTo(3,'Gouwuche')" :class="{active:footerTab==3}">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche2"></use>
        </svg>        
      </div>
      <div class="icon-header">
        购物车
        <div class="showCartLength" v-show="cartLength!==0">
          {{cartLength}}
        </div>
        </div>
    </div>
    <div class="footer-item" @click="changeTo(4,'UserPage')" :class="{active:footerTab==4}">
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
      }
    },
    methods:{
      changeTo(num,path){
        this.$store.commit('changeFooterTab',num)
        // this.$router.push(path)
        this.$router.push('/index')
        
      },
    },
    computed:{
      footerTab(){
        return this.$store.state.footerTab
      
      },
      cartLength(){
        return this.$store.getters.cartLength
      }


    }
  }
</script>

<style lang="scss">
  footer{
    z-index:10;
    background-color: #fff;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 1rem;
    border-top:0.01rem solid #aaa;
    box-shadow: 0px 0px 10px 1px #ccc;
    display: flex;
    justify-content: space-around;
    .footer-item{
      padding:.1rem;
      position: relative;
      .showCartLength{
          position: absolute;
          top:.04rem;
          right:0rem;
          width:0.3rem;
          height:0.3rem;
          line-height:0.33rem;
          text-align: center;
          background-color: #FF6b00;
          border-radius: .3rem;
          color:#fff
        }
    }
    .icon-header{
      font-size:.22rem;
      margin-top:0.1rem;
    }
    .active{
      color : #FF6B00;
    }
  }
</style>
