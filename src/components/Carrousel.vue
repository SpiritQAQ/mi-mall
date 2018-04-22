<template>
  <div class="carrousel-container">
  <swiper :options="swiperOption" ref="mySwiper" @transitionEnd = "changeTab">
    <!-- slides -->
    <swiper-slide>
      <!-- <swiper :option="swiper2" ref="miniSwiper">
        <swiper-slide v-for="item in carrousel1">
          <div class="carrsoule-img-box"><a><img v-bind:src="item.src" alt=""></a></div>
        </swiper-slide>
        <div class="swiper-pagination" ref="pagination" slot="pagination"></div>
      </swiper>  -->
      <SmallCarrousel :page="1"/>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="2"/>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="3"/>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="4"/>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="5"/>
    </swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="7"/>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="8"/>
    </swiper-slide>
    <swiper-slide>I'm Slide 9</swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import SmallCarrousel from "./SmallCarrousel"
export default {
  name:'Carrousel',
  components: {
    swiper,
    swiperSlide,
    SmallCarrousel
  },
  data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          mousewheelControl : false,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          watchSlidesProgress : true,
          watchSlidesVisibility : true,
          on:{
            // transitionEnd: function(swiper){
            //   // console.log(this.progress)
            // }
          },
        },
        page:0
        
      }
  },
  mounted(){},
  computed:{
    navTab(){
      return this.$store.state.navTab
    },  
    swiper(){
      return this.$refs.mySwiper.swiper
    },
    carrousel1(){
      return this.$store.state.carrousel1
    }
  },
  watch:{
    navTab:function(val){
      this.swiper.slideTo(val,500,false)
    },   
  },
  methods:{
    changeTab(){
      let carrouselTab = this.swiper.progress*8
      if(carrouselTab!==this.navTab){
        this.$store.commit('changeNavTab',carrouselTab)
      }
    }
  }
}
</script>

<style lang="scss">
  .carrousel-container{
    height:400px;
  }
  .swiper-container{
    background: #fff;
    height:100%;
    overflow: hidden;
  }
  // #swiper-scrollbar{
  //   position:absolute;
  //   top:-1%;
  //   left:0;
  //   bottom:0;
  //   width:120%;
  // }
  .carrsoule-img-box{
  }
  img{
    width:100%;
  }
</style>
