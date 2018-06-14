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
        href: '/products/1001'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/02.jpg',
        href: '/products/1002'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
        href: '/products/1003'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/products/1004'
      }
    ],
    carrousel2:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg',
        href: '/products/1007'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213275295675.png',
        href: '/products/1009'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/01.png',
        href: '/products/1001'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/03.jpg',
        href: '/products/1003'
      },
    ],
    carrousel3:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/products/1011'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/products/1011'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213533255816.png',
        href: '/products/1011'
      },

    
    ],
    carrousel4:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
        href: '/products/1013'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/04.jpg',
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
        href: '/products/1013'
      },

    ],
    carrousel5:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316542272196.png',
        href: '/products/1014'
      }
    ],
    carrousel7:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/products/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/products/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/products/1015'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083831934.png',
        href: '/products/1015'
      }
    ],
    carrousel8:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/products/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/products/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/products/1017'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317121511939.png',
        href: '/products/1017'
      }
    ],
    goodsOfPage1:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
    ],
    goodsOfPage2:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011213403719963.png',
        title: '红米Note 4X 32GB',
        con: '多彩金属 / 超长续航',
        money: 899,
        href: '/products/1010'
      },
      
    ],
    goodsOfPage3:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
        title: '米家四位四控插线板',
        con: '四位分控，随用随开',
        money: 89,
        href: '/products/1012'
      },
    ],
    goodsOfPage4:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011316504878837.png',
        title: '小米电视4A 43英寸',
        con: '全高清 HDR，64位处理器',
        money: 1999,
        href: '/products/1004'
      },
    ],
    goodsOfPage5:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        con: '指纹解锁，全金属机身',
        money: 5199,
        href: '/products/1014'
      },
    ],
    goodsOfPage7:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317083193859.png',
        title: '8H护颈乳胶枕 Z2',
        con: '多重新科技  升级好睡眠',
        money: 239,
        href: '/products/1016'
      },
    ],
    goodsOfPage8:[
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
      {
        src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011317120865819.png',
        title: '小米影视会员卡',
        con: '畅享海量片库',
        money: 498,
        href: '/products/1018'
      },
    ],
    categoryList:[
      {
        name: '新品',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },{
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '手机',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '电视',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '电脑',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '家电',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '路由',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '智能',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '电源',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '耳机',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '音箱',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '礼品',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '生活',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '米粉卡',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      },
      {
        name: '零售店',
        children: [
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          },
          {
            name: '小米5s',
            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/img_0505.png',
            link: '/products/1019'
          }
        ]
      }
    ],
    navTab :0,
    footerTab : 1,
    cart:{
      items:[],
      checkoutStatus:null,
      checkBoxLeader:false,
    }
  },
  getters:{
    cartLength:state=>{
      return state.cart.items.length
    },
    cartCheckedLength:(state)=>{
      let the = 0 
      for(let i=0;i<state.cart.items.length;i++){
        if(state.cart.items[i].checkBoxStatus){
          the+=1
        }
      }
      return the
    },
    cartTotalPrice: (state, getters) => {
    let total = 0
    for(let i=0;i<state.cart.items.length;i++){
      if(state.cart.items[i].checkBoxStatus){
        total += state.cart.items[i].num*state.cart.items[i].info.price
      }
    }
    return total
    }
  },
  actions:{
    addProductToCart({state,commit},product){
      const cartItem = state.cart.items.find(item => item.id === product.id)
       //es6 Array.find 返回满足提供的测试函数的第一个元素的值。否则返回undefined
      if(!cartItem){
        commit("pushProductToCart",{ id :product.id, info :product })
      } else {
        commit("incrementItemNum", cartItem)
      }
    },
    checkBoxAllChange({state,commit}){
      commit("checkBoxLeaderToggle")
      commit("checkBoxAllCheck")
    }
  },
  mutations:{
    changeNavTab(state,val){
      state.navTab = val
    },
    changeFooterTab(state,val){
      state.footerTab = val
    },
    pushProductToCart(state,{ id , info }){
      state.cart.items.push({
        id,
        info,
        num:1,
        checkBoxStatus:true
      })
      // console.log(state.cart.items)
    },
    setCartItems(state,{ items }){
      state.cart.items = items
    },
    incrementItemNum(state,{ id }){
      const cartItem = state.cart.items.find(item => item.id === id)
      cartItem.num++
    },
    reduceItemNum(state,{ id }){
      const cartItem = state.cart.items.find(item => item.id === id)
      if(cartItem.num <= 1){
        cartItem.num = 1
      }else{
        cartItem.num--
      }
    },
    checkBoxToggle(state,{ id }){
      const cartItem = state.cart.items.find(item => item.id === id)
      if(cartItem.checkBoxStatus){
        cartItem.checkBoxStatus = false    
      }else{
        cartItem.checkBoxStatus = true
      }
    },
    checkBoxAllCheck(state){
      for(let i=0;i<state.cart.items.length;i++){
        state.cart.items[i].checkBoxStatus = state.cart.checkBoxLeader
      }
    },
    checkBoxLeaderToggle(state){
      if(state.cart.checkBoxLeader){
        state.cart.checkBoxLeader = false
      }else{
        state.cart.checkBoxLeader = true
      }
    },
    deleteCheckedItem(state){
      for(let i=0;i<state.cart.items.length;i++){
       if(state.cart.items[i].checkBoxStatus == true){
        state.cart.items.splice(i,1)
       } 
      }
    }


  },
  modules: {

  }
})