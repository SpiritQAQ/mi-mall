import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    navTabList : [
      {name : "推荐"},
      {name : "手机"},
      {name : "智能"},
      {name : "电视"},
      {name : "电脑"},
      {name : "全面屏"},
      {name : "生活周边"},
      {name : "盒子"},
      {name : "艺术"},
    ],
    navTab :0,

  },
  mutations:{
    changeNavTab(state,val){
      state.navTab = val
      console.log(state.navTab)
    }
  },
  modules: {

  }
})