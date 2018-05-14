<template>
  <div>
    <ul class="PriceList">
      <li class="PriceHeader">
        <span>品种</span>
        <span>产地</span>
        <span>最低价</span>
        <span>最高价</span>
        <span>平均价</span>
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

    }
  }
</script>

<style scoped>
  input::-webkit-input-placeholder{
    color:#ccc;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#ccc;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#ccc;
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
