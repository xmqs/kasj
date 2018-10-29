import Vue from 'vue'
import Router from 'vue-router'


import homeList from "../components/data/homeList"
import searchList from "../components/data/searchList"
import shsearchList from "../components/data/shsearchList"
import dataList from "../components/data/dataList"
import shList from "../components/data/shList"
import shDetail from "../components/data/shDetail"

import manual from "../components/manual/index"
import manual2 from "../components/manual/manual2"
import record from "../components/manual/record"
import question from "../components/manual/question"
import squestion from "../components/manual/searchQuestion"
import park from "../components/manual/park"
import parkDetail from "../components/manual/parkDetail"
import planeManual from "../components/manual/planeManual"

import list2 from "../components/manual/list2"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeList',
      component: homeList,
    },
    {
      path: '/searchList/:type',
      name: 'searchList',
      component: searchList,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/shsearchList',
      name: 'shsearchList',
      component: shsearchList,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/dataList/:key',
      name: 'dataList',
      component: dataList,
    },
    {
      path: '/shList',
      name: 'shList',
      component: shList,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/shDetail/:code',
      name: 'shDetail',
      component: shDetail,
    },
    {
      path: '/manual',
      name: 'manual',
      component: manual,
    },
    {
      path: '/manual2',
      name: 'manual2',
      component: manual2,
    },
    {
      path: '/record',
      name: 'record',
      component: record,
    },
    {
      path: '/question',
      name: 'question',
      component: question,
    },
    {
      path: '/squestion',
      name: 'squestion',
      component: squestion,
    },
    {
      path: '/park',
      name: 'park',
      component: park,
    },
    {
      path: '/parkDetail/:id',
      name: 'parkDetail',
      component: parkDetail,
    },
    {
      path: '/planeManual',
      name: 'planeManual',
      component: planeManual,
      mate:{
        keepAlive:true
      }
    },
    {
      path: '/list2',
      name: 'list2',
      component: list2,
      mate:{
        keepAlive:true
      }
    },
  ]
})
