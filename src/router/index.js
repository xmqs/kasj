import Vue from 'vue'
import Router from 'vue-router'
import dailyPrice from "@/components/dailyPrice"
import everydayMain from "@/components/everydayMain"
import priceChart from "@/components/priceChart"
import NewsDetail from "@/components/NewsDetail"
import hsMain from "@/components/hs/hsMain"
import hsDetail from "@/components/hs/hsDetail"
import hsSearch from "@/components/hs/hsSearch"
import lbsAmap from "@/components/map/lbsAmap"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zcwlMain/dailyPrice',
      name: 'dailyPrice',
      component: dailyPrice,
    },
    {
      path: '/zcwlMain/everydayMain',
      name: 'everydayMain',
      component: everydayMain
    },
    {
      path:'/zcwl/priceChart/:id',
      name:'priceChart',
      component:priceChart
    },
    {
      path:'/zcwl/NewsDetail/:id',
      name:'NewsDetail',
      component:NewsDetail
    },
    {
      path:'/hs/hsMain',
      name:'hsMain',
      component:hsMain
    },
    {
      path:'/hs/hsDetail',
      name:'hsDetail',
      component:hsDetail
    },
    {
      path:'/hs/hsSearch',
      name:'hsSearch',
      component:hsSearch
    },
    {
      path:'/map/lbsAmap',
      name:'lbsAmap',
      component:lbsAmap
    },
  ]
})
