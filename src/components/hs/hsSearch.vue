<template>
  <div class="hsSearch">
    <div class="search">
      <input type="text" class="searchIn" placeholder="请输入关键字" autofocus>
      <span class="searchdele">取消</span>
    </div>
    <div class="listMain">
      <ul>
        <li @click="toDetail">
          <div>
            <p class="p1">改良种用濒危野马</p>
            <p class="p2">商品编码：0101210010</p>
            <div class="p3">
              <span>出口退税率：13%</span>
              <span>监管条件：F,E,A,B</span>
              <span>检验检疫：P,Q</span>
            </div>
          </div>
          <div class="todetail">
            详情
          </div>
        </li>
        <li>
          <div>
            <p class="p1">改良种用濒危野马改良种用濒危野马改良种用濒危野马改良种用濒危野马改良种用濒危野马改良种用濒危野马改良种用濒危野马</p>
            <p class="p2">商品编码：0101210010</p>
            <div class="p3">
              <span>出口退税率：13%</span>
              <span>监管条件：F,E,A,B</span>
              <span>检验检疫：P,Q</span>
            </div>
          </div>
          <div class="todetail">
            详情
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hsSearch",
      methods:{
        toDetail(){
          this.$router.push("/hs/hsDetail");
        }
      }
    }
</script>

<style scoped>
  .hsSearch{
    margin-top: 96px;
  }
  .search{
    height: 88px;
    position: fixed;
    top: 96px;
    background:rgba(239,239,244,1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .searchInput{
    width:686px;
    height:60px;
    background:rgba(255,255,255,1);
    border-radius: 10px ;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .searchInput img{
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  .searchInput span{
    font-size:28px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
  }
  .listMain{
    padding: 88px  32px  0 32px;
  }
  .listMain ul li{
    display: flex;
    padding: 32px 0;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid #EEEEEE;
  }
  .p1{
    font-size:32px;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    margin-bottom: 20px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 630px;
  }
  .p2{
    font-size:22px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height:22px;
    margin-bottom: 20px;
  }
  .p3{
    font-family:PingFangSC-Regular;
    display: flex;
    justify-content:space-between;
    width: 630px;
    line-height: 22px;
  }
  .p3 span{
    display: inline-block;
    color:rgba(153,153,153,1);
    font-size:22px;
    width: 190px;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .todetail{
    font-size:26px;
    font-family:PingFangSC-Regular;
    color:rgba(40,95,177,1);
    line-height:37px;
  }
  .searchIn{
    width:590px;
    height:60px;
    border-radius: 10px ;
    outline: 0;
    border: 0;
    margin-right: 32px;
    box-sizing: border-box;
    padding-left: 71px;
    font-size:28px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    background:#fff url("./../../../static/img/searchicon.png") no-repeat;
    background-size: 24px;
    background-position: 32px center;
  }
  .searchdele{
    font-size:32px;
    font-family:PingFangSC-Regular;
    color:rgba(40,95,177,1);
  }
</style>
