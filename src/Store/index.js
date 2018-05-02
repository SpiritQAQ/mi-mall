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
    goodsOfPage1:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
    ],
    goodsOfPage2:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/detail/1010'
      },
      
    ],
    goodsOfPage3:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/detail/1012'
      },
    ],
    goodsOfPage4:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/detail/1004'
      },
    ],
    goodsOfPage5:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/detail/1014'
      },
    ],
    goodsOfPage7:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/detail/1016'
      },
    ],
    goodsOfPage8:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/detail/1018'
      },
    ],
    categoryList:[
      {
        name: '新品',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },{
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '手机',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '电视',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '电脑',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '家电',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '路由',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '智能',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '电源',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '耳机',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '音箱',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '礼品',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '生活',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '米粉卡',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      },
      {
        name: '零售店',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/detail/1019'
          }
        ]
      }
    ],
    navTab :0,
    footerTab : 1,
    cart:{
      added :[],
      checkoutStatus:null
    }
  },
  mutations:{
    changeNavTab(state,val){
      state.navTab = val
    },
    changeFooterTab(state,val){
      state.footerTab = val
    }
  },
  modules: {

  }
})