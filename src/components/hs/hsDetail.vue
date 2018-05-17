<template>
  <div class="hsDetail">
    <span class="title">基本信息</span>
    <ul class="msg_ul">
      <li>
        <span>商品编码</span>
        <span>0101210010</span>
      </li>
      <li>
        <span>商品名称</span>
        <span>濒危木制其他建筑用木工制品 (包括蜂窝结构的木镶板)</span>
      </li>
    </ul>
    <span class="title">所属章节</span>
    <ul class="msg_ul">
      <li>
        <span>第9类</span>
        <span>木及木制品;木炭;软木及软木制 品;稻草、秸秆、针茅或其他编 结材料制品;篮筐及柳条编结品</span>
      </li>
      <li>
        <span>第4章</span>
        <span>木及木制品;木炭</span>
      </li>
    </ul>
    <span class="title">税率信息</span>
    <ul class="msg_ul">
      <li>
        <span>计量单位</span>
        <span>千克</span>
      </li>
      <li>
        <span>进口优惠税率</span>
        <span>4%</span>
      </li>
      <li>
        <span>出口税率</span>
        <span>0%</span>
      </li>
      <li>
        <span>增值税率</span>
        <span>16%</span>
      </li>
      <li>
        <span>暂定税率</span>
        <span>-</span>
      </li>
      <li>
        <span>进口普通税率</span>
        <span>70%</span>
      </li>
      <li>
        <span>出口退税税率</span>
        <span>-</span>
      </li>
      <li>
        <span>消费税率</span>
        <span>-</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "hsDetail"
    }
</script>

<style scoped>
  .hsDetail{
    margin-top: 96px;
  }
  .title{
    display: block;
    height: 72px;
    font-size:28px;
    font-family:PingFangSC-Regular;
    background:rgba(245,245,245,1);
    color:rgba(170,170,170,1);
    line-height:72px;
    padding-left: 32px;
  }
  .msg_ul{
    padding: 0 32px;
  }
  .msg_ul li{
    padding: 22px 0;
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .msg_ul li:last-child{
    border: 0;
  }
  .msg_ul li span{
    font-size:32px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
  }
  .msg_ul li span:last-child{
    width: 430px;
    text-align: right;
  }
</style>
