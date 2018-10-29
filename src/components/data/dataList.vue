<template>
  <div>
    <div class="searchList">
      <div class="search" @click="toSearchList">
        <img src="./../../../static/img/searchicon.png" alt="">请输入名称或编码
      </div>
    </div>
      <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
        <ul class="dataList">
          <li v-for="item in list">
            <div class="list_title">{{JSON.parse(title)[0]}}：{{JSON.parse(item)[0]}}</div>
            <div class="list_body">
              <p v-for="(line,index) in JSON.parse(title)" v-if="index!==0">{{JSON.parse(title)[index]}}：{{JSON.parse(item)[index]}}</p>
            </div>
          </li>
        </ul>
      </mescroll-vue>
  </div>
</template>

<script>
  import MescrollVue from 'mescroll.js/mescroll.vue'
  import axios from 'axios';

  export default {
    name: "dataList",
    components: {
      MescrollVue // 注册mescroll组件
    },
    data() {
      return {
        list: [],
        title:[],
        key:"",
        page: 1,
        pageSize: 20,
        mescroll: null, //mescroll实例对象
        mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
        mescrollUp: { // 上拉加载的配置.
          callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
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
    mounted(){
      this.key = this.$route.params.key;
    },
    methods: {
      toSearchList() {
        this.$router.push({path: '/searchList/'+this.$route.params.key});
      },

      mescrollInit(mescroll) {
        this.mescroll = mescroll;
        console.log(this.mescroll);
        this.mescroll.optDown.use = false;
        this.mescroll.optUp.htmlNodata = "<p style='font-size:16px' class=\"upwarp-nodata\">没有更多数据了</p>";
      },


      upCallback(page) {
        axios.get("/eport-server/dic/data/getBasicInfoByKey.do", {
          params: {
            basicKey:this.key,
            pageNo: page.num, //页码
            pageSize: page.size //每页长度
          }
        }).then((response) => {
          //请求的列表数据
          let arr = response.data.data.basicValue;
          //如果是第一页需手动制空列表
          if (page.num == 1) this.list = [];
          //把请求到的数据添加到列表
          this.list = this.list.concat(arr);
          this.title = response.data.data.basicTitle;
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

  .list_title {
    background: #fff;
    font-size: 34px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 10px;
  }

  .dataList li {
    margin: 0 auto;
    width: 686px;
    border-bottom: 1px solid #eee;
    padding: 26px 0;
  }

  .list_body p {
    font-size: 28px;
    line-height: 36px;
  }
</style>
