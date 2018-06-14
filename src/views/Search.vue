<template>
<div class="search-page">
  <div class="search-box ha">
    <div class="input-box">
      <svg class="icon icon-search" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input class="search" type="text" placeholder="小米8" v-model="nowInput">
    </div>
    <div class="s-cancel" @click="linkBack">取消</div>
  </div>
  <div class="resout">
    <ul class="resout">
      <li v-for="item in getResoutItems" @click="pushToProd(item.id)">{{item.name}}</li>
    </ul>
  </div>
  <div class="s-content" v-show="nowInput==''">
    <p class="s-hot">热门搜索</p>
    <img @click="pushToProd(1009)"
    src="http://i8.mifile.cn/b2c-mimall-media/60c89ea361bed3a7edaf73b3b6663608.jpg?bg=BBD6DF" alt="">
    <ul class="hot-box">
      <li @click="pushToProd(1001)">小米Note3</li>
      <li @click="pushToProd(1005)">体温计</li>
      <li @click="pushToProd(1004)">小米电视4A</li>
      <li @click="pushToProd(1018)">影视会员卡</li>
      <li @click="linkTo('error/building')">Indian Mifans</li>
      <li @click="pushToProd(1014)">小米笔记本Air13.3</li>
      <li @click="pushToProd(1017)">小米盒子</li>
      <li @click="linkTo('error/building')">Are u OK？</li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios"
  export default {
    data(){
      return {
        resout:[],
        nowInput:''
      }
    },
    computed:{
      getResoutItems(){
        let result = []
        if(this.nowInput == ""){
          return result
        }
        
        for(let i=0 ;i<this.resout.length;i++){
          if(this.resout[i].name.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1){
            result.push(this.resout[i])
          }
        }
        return result
      }
    },
    mounted(){
      axios.get('/static/server/lib.json')
      .then(response=> {
        this.resout = response.data.resout;
        console.log(this.resout)
      })
      .catch(error=> {
        this.$router.replace('/error/404')
      });
    },
    methods:{
      linkBack(){
        this.$router.go(-1)
      },
      linkTo(path){
        this.$router.push("/"+path)
      },
      pushToProd(ID){
        this.$router.push({name:'products',params: { id: ID }})
      }
    }
  }
</script>

<style lang="scss">
    .search-page{
      position: absolute;
      top:0;
      width:100%;
    }
    .resout{
      width:100%;
      li{
        border-bottom: 0.01rem solid #ddd;
        text-align:left;
        padding:0.2rem .2rem
      }
    }
    .ha{border-bottom:0.01rem solid #ccc;}
    .search-box{
      display: -webkit-flex;  
      display:flex;
      justify-content:space-between;
      padding:.13rem .3rem .15rem; 
      // border-bottom:0.01rem solid #ccc;
      .input-box{
        position: relative;
        width:90%;
        
        // -webkit-appearance: none;
        .icon-search{
          position: absolute;
          top:.05rem;
          left:.075rem;
          width:.4rem;
          height:.4rem;
          color:#bbb;
        }
        .search{
          outline: none;
          border-radius: 7px;
          box-sizing: border-box;
          border:1px solid #ccc;
          padding:0 0 0 .5rem;
          background-color: #eeeeee;
          width:100%;
          height:0.5rem;
          font-size:.16rem;
          &::-webkit-input-placeholder{
            color:#aaa
          }
        }
      }
      .s-cancel{
        // width:.5rem;
        height:.5rem;
        line-height:.5rem;
        font-size : .25rem;
      } 
      .user-box{
        padding:0 .25rem;
      }
    }
    .s-content{
      .s-hot{
        text-align: left;
        height:.7rem;
        font-size:.24rem;
        line-height:.7rem;
        padding: 0 .2rem
      }
      img{width:100%;}
      .hot-box{
        padding:0.1rem 0 0.5rem .2rem;
        border-bottom:0.2rem solid #eee;
        &:after{
          content:"";
          clear: both;
          display: block;
        }
        li{
          list-style:none;
          float:left;
          padding:.15rem;
          border:0.01rem solid #ccc;
          margin:0.1rem;
          background-color: #f9ecde
        }
      }
    }
  
</style>