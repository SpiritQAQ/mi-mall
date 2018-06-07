<template>
  <div class="gouwuche">
    <div class="g-header-container" ref="gHeader">
      <div class="g-header">购物车</div>
      <div class="g-editor" v-show="!editorStatus" @click="editorStatus=true">编辑</div>
      <div class="g-editor" v-show="editorStatus" @click="editorStatus=false">完成</div>
    </div>
    <div class="g-content" v-bind:style=" { height: `${cartContentHeight}px`}">   
      <div class="cart-list" v-for="item in cart">
        <div class="cart-item clearfix">
          <div class="choose-btn">
            <input type="checkbox" v-bind:checked="item.checkBoxStatus === true" 
            @click="checkBoxToggle(item.info)" class="check-box" v-bind:id="item.info.id">
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
            <div class="numadd" @click="incrementItemNum(item.info)">+</div>
          </div>

        </div>
      </div>
    </div>
    <div class="g-footer" ref="gFooter">
      <div class="g-footer-tab g-footer-tab1 clearfix" v-show="!editorStatus">
        <div class="quanxuan">
          <input type="checkbox" class="check-box" id="quanxuan1"   @click="checkBoxLeaderToggle()">
          <label for="quanxuan1"></label>
          <span >全选</span>
        </div>
        <div class="heji">
          <span>合计:</span><div class="heji-price"><span>￥</span>{{cartTotalPrice}}</div>
        </div>
        <div class="g-pay">结算({{cartLength}})</div>
      </div>
      <div class="g-footer-tab g-footer-tab2 clearfix" v-show="editorStatus">
        <div class="quanxuan">
          <input type="checkbox" class="check-box" id="quanxuan2"   @click="checkBoxLeaderToggle()">
          <label for="quanxuan2"></label>
          <span>全选</span>
        </div>
        <div class="clearfix">
          <div class="shoucang">移入收藏</div>
          <div class="g-delete" @click ="deleteCheckedItem()">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Gouwuche",
  props:["cartContentHeight"],
  data(){
    return {
      editorStatus:false
    }
  },
  methods:{
    incrementItemNum(info){
      this.$store.commit('incrementItemNum',info)
    },
    reduceItemNum(info){
      this.$store.commit('reduceItemNum',info)
    },
    checkBoxToggle(info){
      this.$store.commit("checkBoxToggle",info)
    },
    checkBoxAllTo(status){
      this.$store.commit("checkBoxAllTo",status)
    },
    checkBoxLeaderToggle(){
      this.$store.dispatch("checkBoxAllChange")
    },
    deleteCheckedItem(){
      this.$store.commit("deleteCheckedItem")
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart.items
    },
    cartLength(){
      return this.$store.getters.cartLength
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice
    }

  }
  
}
</script>

<style lang="scss">
  .gouwuche{height:100%;}
  .g-header-container{
    position: relative;
    border-bottom: 0.01rem solid #ccc;
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
      border-bottom: 0.01rem solid #ddd;
      position:relative;
      .choose-btn{
        float:left;
        width:1.2rem;
        margin:0.5rem auto;
      }
      .item-img{
        float:left;
        width:1.2rem;
        img{width:100%;border:0.01rem solid #ccc;border-radius: 0.05rem;}
        
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
        .numadd{
          line-height:0.35rem;
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
  .g-footer{
    position:fixed;

    bottom:1rem;
    width:100%;
    height:0.8rem;
    border-top:0.01rem solid #ccc;
    .g-footer-tab{
      height:100%;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .quanxuan{
        width:1.5rem;
        font-size:0.25rem;
        padding-top:0.2rem;
        span{position: relative;top:-0.1rem;}
      }
      .heji{
        margin-left:2rem;
        margin-right:1.2rem;
        position:relative;
        font-size:0.28rem;
        padding-top:0.3rem;
        .heji-price{
          position:absolute;
          top:0.3rem;
          left:0.6rem;
          color:#FF6b00;
          span{
            font-size:0.2rem;
            position: relative;
            top:-0.07rem;
            left:0.04rem;
          }
        }
      }
      .g-pay{
        width:2.1rem;
        height:100%;
        background-color:#FF6b00;
        font-size:0.3rem;
        color:#fff;
        line-height:0.8rem;
      }
      .shoucang{
        background-color: #ccc;
        float:left;
        height:100%;
        width:2.1rem;
        line-height:0.8rem;
        font-size:0.26rem;
        color:#fff
      }
      .g-delete{
        float:right;
        height:100%;
        width:2.1rem;
        line-height:0.8rem;
        font-size:0.26rem;
        background-color:rgb(233, 24, 24);
        margin-right:-1.8rem;
        color:#eee
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
