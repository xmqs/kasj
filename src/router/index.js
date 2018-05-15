import Vue from 'vue'
import Router from 'vue-router'
import dailyPrice from "@/components/dailyPrice"
import everydayMain from "@/components/everydayMain"
import priceChart from "@/components/priceChart"
import NewsDetail from "@/components/NewsDetail"


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
    }
  ]
})
