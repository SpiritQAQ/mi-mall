<template>
  <div class="gouwuche">
    <div class="g-header-container" ref="gHeader">
      <div class="g-header">购物车</div>
      <div class="g-editor" v-show="!editorStatus" @click="editorStatus=true">编辑</div>
      <div class="g-editor" v-show="editorStatus" @click="editorStatus=false">完成</div>
    </div>
    <div class="g-content" v-bind:style=" { height: `${cartContentHeight}px`}">
      <div class="no-item" v-show="cart.length == 0">
        <div >购物车还是空的</div>
        <div class="toPageMain" @click="toPageMain()">去逛逛</div>  
      </div>   
      <div class="cart-list" v-for="item in cart">
        <div class="cart-item clearfix">
          <div class="choose-btn">
            <input type="checkbox" v-bind:checked="item.checkBoxStatus === true" 
            @click="checkBoxToggle(item.info)" class="check-box" v-bind:id="item.info.id">
            <label v-bind:for="item.info.id"></label>
          </div>
          <div class="item-img"><img v-bind:src="item.info.imgSrc.src" alt="" @click="pushToProd(item.info.id)"></div>
          <div class="item-info">
            <div class="item-title" @click="pushToProd(item.info.id)">{{item.info.title}}</div>
            <div class="item-price"><span>￥</span>{{item.info.price}}</div>
          </div>
          <div class="item-num">
            <div class="num-" @click="reduceItemNum(item.info)">-</div>
            <div class='num'>{{item.num}}</div>
            <div class="numadd" @click="incrementItemNum(item.info)">+</div>
          </div>
        </div>
      </div>
      <div class="guess-like">
        <div class="guess-header">
          <div>猜你喜欢</div>
          <div class="cool">每一款都酷到没朋友</div>
        </div>
        <div class="img-row clearfix">
          <div class="page1-goods" v-for="item in goodsOfPage1">
            <a v-bind:href="'#'+item.href"><img v-lazy="item.src" alt=""></a>
            <h4>{{item.title}}</h4>
            <p>{{item.con}}</p>
            <div>￥{{item.money}}</div>
          </div>
        </div>
        <div class="img-row clearfix">
          <div class="page1-goods" v-for="item in goodsOfPage1">
            <a v-bind:href="'#'+item.href"><img v-lazy="item.src" alt=""></a>
            <h4>{{item.title}}</h4>
            <p>{{item.con}}</p>
            <div>￥{{item.money}}</div>
          </div>
        </div>
        <div class="img-row clearfix">
          <div class="page1-goods" v-for="item in goodsOfPage1">
            <a v-bind:href="'#'+item.href"><img v-lazy="item.src" alt=""></a>
            <h4>{{item.title}}</h4>
            <p>{{item.con}}</p>
            <div>￥{{item.money}}</div>
          </div>
        </div>                   
      </div>
    </div>
    <div class="g-footer" ref="gFooter" v-show="cart.length>0">
      <div class="g-footer-tab g-footer-tab1 clearfix" v-show="!editorStatus">
        <div class="quanxuan">
          <input type="checkbox" class="check-box" id="quanxuan1"   @click="checkBoxLeaderToggle()">
          <label for="quanxuan1"></label>
          <span >全选</span>
        </div>
        <div class="heji">
          <span>合计:</span><div class="heji-price"><span>￥</span>{{cartTotalPrice}}</div>
        </div>
        <div class="g-pay">结算({{cartCheckedLength}})</div>
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
    },
    toPageMain(){
      this.$store.commit("changeFooterTab",1)
    },
    pushToProd(ID){
      this.$router.push({name:'products',params: { id: ID }})
    }    
  },
  computed:{
    cart(){
      return this.$store.state.cart.items
    },
    cartLength(){
      return this.$store.getters.cartLength
    },
    cartCheckedLength(){
      return this.$store.getters.cartCheckedLength
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice
    },
    goodsOfPage1(){
      return this.$store.state.goodsOfPage1
    },


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
  .g-content{
    overflow: scroll;
    z-index:1;
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
    z-index:2;
    background-color: #fff;
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
  .no-item{
    background-color: #eee;
    position: relative;
    :first-child{
      color:#666;
      height:0.8rem;
      line-height: 0.8rem;
      margin-left:-0.5rem;
    }
    .toPageMain{
      padding:0.1rem;
      border:0.01rem solid #555;
      color:#555; 
      position:absolute;
      top:0.15rem;
      right:2rem;
    }
  }
  .guess-like{
    .guess-header{
      background-color: #eee;
      padding:0.2rem;
      :last-child{
        color:#555;
        position:relative
      }
      :last-child:after,:last-child:before{
        position: absolute;
        right: 0.8rem;
        top: 0.15rem;
        width: 1.4rem;
        background-color: #999;
        height: 0.02rem;
        content: '';
      }
      :last-child:before{
        left:0.8rem;
      }
      :first-child{
        color :#FF6b00;
        font-size : 0.3rem;
        padding-bottom:0.1rem;
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
