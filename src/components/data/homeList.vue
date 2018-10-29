<template>
  <div>
    <div class="searchList">
      <div class="search" @click="toSearchList">
        <img src="./../../../static/img/searchicon.png" alt="">请输入名称或编码
      </div>
    </div>
    <div class="wall">
      <div class="list">
        <div class="list_line">
          <div class="coin" @click="toshlist">
            <img src="./../../../static/img/icon1@2x.png" alt="">HSCode代码
          </div>
          <div class="coin" @click="tolist('BASIC_CODE15')">
            <img src="./../../../static/img/icon13@2x.png" alt="">结汇方式
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list_line">
          <div class="coin" @click="tolist('BASIC_CODE9')">
            <img src="./../../../static/img/icon9@2x.png" alt="">征免性质
          </div>
          <div class="coin" @click="tolist('BASIC_CODE14')">
            <img src="./../../../static/img/icon2@2x.png" alt="">监管方式
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list_line">
          <div class="coin" @click="tolist('BASIC_CODE11')">
            <img src="./../../../static/img/icon5@2x.png" alt="">成交方式
          </div>
          <div class="coin" @click="tolist('BASIC_CODE10')">
            <img src="./../../../static/img/icon6@2x.png" alt="">运输方式
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list_line">
          <div class="coin" @click="tolist('BASIC_CODE12')">
            <img src="./../../../static/img/icon4@2x.png" alt="">计量单位
          </div>
          <div class="coin" @click="tolist('BASIC_CODE3')">
            <img src="./../../../static/img/icon11@2x.png" alt="">币种代码
          </div>
        </div>
      </div>
      <div class="list">
        <div class="list_line">
          <div class="coin" @click="tolist('BASIC_CODE8')">
            <img src="./../../../static/img/icon3@2x.png" alt="">关区代码</div>
            <div class="coin" @click="tolist('BASIC_CODE4')">
              <img src="./../../../static/img/icon8@2x.png" alt="">国家代码</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: "dataList",
    methods: {
      toSearchList() {
        this.$router.push({path: 'searchList/all'});
      },
      tolist(res) {
        this.$router.push({'path': '/dataList/' + res});
      },
      toshlist() {
        this.$router.push({name: 'shList'});
      }
    }
  }
</script>

<style scoped>
  .searchList {
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
  }

  .search {
    width: 686px;
    height: 60px;
    border-radius: 10px;
    background: #fff;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .search img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  .wall {
    width: 100%;
    height: 1246px;
    overflow-y: scroll;
  }

  .list_line {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
  }

  .list_line .coin:first-child {
    border-right: 1px solid #f5f5f5;
  }

  .coin {
    width: 374px;
    display: flex;
    height: 120px;
    text-align: left;
    align-items: center;
    justify-content: left;
    box-sizing: border-box;
    padding-left: 32px;

    font-size: 34px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgb(55, 55, 55);
  }

  .coin img {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
</style>
