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
    carrousel1:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
        href: '/detail/1001'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg',
        href: '/detail/1002'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
        href: '/detail/1003'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/detail/1004'
      }
    ],
    carrousel2:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg',
        href: '/detail/1007'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213275295675.png',
        href: '/detail/1009'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
        href: '/detail/1001'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
        href: '/detail/1003'
      },
    ],
    carrousel3:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/detail/1011'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/detail/1011'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/detail/1011'
      },

    
    ],
    carrousel4:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
        href: '/detail/1013'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
        href: '/detail/1013'
      },

    ],
    carrousel5:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/detail/1014'
      }
    ],
    carrousel7:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/detail/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/detail/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/detail/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/detail/1015'
      }
    ],
    carrousel8:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/detail/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/detail/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/detail/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/detail/1017'
      }
    ],
    navTab :0,

  },
  mutations:{
    changeNavTab(state,val){
      state.navTab = val
    }
  },
  modules: {

  }
})