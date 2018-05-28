<template>
  <div class="page1">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in carrousel" :key="item.id">
          <div class="carrsoule-img-box"><a><img v-bind:src="item.src" alt=""></a></div>
      </swiper-slide>
      <div class="swiper-pagination" ref="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name : "SmallCarrousel", 
  components: {
    swiper,
    swiperSlide
  },
  props:['page'],
  data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          width: window.innerWidth,
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
          watchSlidesVisibility : true,
          loop:true,
          on:{
            // transitionEnd: function(swiper){
            //   // console.log(this.progress)
            // }
          },
        },
      }
  },
  computed:{
    carrousel(){
      let name = 'carrousel'+this.page
      return this.$store.state[name]
    }
  },mounted(){
    // console.log(this.page)
  }

}
</script>

<style>
.swiper-pagination-bullet-active{
  background-color: #FF6b00;
}
</style>
