<template>
  <div class="prod-app">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in info.banner" >
        <div class='prod-imgCarr'>
          <a href=""><img v-bind:src="item.src" alt=""></a>
        </div>
      </swiper-slide>
       <div class="swiper-pagination" ref="pagination" slot="pagination"></div>
    </swiper>
    <h2 class='prod-title'>{{info.title}}</h2>
    <p class='prod-bigContent'>{{info.bigContent}}</p>
    <p class='prod-smallContent'>{{info.smallContent}}</p>
    <div class='prod-price-row'>
      <div class="new-price">{{info.money}}</div>
      <div class="old-price">{{info.noMoney}}</div>
      <div class="price-tip">{{info.tips[0]}}</div>
    </div>
    <div class="choose-rows">
      <span>分期</span><span>小米分期/花呗分期></span><span><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-you"></use>
              </svg></span>
    </div>
    <div class="choose-rows">
      <span>已选</span><span>{{info.chouse}}</span>
    </div>
    <div class="prod-imgs" >
      <div class="prod-imgs-box" v-for='url in info.pBox'>
        <img v-bind:src="url" alt="">
      </div>
    </div>   
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  
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
          autoHeight: true,
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
            console.log( response.data)
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
  .prod-imgCarr{
    // width:100%;
    img{width:100%;}
  }

</style>

