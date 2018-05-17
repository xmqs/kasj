<template>
  <div class="dailyPrice">
    <div class="changeTime">
      更新日期：2018年5月14日
    </div>
    <div class="changePage">
      <router-link to="dailyPrice" class="page_active" >每日价格</router-link>
      <router-link to="everydayMain" >每日一品</router-link>
    </div>
    <ul class="PriceList">
      <li class="PriceHeader">
        <span>品种</span>
        <span>产地</span>
        <span>最低价</span>
        <span>最高价</span>
        <span>平均价</span>
      </li>
      <li @click="toChart('青菜')">
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
      <li>
        <span class="Pname">青菜</span>
        <span class="Pplace">南京</span>
        <span class="Lprice">4.4元</span>
        <span class="Tprice">6元</span>
        <span class="Aprice">5.2元</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "destination",
    data(){
      return{
      }
    },
    mounted(){

    },
    methods:{
      toChart(id){
        this.$router.push({ path: `/zcwl/priceChart/${id}`});
      }
    }
  }
</script>

<style scoped>

  .content{
    background-color: #fff;
  }
  .changePage{
    text-align: center;
    width: 100%;
    border-bottom:1px solid #EEEEEE ;
    background: #fff;
    border-bottom: 20px solid #F5F5F5;
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

  .dailyPrice{
    margin-top: 96px;
  }
  input::-webkit-input-placeholder{
    color:#ccc;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#ccc;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#ccc;
  }
  .PriceList{
  }
  .PriceList li{
    border-bottom: 1px solid #eee;
    height: 88px;
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  .PriceHeader{
    font-size:28px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
  }
  .PriceHeader span{
    display: inline-flex;

  }
  .Pname{
    font-size:30px;
    font-family:PingFangSC-Medium;
    color:rgba(102,102,102,1);
  }
  .Pplace{
    font-size:30px;
    font-family:PingFangSC-Regular;
    color:rgba(102,102,102,1);
  }
  .Lprice{
    font-size:30px;
    font-family:PingFangSC-Regular;
    color:rgba(123,184,124,1);
  }
  .Tprice{
    font-size:30px;
    font-family:PingFangSC-Regular;
    color:rgba(245,130,39,1);
  }
  .Aprice{
    font-size:30px;
    font-family:PingFangSC-Regular;
    color:rgba(102,102,102,1);
  }
</style>
