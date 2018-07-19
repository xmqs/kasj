import Vue from 'vue'
import Router from 'vue-router'

const dailyPrice = () => import ("../components/dailyPrice")
const everydayMain = () => import  ("../components/everydayMain")
const priceChart = () => import  ("../components/priceChart")
const NewsDetail = () => import  ("../components/NewsDetail")
const hsMain = () => import  ("../components/hs/hsMain")
const hsDetail = () => import  ("../components/hs/hsDetail")
const hsSearch = () => import  ("../components/hs/hsSearch")
const lbsAmap = () => import  ("../components/map/lbsAmap")
const lbsAmap2 = () => import  ("../components/map/lbsAmap2")
const datePicker = () => import  ("../components/date/datePick")



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
