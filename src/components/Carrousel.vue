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
      <div class="img-row clear-fix imgs">
        <img @click="$router.push({name:'products',params: { Id: 1001 }})" class= "fleft" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" alt="">
        <img class = "fright" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" alt="">
        <img class = "fright" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <img src= 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'  alt="">
      </div>
      <div class="img-row">
        <img v-lazy= "'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115034174111.png'" alt="">

      </div>
      <div class="img-row">
        <img v-lazy= "'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011115033089933.png'" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page1-goods" v-for="item in goodsOfPage1">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="2"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage2">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="3"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage3">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>      
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="4"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage4">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>      
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="5"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage5">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>      
    </swiper-slide>
    <swiper-slide class='quanmianping'>
      <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317010732422.png' @click="$router.openPage('/detail/1003')" alt="">
      <img src='http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg' style="position:relative;top:-2px;"alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317012799998.png'" alt="" >
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317013522274.png'" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317005752430.png'" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317011947232.png'" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317014434073.png'" alt="">
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="7"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage7">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>      
    </swiper-slide>
    <swiper-slide>
      <SmallCarrousel :page="8"/>
      <div class="img-row">
         <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316464243450.png" alt="">
      </div>
      <div class="img-row clear-fix">
        <div class="page-goods" v-for="item in goodsOfPage8">
          <img v-lazy="item.src" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.con}}</p>
          <div>￥{{item.money}}</div>
        </div>
      </div>      
    </swiper-slide>
    <swiper-slide class="fix-img">
      <img src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317154829739.png" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317155627636.png'" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317160444789.png'" alt="">
      <img v-lazy="'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317161351928.png'" alt="">
    </swiper-slide>
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
          speed:100,
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          // autoHeight: true,
          width: window.innerWidth,
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
  mounted(){
    // console.log(this.goodsOfPage1)
  },
  computed:{
    navTab(){
      return this.$store.state.navTab
    },  
    swiper(){
      return this.$refs.mySwiper.swiper
    },
    goodsOfPage1(){
      return this.$store.state.goodsOfPage1
    },
    goodsOfPage2(){
      return this.$store.state.goodsOfPage2
    },
    goodsOfPage3(){
      return this.$store.state.goodsOfPage3
    }, 
    goodsOfPage4(){
      return this.$store.state.goodsOfPage4
    },  
    goodsOfPage5(){
      return this.$store.state.goodsOfPage5
    },
    goodsOfPage7(){
      return this.$store.state.goodsOfPage7
    },  
    goodsOfPage8(){
      return this.$store.state.goodsOfPage8
    },                   
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
  .clear-fix::after{
    content:"";
    clear:both;
    display: block;
  }
  .carrousel-container{
    height:100%;
  }
  .swiper-container{
    background: #fff;
    height:100%;
    // overflow: hidden;
  }
  .swiper-wrapper{
    height:100%;
    
  }
  .swiper-slide{
    overflow:scroll
  }
  .imgs{background: #ccc}
  .img-row{
    background-color: #fff; 
    // padding:0.05rem 0 0 0;
    padding-bottom:0.1rem;
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
    justify-content: space-between;
    background: #fff;
    width:100%;
    a{
      width:22%;
    }
  }
  .page1-goods,.page-goods{
    width:49.5%;
    float: left;
    margin-bottom:0.2rem;
    text-align: left;
    h4{padding:0.2rem;font-size:.25rem;font-weight: 400}
    p{padding:0 0.2rem;color:#666;}
    div{padding:0.2rem 0.2rem;color:#FF6b00;font-size:.25rem;}
  }
  .page1-goods:nth-child(2n+1),.page-goods:nth-child(2n+1){
    margin-right:0.07rem;
  }
  .fix-img{
    font-size:0; //去除img之间空隙（纯img相邻）
  }
  img{
    width:100%;
  }
</style>
