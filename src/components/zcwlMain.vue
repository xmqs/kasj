<template>
  <div id="page">
    <div class="changeTime">
      更新日期：2018年5月14日
    </div>
    <div class="changePage">
      <router-link to="dailyPrice" v-bind:class="{'page_active':pageNum==0}" @click.native="changePage(0)">每日价格</router-link>
      <router-link to="everydayMain" v-bind:class="{'page_active':pageNum==1}" @click.native="changePage(1)">每日一品</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        pageNum:0
      }
    },
    name: "zcwlMain",
    methods:{
      changePage(index){
        this.pageNum = index;
      }
    }
  }
</script>

<style>
  /*头部*/
  #page{
    margin-top: 96px;
  }
  .content{
    background-color: #fff;
  }
  .changePage{
    text-align: center;
    width: 100%;
    border-bottom:1px solid #EEEEEE ;
    background: #fff;
  }
  .changePage a{
    float: left;
    text-align: center;
    width: 50%;
    border-bottom: 5px solid #fff;
    line-height: 88px;
    font-size: 30px;
    color: #333;
  }
  .changePage a.page_active{
    color: #4D7BFE;
    border-bottom: 5px solid #4D7BFE;
  }
  .changePage::after{
    content: "";
    clear: both;
    display: table;
  }
  /*主题*/
  .content{
    border-top: 20px solid #F5F5F5;
  }

  .changeTime{
    height:72px;
    background:rgba(255,247,234,1);
    font-size:28px;
    font-family:PingFangSC-Regular;
    color:rgba(255,185,74,1);
    line-height:72px;
    padding-left: 32px;
  }
</style>
