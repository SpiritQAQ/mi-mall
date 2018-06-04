<template>
  <div class="gouwuche">
    <div class="g-header-container">
      <div class="g-header">购物车</div>
      <div class="g-editor">编辑</div>
    </div>
    <div class="g-content">   
      <div class="cart-list" v-for="item in cart">
        <div class="cart-item clearfix">
          <div class="choose-btn">
            <div class="haha">haha</div>
          </div>
          <div class="item-img"><img v-bind:src="item.info.imgSrc.src" alt=""></div>
          <div class="item-info">
            <div class="item-title">{{item.info.title}}</div>
            <div class="item-price"><span>￥</span>{{item.info.price}}</div>
          </div>
          <div class="item-num">
            <span>-</span>
            <span>{{item.num}}</span>
            <span>+</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Gouwuche",
  data(){
    return {
      
    }
  },
  watch:{

  },
  computed:{
    cart(){
      return this.$store.state.cart.items
    }
  }
  
}
</script>

<style lang="scss">
 
  .g-header-container{
    position: relative;
    border-bottom: 1px solid #ccc;
    padding:0.3rem 0 0.2rem;
    .g-header{
      font-size:0.36rem;
    }
    .g-editor{
      font-size:0.3rem;
      position: absolute;
      right:0.5rem;
      top:0.35rem;
      color:#555
    }
  }
  .cart-list{
    .cart-item{
      // height:1.5rem;
      padding:0.3rem 0;
      border-bottom: 1px solid #ddd;
      .choose-btn{
        float:left;
        width:1rem;
        height:100%;
        background: blue;
        
      }
      .item-img{
        float:left;
        width:1rem;
        img{width:100%;}
      }
      .item-info{
        float:left
      }
      .item-num{
        float:right;
      }
    }
  }
  .clearfix::after{
    content:"";
    display: block;
    clear:both;
  }
</style>
