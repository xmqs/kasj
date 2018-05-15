<template>
  <div class="priceChart">
    <div class="change_page">
      <div class="ew active">最近一周</div>
      <div class="em">最近一月</div>
    </div>
    <div id="container"></div>
    <div class="dataList">
      <div class="listHeader">
        <p>平均价列表(周)</p>
      </div>
      <div class="listBody">
        <ul>
          <li>
            <p>周一</p>
            <p>¥4.6</p>
          </li>
          <li>
            <p>周一</p>
            <p>¥4.6</p>
          </li>
          <li>
            <p>周一</p>
            <p>¥4.6</p>
          </li>
          <li>
            <p>周一</p>
            <p>¥4.6</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Highcharts from "highcharts"
    export default {
        name: "priceChart",
      data(){
          return{

          }
      },
      mounted(){
        var chart = Highcharts.chart('container', {
          chart: {
            type: 'area',
            backgroundColor:"#F1F4FB",
          },
          title:{
            align:'left',
            text:'平均价(元)',
            style:{
              "color": "#172434",
              "fontSize": "12px"
            },
          },
          plotOptions: {
            series: {
              marker: {
                enabled: false
              },
              lineWidth: 1
            },
          },
          legend: {
            enabled: false
          },
          xAxis: {
            categories: ['周日', '周一', '周二', '周三', '周四','周五','周六'],
            tickLength: 0,
            title:{
              text: null
            },
            labels: {
              align: 'center',
              x: 0,
              style: {
                color: '#8E9091',//颜色
              }
            },
          },
          yAxis: {
            title: {
              text: null
            },
            labels: {
              align: 'left',
              x: 3,
              y: 16,
              style: {
                color: '#8E9091',//颜色
              }
            },
            max: 30,
            showFirstLabel: false,
            gridLineColor:'#E9EDF6'
          },
          credits: {
            enabled: false
          },
          series: [{
            data: [3, 8, 6, 10, 7, 11, 5],
            color: '#E0E7FA',
            lineColor:'#4D7BFE',
          }]
        });
      }
    }
</script>

<style scoped>
  .priceChart{
    margin-top: 96px;
  }
  .change_page{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .change_page div{
    display: inline-block;
    width: 341px;
    text-align: center;
    height: 56px;
    margin: 32px 0;
    font-size:26px;
    line-height: 58px;
    font-family:PingFangSC-Regular;
    border: 1px solid #4D7BFE;
    color: #4D7BFE;
  }
  .change_page div.ew{
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  .change_page div.em{
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }
  .change_page div.active{
    color:rgba(255,255,255,1);
    background: #4D7BFE;
  }

  /*图表*/
  #container{
    width: 100%;
    height: 500px;
  }

  .listHeader{
    height:88px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding-left: 32px;
  }
  .listHeader p{
    height: 32px;
    border-left: 4px solid #4D7BFE;
    font-size:32px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    padding-left: 20px;
    line-height: 32px;
  }
  .listBody{
    padding: 0 22px;
  }
  .listBody ul li{
    height: 88px;
    border-bottom: 1px solid #EEEEEE;
    font-size:32px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height: 88px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
</style>
