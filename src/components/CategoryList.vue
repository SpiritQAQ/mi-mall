<template>
  <div class="category-list">
    <div class="top-bar" style="border-bottom:1px solid #ccc;">
      <div class="search-box">
        <div class="input-box" style="width:90%;">
          <svg class="icon icon-search" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
          <input class="search" type="text">
        </div>
      </div>
    </div>
    <div class="list-container" v-bind:style="{height:categoryListHeight+'px'}">
      <!-- <div class="swiper-pagination left-bar" ref="pagination" slot="pagination"> -->
      <div class="left-bar" v-bind:style="{height:categoryListHeight+'px'}">
        <div v-for="(item,key) in categoryList" class="c-tab" 
             :class="{'c-tab-active':activeTab==key}" 
             @click="clickTab(key)">
             <!-- v-bind:aria-label="`Go to slide `+(index+1)"              -->
          {{item.name}}
        </div>
      </div>      
      <swiper :options="swiperOption" ref="mySwiper" class="right-bar" @transitionEnd = "changeTab">
        <swiper-slide v-for="list in categoryList" :key="list.name">
          <div class="c-item-header">{{list.name}}</div>
          <div class="c-item-container">
            <div class="item-box" v-for="item in list.children">
              <img v-bind:src="item.src" alt="">
              <div class="item-name">{{item.name}}</div>
            </div>
          </div>         
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name : "CategoryList", 
  components: {
    swiper,
    swiperSlide
  },
  props:["categoryListHeight"],
  data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
          // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          direction : 'vertical',
          touchRatio:0.5,
          observe:true,
          observeParents:true,
          // slidesPreView:2,
          spaceBetween:"-25%",
//           onSlideChangeEnd: function(swiper){ 
// 　　　      swiper.update(); 
//           }
          // pagination: {
          //   el: '.swiper-pagination',
          //   type:"custom",
          //   bulletClass : 'c-tab',
          //   // bulletActiveClass: 'c-tab-active',
          //   clickable:true,
            
          // },
        },
        activeTab : 1
      }
  },mounted(){
    setTimeout(()=>{
      this.$refs.mySwiper.update()
      console.log(123)
    },1000)//swiper配置不生效，重新初始化
    // console.log(this.$refs.mySwiper)
    // console.log(this.$refs.mySwiper.swiper.slideTo(0,1000,false))
    // this.$refs.mySwiper.swiper.slideTo(1,1000,false)

    // this.$nextTick(function(){
    //   console.log(this.$refs.mySwiper.swiper.init())
    // })
  },
  watch:{
    // activeTab : function(val){
    //   this.tabTo(val)
    // }
  },
  methods:{
    changeTab(){
      let activeIndex = this.swiper.activeIndex
      if(activeIndex!==this.activeTab){
        this.activeTab = activeIndex
      }
    },
    clickTab(val){
      console.log(val)
      this.activeTab = val
      this.swiper.slideTo(val,500,false)
    }
  },
  watch:{

  },
  computed:{
    categoryList(){
      return this.$store.state.categoryList
    },
    swiper(){
      return this.$refs.mySwiper.swiper
    },
    // tabActiveIndex(){
//       return console.log(_this.$refs.mySwiper) 
//    undefined 的原因
//       计算属性在created阶段之后mounted之前执行。
// $refs的项在mounted之后才存在。
//     }
  }
}
</script>

<style lang="scss">
  .category-list{
    height:100%;
    overflow: hidden;
  }
  .list-container{
    height:100%;
    overflow: hidden;
  }
  .left-bar{
    position: absolute;
    transition: 300ms opacity;
    text-align: center;
    height:100%;
    width:20%;
    border-right:1px solid #ccc;
    top:0.75rem;
    overflow: scroll;
    z-index:5;
    div{
      font-size:0.25rem;
      padding:0.41rem 0;
    }
  }
  .right-bar{
    padding-left:20%;
    overflow: hidden;
  }
  .item-box{
    width:33%;
    float: left;
    img{
      width:66%;
    }
    .item-name{
      margin:0.2rem 0 0.5rem  ;
      color:#777
    }
  }
  .c-tab-active{
    transform: scale(1.3);
    color:#FF6b00;
  }
  .c-item-header{
    font-size:0.3rem;
    margin:0.5rem 0 ;
    position: relative;
  }
  .c-item-header:after,.c-item-header:before{
    position: absolute;
    right:1rem;
    top:0.15rem;
    width:1.2rem;
    // border:1px solid ;
    background-color: #ccc;
    height:0.02rem ;
    content:''
  }
  .c-item-header:before{
    left:1rem;
  }


</style>
