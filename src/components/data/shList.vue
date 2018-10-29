<template>
  <div>
    <div class="searchList">
      <div class="search" @click="toSearchList">
        <img src="./../../../static/img/searchicon.png" alt="">请输入名称或编码
      </div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <ul class="dataList">
        <li v-for="item in list" @click="todetail(item.hsCode)">
          <div class="listMain">
            <div class="listTitle">{{item.hsName}}</div>
            <div class="listNumber">商品编码：{{item.hsCode}}</div>
            <div class="listdetail">出口退税率：{{item.hsRate3}}% &nbsp;&nbsp;&nbsp;监管条件：{{item.hsSupervise}}</div>
          </div>
          <div class="todetail">详情</div>
        </li>
      </ul>
    </mescroll-vue>
  </div>
</template>

<script>
  import MescrollVue from 'mescroll.js/mescroll.vue'
  import axios from 'axios';

  export default {
    name: "shList",
    components: {
      MescrollVue // 注册mescroll组件
    },
    data() {
      return {
        list: {},
        page: 1,
        pageSize: 20,
        mescroll: null, //mescroll实例对象
        mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
        mescrollUp: { // 上拉加载的配置.
          callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
          //以下是一些常用的配置,当然不写也可以的.
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 20 //每页数据条数,默认10
          },
          empty: {
            tip: "暂无相关数据" //提示
          }
        },
      }
    },
    methods: {
      todetail(res){
        this.$router.push({path:'/shDetail/'+res});
      },
      toSearchList() {
        this.$router.push({name: 'shsearchList'});
      },

      mescrollInit(mescroll) {
        this.mescroll = mescroll;
        console.log(this.mescroll);
        this.mescroll.optDown.use = false;
        this.mescroll.optUp.htmlNodata = "<p style='font-size:16px' class=\"upwarp-nodata\">没有更多数据了</p>";
      },

      upCallback(page) {
        axios.get("/eport-server/dic/data/getHsCode.do", {
          params: {
            searchKey:'',
            pageNo: page.num, //页码
            pageSize: page.size //每页长度
          }
        }).then((response) => {

          console.log(response);
          //请求的列表数据
          let arr = response.data.data;
          //如果是第一页需手动制空列表
          if (page.num == 1) this.list = [];
          //把请求到的数据添加到列表
          this.list = this.list.concat(arr);
          //数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            this.mescroll.endSuccess(arr.length);
          })
        }).catch((e) => {
          //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          this.mescroll.endErr();
        })
      }
    },

    beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      if(from.name!=='homeList'){
        next(vm => {
          vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
        })
      }else{
        next();
      }
    },
    beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
      next()
    },
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

  /*#wall {
    width: 100%;
    height: 1246px;
    overflow-y: scroll;
  }*/
  .mescroll {
    position: fixed;
    top: 88px;
    bottom: 0;
    height: auto;
  }

  .search img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  /*列表详情*/
  .dataList li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 686px;
    margin-left: 32px;
    border-bottom: 1px solid #EEE;
    padding: 32px 0;
  }

  .listMain {
    width: 520px;
  }

  .todetail {
    font-size: 26px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(40, 95, 177, 1);
    width: 160px;
    text-align: center;
  }

  .listTitle {
    font-size: 34px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
  }

  .listNumber {
    font-size: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
    margin-top: 22px;
  }

  .listdetail {
    font-size: 26px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 26px;
    margin-top: 20px;
  }
</style>
<style>
  .mescroll-upwarp .upwarp-tip{
    font-size: 28px;
  }
</style>
