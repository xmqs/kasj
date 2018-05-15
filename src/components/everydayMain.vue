<template>
  <div class="edm">
    <div class="changeTime">
      更新日期：2018年5月14日
    </div>
    <div class="changePage">
      <router-link to="dailyPrice" >每日价格</router-link>
      <router-link to="everydayMain" class="page_active" >每日一品</router-link>
    </div>
    <ul class="NewsList">
      <li @click="toNews('123')">
        <div class="NewLeft">
          <h2>
            雪停了，菜价也降了
          </h2>
          <p>
            距离降雪已经过去了4天，降雪带来的一些影响正在逐渐 减小，蔬菜市场的运营也在逐渐回归正常。根据市场...
          </p>
          <span>
            2018-5-14
          </span>
        </div>
        <img src="./../../static/img/testimg.jpg" alt="">
      </li>
      <li>
        <div class="NewLeft">
          <h2>
            雪停了，菜价也降了
          </h2>
          <p>
            距离降雪已经过去了4天，降雪带来的一些影响正在逐渐 减小，蔬菜市场的运营也在逐渐回归正常。根据市场...
          </p>
          <span>
            2018-5-14
          </span>
        </div>
        <img src="./../../static/img/testimg.jpg" alt="">
      </li>
      <li>
        <div class="NewLeft">
          <h2>
            雪停了，菜价也降了
          </h2>
          <p>
            距离降雪已经过去了4天，降雪带来的一些影响正在逐渐 减小，蔬菜市场的运营也在逐渐回归正常。根据市场...
          </p>
          <span>
            2018-5-14
          </span>
        </div>
        <img src="./../../static/img/testimg.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "everydayMain",
      methods:{
        toNews(id){
          this.$router.push({ path: `/zcwl/NewsDetail/${id}`});
        }
      }
    }
</script>

<style scoped>
  .edm{
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
  .NewsList{
    padding: 0 20px;
  }
  .NewsList li{
    padding: 20px 0;
    height: 192px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
  }
  .NewsList li img{
    width:120px;
    height:120px;
    display: inline-block;
  }
  .NewLeft{
    display: inline-block;
  }
  .NewLeft h2{
    height:42px;
    font-size:30px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    width:542px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .NewLeft p{
    height:68px;
    font-size:22px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:34px;
    margin-top: 7px;
    width:542px;
    overflow: hidden;/*超出部分隐藏*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .NewLeft span{
    display: block;
    height: 28px;
    font-size:20px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:28px;
    margin-top: 7px;
  }
</style>
