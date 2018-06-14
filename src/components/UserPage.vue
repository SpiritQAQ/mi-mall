<template>
  <div class="user-page " v-bind:style="{height : noFooterHeight+'px'}">
    <div class="u-header" ref="u-header" @click="pushToBuilding()">
        <div class="user-photo">
          <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/normal-face.png" alt="">
        </div>
        <p>登录 / 注册</p>
    </div>
    <div class="u-content">
      <div class="h-rows1 h-rows">
        <div class="h-row1 h-row" @click="pushToBuilding()">
          <div class="h-row-name">我的订单</div><span class="quanbudingdan">全部订单</span>
        </div>
        <div class="h-icons" @click="pushToBuilding()">
          <div class="h-icon">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-qianbao "></use></svg>
            <div>待付款</div>       
          </div>
          <div class="h-icon">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-daishouhuo"></use></svg>  
            <div>待收货</div>      
          </div>
          <div class="h-icon">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-duihuakuang4"></use></svg>
            <div>待评价</div>        
          </div>
          <div class="h-icon">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixiuoff"></use></svg>    
            <div>退换修</div>    
          </div>


        </div>
        <div class="h-img">
          <img src="//gdp.alicdn.com/imgextra/i4/1714128138/TB20yMYnkSWBuNjSszdXXbeSpXa-1714128138.jpg" alt="">
        </div>
        <div class="h-rows" @click="pushToBuilding()">
          <div class="h-row">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youhuiquan"></use>
              </svg>
            </div>
            <div class="h-row-name">
              优惠券
            </div>
          </div>
          <div class="h-row">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huiyuanquanyi"></use>
              </svg>
            </div>
            <div class="h-row-name">
              会员中心
            </div>
          </div>
          <div class="h-row h-row-noborder">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qianbao3"></use>
              </svg>
            </div>
            <div class="h-row-name">
              我的钱包
            </div>
          </div>
        </div>
        <div class="h-rows" @click="pushToBuilding()">
          <div class="h-row">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon--fuwu"></use>
              </svg>
            </div>
            <div class="h-row-name">
              服务之家
            </div>
          </div>
          <div class="h-row">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianpu"></use>
              </svg>
            </div>
            <div class="h-row-name">
              小米之家
            </div>
            </div>
          <div class="h-row h-row-noborder">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenlei-copy"></use>
              </svg>
            </div>
            <div class="h-row-name">
              更多功能
            </div></div>          
        </div>
        <div class="h-rows" @click="pushToBuilding()">
          <div class="h-row h-row-noborder">
            <div class="h-row-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
              </svg>
            </div>
            <div class="h-row-name">
              设置
            </div></div>
        </div>
      
    </div>
    </div>


  </div>
</template>

<script>
export default {
  name:"UserPage",
  props:["noFooterHeight"],
  mounted(){
  },
  methods:{
    pushToBuilding(){
      this.$router.push('/error/building')
    }
  }
}
</script>

<style lang="scss">
  .user-page{
    height:100%;
    overflow:scroll;
    .u-header{
      background: #f37d0f url(http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/bg.63c8e19.png) fixed repeat top;
      background-size: 7rem;
      padding:.4rem;
      .user-photo{
        height:.8rem;width:.8rem;
        float: left;
        border:1px solid rgba(0,0,0,0.1);
        border-radius: .4rem;
        overflow: hidden;
      }
      p{
        line-height:.8rem;
        text-align: left;
        padding-left :1.2rem;
        color:#fff;
        font-size:.2rem;
      }
    }
    .h-icons{
      display:flex;
      justify-content: space-around;
      .h-icon{
        margin:.2rem;
        div{
          margin-top:0.2rem;
        }
      }
    }
    .u-content{
      .h-rows{
        border-bottom:0.1rem solid #eee;
      }
      .h-row{
        position: relative;
        line-height:.9rem;
        font-size:.24rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem 0 0rem;
        border-bottom:1px solid #ddd;
        margin-left:1rem;
      }
      .h-row-noborder{
        border:0;
      }
      .h-row-icon{
        position: absolute;
        left:-0.7rem;
        top:0.15rem;
        
      }
      .h-row1{
        border-bottom:1px solid #ddd;
        margin:0;
        padding:0 .4rem 0 .3rem;
        position: relative;
        .quanbudingdan{
          color:#666;
          font-size:.16rem;
          position: absolute; 
          right:.7rem;
        }
        
      }
      .h-row:after{
        content:'>';
        color:#666;
        display:block;
        // position: absolute;
        right:0;
        top:0;
        font-size:.3rem;
      }
    }
  }
</style>
