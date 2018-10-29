<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" autofocus="autofocus" @keyup.13="search" id="input" class="search" placeholder="请输入名称或编码"  ref="input" v-model="searchKey">
      </form>
    </div>
    <div id="wall">
      <div style="text-align: center;padding-top: 32px" v-show="onSearch">
        <img src="./../../../static/img/loading.gif" alt="" width="40px">
      </div>
      <div v-if="nodata&&list.length==0" class="noSearch">-- 暂未搜索到相关数据 --</div>
      <ul class="dataList1">
        <li v-for="item in list" @click="todetail(item.hsCode)">
          <div class="listMain">
            <div class="listTitle">{{item.hsName}}</div>
            <div class="listNumber">商品编码：{{item.hsCode}}</div>
            <div class="listdetail">出口退税率：{{item.hsRate3}}% &nbsp;&nbsp;&nbsp;监管条件：{{item.hsSupervise}}</div>
          </div>
          <div class="todetail">详情</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
    export default {
      name: "searchList",
      data(){
        return{
          searchKey:'',
          shlist:[],
          list: [],
          title:[],
          onelist:false,
          nodata:false,
          onSearch:false
        }
      },
      mounted(){
        var oldUrl = window.location.href;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if(isAndroid){
          this.$nextTick(() => {this.$refs['input'].focus()});
        }else{
          let input = document.getElementById("input");
          input.select();
        }

      },
      methods:{

        todetail(res){
          this.$router.push({path:'/shDetail/'+res});
        },

        search(){
          this.onSearch = true;
          axios.get("/eport-server/dic/data/getHsCode.do", {
            params: {
              searchKey:this.searchKey,
              pageNo: 1, //页码
              pageSize: 999 //每页长度
            }
          }).then((response) => {

            this.list = response.data.data;
            this.title = response.data.data.basicTitle;
            this.nodata = true;
            this.onSearch = false;
          })

          this.$refs.input.blur();
        }
      },

      beforeRouteLeave (to, from, next) {
        if(to.name!=='shDetail'){
          this.list = [];
          this.searchKey = "";
          this.nodata = false;
        }
        next()
      },
    }
</script>

<style scoped>
  .searchList{
    height: 88px;
    width: 100%;
    background-color: #EFEFF4;
    padding-top: 14px;
    box-sizing: border-box;
  }
  .search{
    width: 686px;
    height: 60px;
    border-radius: 10px;
    background: #fff url("./../../../static/img/searchicon.png") no-repeat;
    background-size: 30px;
    background-position: 20px center;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
  }


  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;/*此处只是去掉默认的小×*/
  }
  #wall {
    width: 100%;
    height: 1246px;
    overflow-y: scroll;
  }

  .dataList1 li {
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

  .list_title {
    background: #fff;
    font-size: 32px;
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
    font-size: 22px;
    line-height: 36px;
  }
  .ul_title{
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgb(90, 189, 255);
    margin-bottom: 10px;
    padding: 10px 32px 0 32px;
    background: url("./../../../static/img/xia.png") no-repeat;
    background-position: 680px center;
  }
  .noSearch{
    text-align: center;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 10px 32px 0 32px;

  }
</style>
<style>
  .mescroll-upwarp .upwarp-tip{
    font-size: 28px;
  }
</style>
