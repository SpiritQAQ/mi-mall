<template>
  <div class="building">
    <div class="b-header">建设中</div>
    <div class="b-back" @click="linkBack()">返回</div>
    <div class="b-content">
      <p>Sorry,该页面正在建设中....</p>
    </div>
    <div class="introduce">
      <p>仿小米商城移动端</p>
      <p>商城界面布局仿自小米商城ios客户端样式。布局、功能均自主实现</p>
      <h3>用到的技术</h3>
      <ul class="">
        <li>vue 2.5.2</li>
        <li>vue-cli</li>
        <li>vue-router 3.0.1</li>
        <li>vuex 3.0.1</li>
        <li>swiper 4.2.2</li>
        <li>axios 0.18.0</li>
        <li>sass</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    linkBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
  .building{
    position: absolute;;
    top:0;
    .b-back{
      // border:1px solid ;
      background-color: #CCC;
      padding:0.1rem;
      position:absolute;
      padding-left:0.15rem;
      top:0.26rem;
      left:0.4rem;
      z-index:5;
      height:0.16rem;
      line-height:0.15rem;
      &:before{
        background-color: #CCC;        
        position:absolute;
        left:-0.13rem;
        height:0.24rem;
        width:0.24rem;
        transform:rotate(45deg);
        top:0.05rem;
        // border:1px solid ;
        content:'';
        z-index:0;
        border-bottom-left-radius: 0.05rem;
        
      }
    }
    .b-header{
      padding:0.3rem 0 0.2rem 0;
      font-size:0.3rem;
      border-bottom:0.01rem solid #ccc
    }
    .b-content{
      padding:0.5rem;
      p{font-size:0.3rem;}
    }
    .introduce{
      color:#333;
      margin:0.5rem;
      text-align:left;
      font-size:0.26rem;
      p{font-size:0.3rem;margin:0.3rem 0;}
      ul{
        padding-left:0.2rem;
        li{
          list-style:disc;
          list-style-position: inside;
          font-size:0.3rem;
          margin:0.2rem 0 ;
        }
      }
    }
  }
</style>
