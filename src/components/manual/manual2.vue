<template>
  <div>
    <ul class="list">
      <li @click="toRecord"><img src="./../../../static/img/icon1.png" alt="">公司备案</li>
      <li @click="toPark"><img src="./../../../static/img/icon3.png" alt="">园区入驻</li>
      <li @click="toQuestion"><img src="./../../../static/img/icon5.png" alt="">公共通关平台介绍</li>
      <li @click="topManual"><img src="./../../../static/img/icon8.png" alt="">推荐合作单位</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
        toRecord(){
          this.$router.push({'path':'/record'})
        },
        toQuestion(){
          window.location = "https://m.mynj.cn:11162/web-editor-web/s//h/20180911/407A4B0112D841608425264EDE55EDDB.htm";
        },
        toPark(){
          this.$router.push({'path':'/park'})
        },
        topManual(){
          window.location = "https://m.mynj.cn:11162/web-editor-web/s//h/20180628/663E457FCF254E07894118189D743FEA.htm";
        }
      }
    }
</script>

<style scoped>
  .list li{
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    min-height: 88px;
    align-items: center;
    padding: 12px 32px;

    font-size: 34px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #333;

    background: url('../../../static/img/right.png') no-repeat;
    background-size: 60px;
    background-position: 98% center;
  }
  .list li img{
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
</style>
