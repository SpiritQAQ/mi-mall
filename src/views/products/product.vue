<template>
  <div class="prod-app">
    <div class="back-btn" @click="linkBack()">
      <div class="icon-box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiye"></use>
        </svg>
      </div>   
    </div> 
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in info.banner" :key="item.haha" >
        <div class='prod-imgCarr'>
          <img v-bind:src="item.src" alt="">
        </div>
      </swiper-slide>
       <div class="swiper-pagination" ref="pagination" slot="pagination"></div>
    </swiper>
    <div class="prod-main">
      <p class='prod-title'>{{info.title}}</p>
      <p class='prod-bigContent'>{{info.bigContent}}</p>
      <p class='prod-smallContent'>{{info.smallContent}}</p>
      <div class='prod-price-row clearfix'>
        <div class="new-price">￥{{info.money}}</div>
        <div v-if="info.noMoney" class="old-price">￥{{info.noMoney}}</div>
        <div class="price-tip" v-for="tip in info.tips">{{tip}}</div>
      </div>
      <div class="choose-rows">
        <span>分期</span><span>小米分期/花呗分期</span><span>></span>
      </div>
      <div class="choose-rows">
        <span>已选</span><span>{{info.chouse}}</span><span>></span>
      </div>
    </div>
    <div class="prod-imgs" >
      <div class="prod-imgs-box" v-for='url in info.pBox' :key="url">
        <img v-bind:src="url" alt="">
      </div>
    </div>
    <div class="prod-footer  clearfix">
        <div class="prod-footer-icon" @click="linkTo('/index')">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-home"></use>
            </svg>
          </div>
          <div class="icon-header">首页</div>
        </div>
        <div class="prod-footer-icon">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche2"></use>
            </svg>
          </div>
          <div class="icon-header" @click="linkToCart()">购物车</div>
        </div>
        <div class="jiarugouwuche" @click="addToCart(info)">加入购物车</div>
    </div>
  
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  import { mapActions} from 'vuex'
  
  export default {
    name:'products',
    components:{
      swiper,swiperSlide
    },
    props:['id'],
    data(){
      return{
        info:{},
        loaded:false,
        hide:true,
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: true,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          // autoHeight: true,
          mousewheelControl : false,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          watchSlidesProgress : true,
          watchSlidesVisibility : true
          
        },
      
      } 
    },
    watch:{
      $route(){
        this.getData()
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      ...mapActions([
        "addProductToCart"
      ]),
      linkTo(path){
        this.$router.push(path)
      },
      linkToCart(){
        this.$router.push('/index')
        this.$store.commit('changeFooterTab',3)
      },
      linkBack(){
        this.$router.go(-1)
      },
      addToCart(info){
        let cartInfo = {}
        console.log(info)
        cartInfo.price = info.money
        // cartInfo.title = info.chouse.replace(/x1/,'')
        cartInfo.title = info.title
        cartInfo.id = info.id
        cartInfo.imgSrc = info.banner[0]
        this.$store.dispatch('addProductToCart',cartInfo)
        // let idExist  = this.$store.state.cart.added.find((info)=>{
        //   return info.id == info.id   //es6 Array.find 返回满足提供的测试函数的第一个元素的值。否则返回undefined
        // })
        // if(!idExist){

        //   this.cartInfo.num = 1

        //   this.$store.commit('addToCart',this.cartInfo)
        //   this.cartInfo = [] 
        // }
        
        
      },
      getData(){
        this.loaded = false
        this.hide = true

        let id = this.id
        if(!id){
          this.$router.replace('/error/404')
        }
        axios.get('/static/server/'+id+'.json')
          .then(response=>{
            this.info = eval('(' + response.data  + ')') //拿到的是字符串,将字符串转化为对象
            //意外的是JSON.parse不能用  很奇怪
            this.loaded = true
            // console.log( response.data)
          })
          .catch(error=>{
            this.$router.replace('/error/404')
            // console.log('wtf')
          })
        
      }
    }
  }
</script>

<style lang='scss'>
  .prod-app{
    width:100%;
    img{width:100%;}
    position: relative;
    overflow: hidden;
  }
  .prod-main{
    margin:0.3rem;
    margin-top:0.4rem;
    margin-bottom: 0.5rem;
    text-align: left;
    font-size:0.25rem;
  }
  .prod-title{
    font-size:.45rem;
    margin-bottom: 0.15rem;
  }
  .prod-bigContent{
    color:#FF6b00;
    font-size:0.25rem;
    line-height: 0.35rem;   
    margin-bottom: 0.1rem;
  }
  .prod-smallContent{
    color:#666;
    font-size:0.25rem;
    margin-bottom: 0.3rem;
    line-height: 0.4rem;    
  }
  .prod-price-row{
    margin-bottom: 0.3rem;
    .new-price{
      float: left;
      font-size:.45rem;
      color:#FF6b00;
    }
    .old-price{
      float: left;
      margin:0.15rem 0.1rem 0 0.2rem;
      text-decoration: line-through
      
    }
    .price-tip{
      float: left;
      background: #FF6b00;
      margin:0.05rem;
      padding:0.05rem;
      border-radius: 0.05rem;
      color:#fff
    }
  }
  .choose-rows{
    margin-bottom:0.2rem;
    background: #eee;
    border:1px solid #ccc;
    padding:0.3rem;
    font-size:0.25rem;
    border-radius: 0.1rem;
    position: relative;
    :first-child{
      color:#666;
      margin-right:0.3rem;
    }
    :last-child{
      font-size:0.4rem;
      position: absolute;
      top:0.2rem;
      right:0.3rem;
      color:#666
    }
  }
  .prod-footer{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background: #fff;
    border-top:1px solid #aaa;
    box-shadow: 0px 0px 10px 1px #ccc;
    .prod-footer-icon{
      width:25%;
      float: left;
      padding:0.1rem 0 ;

      .icon-header{
        font-size:0.25rem;
        padding-top:0.1rem;
      }
      
    }
    .jiarugouwuche{
      background-color: #FF6b00;
      position: absolute;;
      left:50%;
      width:50%;
      height:100%;
      color:#fff;
      font-size:.3rem;
      line-height:1rem;
      }
  }
  .back-btn{
    position: absolute;;
    color:#fff;
    top:0.5rem;
    left:0.5rem;
    z-index:10;
    width:0.7rem;
    height:0.7rem;
    border-radius: 0.7rem;
    background-color: #555;
    box-shadow: 0px 0px 50px 1px #ccc;
    .icon-box{
      position: relative;
      top:0.08rem;
      left:-0.02rem;
    }
  }
  .clearfix::after{
    content:'';
    clear:both;
    display: block;
  }
  .swiper-pagination-bullet-active{
  background-color: #FF6b00;
}
</style>

