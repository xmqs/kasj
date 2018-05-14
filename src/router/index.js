import Vue from 'vue'
import Router from 'vue-router'
import zcwlMain from "@/components/zcwlMain"
import dailyPrice from "@/components/dailyPrice"
import everydayMain from "@/components/everydayMain"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/zcwlMain',
      name:'zcwlMain',
      component:zcwlMain,
      redirect: '/zcwlMain/dailyPrice',
      children:[{
        path: '/zcwlMain/dailyPrice',
        name: 'dailyPrice',
        component: dailyPrice,
      },{
        path: '/zcwlMain/everydayMain',
        name: 'everydayMain',
        component: everydayMain
      }
      ]
    },
  ]
})
