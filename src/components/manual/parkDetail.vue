<template>
  <div class="wall">
    <div class="parkName">{{data.name}}</div>
    <div>招商电话：<span v-for="item in data.mobile">{{item}} </span></div>
    <div class="tab">
      <div :class="page1?'pageon':''" @click="page1=true;page2=false;page3=false">园区介绍</div>
      <div :class="page2?'pageon':''" @click="page1=false;page2=true;page3=false">入驻流程</div>
      <div :class="page3?'pageon':''" @click="page1=false;page2=false;page3=true">布局功能</div>
    </div>
    <div v-show="page1" class="swiper-container swiper-container-horizontal" id="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data.carouselImg">
          <img :src="item" alt="">
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
    <div v-show="page1" class="line">
      <div class="title">园区概况</div>
      <div class="line_detail">{{data.remark}}</div>
    </div>
    <div v-show="page1" class="line">
      <div class="title">招商对象</div>
      <div class="line_detail">{{data.business}}</div>
    </div>
    <div v-show="page1" class="line">
      <div class="title">政策优势</div>
      <div class="line_detail">{{data.policy}}</div>
    </div>
    <div v-show="page1" class="line">
      <div class="title">服务内容</div>
      <div class="line_detail">{{data.service}}</div>
    </div>
    <div v-show="page1" class="line">
      <div class="title">园区官网</div>
      <div class="line_detail">{{data.website}}</div>
    </div>
    <div v-show="page1" class="line">
      <div class="title">园区地址</div>
      <div class="line_detail">{{data.address}}</div>
      <div class="map" id="container"></div>
    </div>

    <div v-show="page2">
      <div class="line">
        <ul class="flow">
          <li v-for="(item,index) in data.checkFlow">
            <div class="number">
              {{index+1}}
            </div>
            <div class="flow_main">
              {{item}}
            </div>
          </li>
        </ul>
      </div>
      <div class="line">
        <div class="title">入驻条件</div>
        <div class="line_detail" v-for="(item,index) in data.checkTerm">{{index+1}}、{{item}}</div>
      </div>
    </div>

    <div v-show="page3">
      <img :src=data.layoutImg alt="" width="100%" style="margin-top: 6px">
      <table class="t">
        <tr v-for="item in data.layOuts">
          <td style="width: 33%;text-align: center">{{item.layoutName}}</td>
          <td>{{item.layoutRemark}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from "swiper"
  import "./../../../node_modules/swiper/dist/css/swiper.css"

  export default {
    name: "parkDetail",
    data() {
      return {
        data: {},
        meSwiper: {},
        map:{},
        marker:{},
        page1:true,
        page2:false,
        page3:false,
      }
    },
    mounted() {
      axios.post('/eport-server/gui/data/getParkInfo.do', {
        id: this.$route.params.id
      }).then((res) => {
        this.data = res.data.data;

        this.meSwiper = new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          observer: true,
        })

        this.map = new AMap.Map("container", {
          resizeEnable: true,
          center: res.data.data.latAndLon,
          zoom: 12
        });

        this.marker = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: res.data.data.latAndLon
        });

        this.marker.setMap(this.map);

      })


    }
  }
</script>

<style scoped>
  .wall {
    padding: 32px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .parkName {
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    color: rgb(56, 56, 56);
    margin-bottom: 16px;
  }
  .line{
    border-bottom: 1px solid #f5f5f5;
    padding: 16px 0;
  }
  .title{
    font-size: 30px;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    color: rgb(56, 56, 56);
  }
  .line_detail{
    font-size: 26px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgb(56, 56, 56);
  }
  .tab {
    border-bottom: 1px solid #f5f5f5;
  }

  .tab > div {
    display: inline-block;
    font-size: 30px;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    color: rgb(56, 56, 56);
    margin-top: 26px;
    border-bottom: 6px solid #fff;
    padding-bottom: 6px;
    margin-right: 16px;
  }

  .tab > div.pageon {
    border-bottom: 6px solid #6cb7ff;
  }

  .swiper-slide img {
    width: 686px;
    height: 320px;
    border-radius: 20px;
  }

  .swiper-container {
    margin-top: 16px;
  }
  .map{
    margin-top: 6px;
    width: 684px;
    height: 398px;
    border: 1px solid #f5f5f5;
  }
  .t{
    margin-top: 16px;
  }
  .t td{
    padding: 16px;
    border: 1px solid #aaa;
  }

  .flow li{
    position: relative;
    border-left: 8px solid #3388FF;
    width: 600px;
    padding-bottom: 60px;
    left: 32px;
    min-height: 60px;
  }
  .flow li:last-child{
    border-left: 8px solid #fff;
    padding-bottom: 20px;
  }

  .number{
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 8px solid #3388FF;
    font-size: 40px;
    color: #3388FF;
    line-height: 60px;

    text-align: center;
    font-family: PingFangSC-Regular;
    font-weight: bold;
    background: #fff;
    left: -40px;
  }
  .flow_main{
    padding-left: 60px;
    padding-top: 20px;
  }
</style>
