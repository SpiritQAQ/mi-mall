<template>
  <div class="carrousel-container">
  <swiper :options="swiperOption" ref="mySwiper" @transitionEnd = "changeTab">

    <swiper-slide>
      <SmallCarrousel :page="1"/>
      <div class="img-row clear png4">
        <a href="javascript:;">
          <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292984819.png" alt=""></a>
        <a href="javascript:;">
          <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292372054.png" alt=""></a>
        <a href="javascript:;">
          <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022291629252.png" alt=""></a>
        <a href="javascript:;">
          <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022290460400.png" alt=""></a>
      </div>
      <div class="img-rowclear">
        <img class= "fleft" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" alt="">
        <img class = "fright" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" alt="">
        <img class = "fright" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" alt="">
      </div>
      <div class="img-rowclear">
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
      </div>
      <div class="img-rowclear">
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
      </div>
      <div class="img-row clear">
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
        <a href=""><img src="" alt=""></a>
      </div>
      <div class="img-row"></div>
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
          // autoHeight: true,
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
  clear-fix::after{
    content:"";
    clear:both;
    display: block;
  }
  .carrousel-container{
    // height:400px;
  }
  .swiper-container{
    background: #fff;
    height:100%;
    overflow: hidden;
  }
  .img-row{
    background-color: #ccc;
    margin:0.1rem 0;
  }
  .fleft,.fright{
    float: left;
    width:49.6%;
    margin-top:0.06rem;
  }
  .fright{
    float: right;

  }
  .png4{
    display: flex;
  }
  img{
    width:100%;
  }
</style>
