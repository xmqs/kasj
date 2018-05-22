<template>
  <div class="edm">
    <div class="changeTime">
      更新日期：{{upTime}}
    </div>
    <div class="changePage">
      <router-link to="/">每日价格</router-link>
      <router-link to="everydayMain" class="page_active">每日一品</router-link>
    </div>
    <ul class="NewsList">
      <li @click="toNews(item.htmlContent)" v-for="item in list">
        <div class="NewLeft">
          <h2>
            {{item.sourceLabel}}
          </h2>
          <span>
            {{editTime(item.createTime)}}
          </span>
        </div>
        <img :src=item.cover alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "everydayMain",
    data() {
      return {
        list: [],
        upTime:"",
      }
    },
    methods: {
      toNews(htmlContent) {
        this.$router.push({name: "NewsDetail",params:{htmlContent:htmlContent}});
      },
      //时间转换
      editTime(time) {
        var now = new Date(time);
        //	return now;
        return now.getFullYear() + "-" + this.fix((now.getMonth() + 1), 2) + "-" + this.fix(now.getDate(), 2);
      },
      //将日期格式化为两位，不足补零
      fix(num, length) {
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
      },
      //将日期格式化
      editDate() {
        var myDate = new Date();
        var mytime = myDate.toLocaleTimeString();
        var a = mytime.split(":");
        var times = a[0] * 60 * 60 * 1000 + a[1] * 60 * 1000 + a[2] * 1000;
        alert(times);
      }
    },
    mounted() {
      let data ={
        "catalogId": "3",
        "sourceType":'03',
        "pageNo": 1,
        "pageSize": 20,
        "queryParams": []
      }
      axios.post('/web-editor-web//public/catalog/querySource.do', "catalogId=3&sourceType=03&pageNo=1&pageSize=20")
        .then((response) => {
          this.list = response.data.data;
          this.upTime = this.editTime(this.list[0].createTime);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
  .edm {
    margin-top: 96px;
  }

  .content {
    background-color: #fff;
  }

  .changePage {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #EEEEEE;
    background: #fff;
    border-bottom: 20px solid #F5F5F5;
  }

  .changePage a {
    float: left;
    text-align: center;
    width: 50%;
    border-bottom: 5px solid #fff;
    line-height: 88px;
    font-size: 30px;
    color: #333;
  }

  .changePage a.page_active {
    color: #4D7BFE;
    border-bottom: 5px solid #4D7BFE;
  }

  .changePage::after {
    content: "";
    clear: both;
    display: table;
  }

  /*主题*/
  .content {
    border-top: 20px solid #F5F5F5;
  }

  .changeTime {
    height: 72px;
    background: rgba(255, 247, 234, 1);
    font-size: 28px;
    font-family: PingFangSC-Regular;
    color: rgba(255, 185, 74, 1);
    line-height: 72px;
    padding-left: 32px;
  }

  .NewsList {
    padding: 0 20px;
  }

  .NewsList li {
    padding: 20px 0;
    height: 192px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
  }

  .NewsList li img {
    width: 120px;
    height: 120px;
    display: inline-block;
  }

  .NewLeft {
    display: inline-block;
  }

  .NewLeft h2 {
    height: 42px;
    font-size: 30px;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
    width: 542px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .NewLeft p {
    height: 68px;
    font-size: 22px;
    font-family: PingFangSC-Regular;
    color: rgba(153, 153, 153, 1);
    line-height: 34px;
    margin-top: 7px;
    width: 542px;
    overflow: hidden; /*超出部分隐藏*/
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .NewLeft span {
    display: block;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular;
    color: rgba(153, 153, 153, 1);
    line-height: 28px;
    margin-top: 7px;
  }
</style>
