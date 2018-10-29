<template>
  <div class="hsDetail">
    <div class="title">基本信息</div>
    <div class="line">
      <div class="line_title">商品编码</div>
      <div class="line_detail">{{data.hsCode}}</div>
    </div>
    <div class="line">
      <div class="line_title">商品名称</div>
      <div class="line_detail">{{data.hsName}}</div>
    </div>
    <div class="title">所属章节</div>
    <div class="line">
      <div class="line_title">第{{parseInt(data.hsCodeCatalog.classCode)}}类</div>
      <div class="line_detail">{{data.hsCodeCatalog.className}}</div>
    </div>
    <div class="line">
      <div class="line_title">第{{parseInt(data.hsCodeCatalog.sectionCode)}}章</div>
      <div class="line_detail">{{data.hsCodeCatalog.sectionName}}</div>
    </div>
    <div class="title">税率信息</div>
    <div class="line">
      <div class="line_title">计量单位</div>
      <div class="line_detail">{{data.hsUnit}}</div>
    </div>
    <div class="line">
      <div class="line_title">最惠税率</div>
      <div class="line_detail">{{data.hsRate1}}%</div>
    </div>
    <div class="line">
      <div class="line_title">普通税率</div>
      <div class="line_detail">{{data.hsRate2}}%</div>
    </div>
    <div class="line">
      <div class="line_title">退税率</div>
      <div class="line_detail">{{data.hsRate3}}%</div>
    </div>
    <div class="line">
      <div class="line_title">增值税</div>
      <div class="line_detail">{{data.hsRate4}}%</div>
    </div>
    <div class="title">申报要素</div>
    <div class="line" v-for="(item,index) in data.hsDeclare">
      <div class="line_title">{{parseInt(index)+1}}</div>
      <div class="line_detail">{{item}}</div>
    </div>
    <div class="title">监管条件</div>
    <div class="line" v-for="item in data.hsSupervise">
      <div class="line_title">{{JSON.parse(item)[0]}}</div>
      <div class="line_detail">{{JSON.parse(item)[1]}}</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "shDetail",
      data(){
          return{
            data:{}
          }
      },
      mounted(){
          axios.get('/eport-server/dic/data/getHsCodeInfo.do',{params:{
              hsCodeNumber:this.$route.params.code
            }}).then((res)=>{
              this.data = res.data.data;
          })
      }
    }
</script>

<style scoped>
  .hsDetail{
    background: #f5f5f5;
  }
  .title{
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(170,170,170,1);
    line-height:72px;
    padding-left: 32px;
  }
  .line{
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: #fff;
    padding: 0 32px;

    font-size:32px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    min-height: 88px;
    border-bottom: 1px solid #f5f5f5;
  }
  .line_title{
    width: 200px;
  }
  .line_detail{
    width: 450px;
    text-align: right;
  }
</style>
