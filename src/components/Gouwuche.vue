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
            <input type="checkbox" v-bind:checked="item.checkBoxStatus === true" class="check-box" v-bind:id="item.info.id">
            <label v-bind:for="item.info.id"></label>
          </div>
          <div class="item-img"><img v-bind:src="item.info.imgSrc.src" alt=""></div>
          <div class="item-info">
            <div class="item-title">{{item.info.title}}</div>
            <div class="item-price"><span>￥</span>{{item.info.price}}</div>
          </div>
          <div class="item-num">
            <div class="num-" @click="reduceItemNum(item.info)">-</div>
            <div class='num'>{{item.num}}</div>
            <div class="num+" @click="incrementItemNum(item.info)">+</div>
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
  methods:{
    incrementItemNum(info){
      this.$store.commit('incrementItemNum',info)
    },
    reduceItemNum(info){
      this.$store.commit('reduceItemNum',info)
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart.items
    },

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
      padding:0.2rem 0;
      border-bottom: 1px solid #ddd;
      position:relative;
      .choose-btn{
        float:left;
        width:1.2rem;
        margin:0.5rem auto;
      }
      .item-img{
        float:left;
        width:1.2rem;
        img{width:100%;border:1px solid #ccc;border-radius: 0.05rem;}
        
      }
      .item-info{
        float:left;
        height:100%;
        padding:0.2rem 0.2rem;
        .item-title{
          font-size:0.28rem;
        }
        .item-price{
          font-size:0.28rem;
          margin:0.5rem 0 0 0 ;
          color:#FF6b00;
          text-align: left;

          span{
            font-size: 0.1rem;
            position: relative;
            top:-0.06rem;
          }
        }
      }
      .item-num{
        position: absolute;
        bottom:0.4rem;
        right:0.4rem;
        display: flex;
        div{
          width:0.3rem;height:0.3rem;
          font-size:0.3rem;
          line-height:0.3rem;
          border:0.01rem solid #aaa;
        }
        .num{
          border:0;
          border-top:0.01rem solid #aaa;
          border-bottom:0.01rem solid #aaa;
          font-size:0.28rem;
          line-height:0.32rem;
        }
      }
    }
  }
  .clearfix::after{
    content:"";
    display: block;
    clear:both;
  }
  .check-box{
    display:none;
  }
  .check-box:checked + label{
    /* content: '\2714'; non-break space */
    display: inline-block;
    border-radius: 0.35rem;
    // font-size:0.35rem;
    // vertical-align:middle;
    // padding:0.2rem;
    height:0.41rem;
    width: 0.41rem;
    background:#FF6b00;
    position: relative;
    border:0;
  }
  .check-box+ label{
    display: inline-block;
    border-radius: 0.35rem;
    // vertical-align:middle;
    height:0.35rem;
    width: 0.35rem;
    border:0.03rem solid #ccc;
    position: relative;
    margin: 0 5px
  }
  .check-box:checked + label::before{
    font-weight: bolder;
    font-size:0.30rem;
    content: '\2714';/*cha shi 2716*/
    position: absolute;
    top:0.07rem; 
    left:0.07rem;
    color:#fff
  }
</style>
