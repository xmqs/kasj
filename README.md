# 众彩物流 VM布局设计

> postcss-aspect-ratio-mini  postcss-cssnext  postcss-px-to-viewport postcss-viewport-units cssnano
postcss-px-to-viewport设置了屏幕分辨率图 以美工 750*1334为准 设计
cssnano 禁用postcss-zindex
简化计算rem 单位直接复用美工图 计算为vm布局
新增高德地图结合amap使用高德api
众彩物流入口http://localhost:8080/#/zcwlMain/dailyPrice
高德地图入口http://localhost:8080/#/map/lbsAmap

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
