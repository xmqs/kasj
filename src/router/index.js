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
import lbsAmap2 from "@/components/map/lbsAmap2"
import datePicker from "@/components/date/datePick"



Vue.use(Router)

export default new Router({
  routes: [
    //众彩物流
    {
      path: '/',
      name: 'dailyPrice',
      component: dailyPrice,
    },
    {
      path: '/everydayMain',
      name: 'everydayMain',
      component: everydayMain
    },
    {
      path:'/zcwl/priceChart/:id',
      name:'priceChart',
      component:priceChart
    },
    {
      path:'/zcwl/NewsDetail',
      name:'NewsDetail',
      component:NewsDetail
    },
    //hs编码查询
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
    //高德地图
    {
      path:'/map/lbsAmap',
      name:'lbsAmap',
      component:lbsAmap
    },
    {
      path:'/map/lbsAmap2',
      name:'lbsAmap2',
      component:lbsAmap2
    },
    //时间控件
    {
      path:'/date/datePicker',
      name:'datePicker',
      component:datePicker
    }
  ]
})
