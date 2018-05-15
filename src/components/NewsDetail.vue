<template>
  <div class="NewDetail">
    <div class="NewHeader">雪停了，菜价也降了</div>
    <div class="NewTime">2018-5-15</div>
    <div class="NewBody">
      距离降雪已经过去了4天，降雪带来的一些影响正在逐渐减小，蔬菜市场的运营也在逐渐回归正常。<br><br>
      根据市场监测数据显示：1月8日环比上日到货量为2943吨，上涨8.12%；78个监测品种中，已经有41个品种价格出现了下跌，其中跌幅较大的品种有：青菜1.9元/公斤下跌32.14%、大白菜0.75元/公斤下跌28.57%、豌豆叶5元/公斤下跌23.08%洋白菜1.8元/公斤下跌21.74%、韭黄9元/公斤下跌21.74%、菜秧7.5元/公斤21.05%。<br><br>
      另外，还有28个品种价格有所上涨大部分的品种涨幅均在5%-20%左右仅有杏鲍菇和荷兰豆价格上涨幅度较大价格及涨幅分别为8.5元/公斤、上涨47.83%，19.5元/公斤、上涨40.29%上涨原因：这些多为反季节和生长条件苛刻的品种，上市量比较少，在这降雪低温之下，价格有所波动实属正常。<br>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NewsDetail"
    }
</script>

<style scoped>
  .NewDetail{
    padding: 40px  32px 0 32px;
    margin-top: 96px;
  }
  .NewHeader{
    font-size:50px;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    line-height:50px;
  }
  .NewTime{
    height:26px;
    font-size:26px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:26px;
    margin-top: 30px;
  }
  .NewBody{
    font-size:40px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height:64px;
    margin-top: 42px;
  }
</style>
