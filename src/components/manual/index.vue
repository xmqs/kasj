<template>
  <div>
    <ul class="list">
      <li @click="toRecord"><img src="./../../../static/img/icon7.png" alt="">跨境指南</li>
      <li @click="topManual"><img src="./../../../static/img/icon4.png" alt="">机场指南</li>
      <li @click="toPark"><img src="./../../../static/img/icon6.png" alt="">关检融合指南</li>
      <li @click="tolist2"><img src="./../../../static/img/icon17.png" alt="">港口指南</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
        toRecord(){
          this.$router.push({'path':'/manual2'})
        },
        toQuestion(){
          this.$router.push({'path':'/question'})
        },
        toPark(){
          window.location = "https://m.mynj.cn:11162/H5/haiguan/index.html";
        },
        topManual(){
          this.$router.push({'path':'/planeManual'})
        },
        tolist2(){
          this.$router.push({'path':'/list2'})
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
