<template>
  <div class="prod-app">
    <button @click='getData()'>getdata</button>
    {{this.info}}
    {{this.id}}
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
        console.log(id)
        if(!id){
          this.$router.replace('/error/404')
        }
        axios.get('/static/server/'+id+'.json')
          .then(response=>{
            this.info = response.data
            this.loaded = true
            console.log(this.info)

          })
          .catch(error=>{
            this.$router.replace('error/404')
          })
        
      }
    }
  }
</script>
