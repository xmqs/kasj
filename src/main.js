import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '60c846141923c17aa04baafd1e6ccb99',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType','AMap.Driving'],
  v: '1.4.4'
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

