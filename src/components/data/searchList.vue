<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search"  @keyup.13="search" class="search" placeholder="请输入名称或编码"  ref="input" v-model="searchKey" id="input">
      </form>
    </div>
    <div id="wall">
      <div style="text-align: center;padding-top: 32px" v-show="onSearch">
        <img src="./../../../static/img/loading.gif" alt="" width="40px">
      </div>

      <div v-if="((nodata&&shlist.length==0&&Object.keys(this.list).length==1)&&!onelist)||(onelist&&list.length==0)" class="noSearch">-- 暂未搜索到相关数据 --</div>
      <ul class="dataList1">
        <div class="ul_title" v-if="shlist.length!==0">HSCODE</div>
        <li v-for="item in shlist" @click="todetail(item.hsCode)">
          <div class="listMain">
            <div class="listTitle">{{item.hsName}}</div>
            <div class="listNumber">商品编码：{{item.hsCode}}</div>
            <div class="listdetail">出口退税率：{{item.hsRate3}}% &nbsp;&nbsp;&nbsp;监管条件：{{item.hsSupervise}}</div>
          </div>
          <div class="todetail">详情</div>
        </li>
      </ul>
      <ul v-for="item in list" v-if="item.basicKey" class="dataList">
        <div class="ul_title">{{item.basicName}}</div>
        <li v-for="i in item.basicValue">
          <div class="list_title">{{JSON.parse(item.basicTitle)[0]}}：{{JSON.parse(i)[0]}}</div>
          <div class="list_body">
            <p v-for="(line,index) in JSON.parse(item.basicTitle)" v-if="index!==0">{{JSON.parse(item.basicTitle)[index]}}：{{JSON.parse(i)[index]}}</p>
          </div>
        </li>
      </ul>
      <ul v-if="onelist" class="dataList">
        <li v-for="item in list">
          <div class="list_title">{{JSON.parse(title)[0]}}：{{JSON.parse(item)[0]}}</div>
          <div class="list_body">
            <p v-for="(line,index) in JSON.parse(title)" v-if="index!==0">{{JSON.parse(title)[index]}}：{{JSON.parse(item)[index]}}</p>
          </div>
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
          onSearch:false,
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
      computed: {
        html: function() {
          return `<span style="color: red">${this.searchKey}</span>`
        }
      },
      methods:{
        todetail(res){
          this.$router.push({path:'/shDetail/'+res});
        },

        search(){
          if(this.$route.params.type=="all"){
            this.onelist = false;
            if(this.searchKey){
              this.onSearch = true;
              axios.get('/eport-server/dic/data/searchAll.do',{
                params:{
                  searchKey:this.searchKey
                },
              }).then((res)=>{
                this.shlist = res.data.data.HSCode;
                this.list = res.data.data;
                this.nodata = true;

                this.onSearch = false;
              })
            }else{
              this.onSearch = false;
              return
            }
          }else{
            this.onelist = true;
            if(this.searchKey){
              this.onSearch = true;
              axios.get("/eport-server/dic/data/getBasicInfoByKey.do", {
                params: {
                  basicKey:this.$route.params.type,
                  pageNo: 1, //页码
                  pageSize: 999, //每页长度
                  searchKey:this.searchKey
                },
              }).then((res)=>{


                this.list = res.data.data.basicValue;
                this.title = res.data.data.basicTitle;

                this.onSearch = false;
                this.nodata = true;
              })
            }else{
              this.onSearch = false;
              return
            }
          }
          this.$refs.input.blur();
        }
      },
    /*TODO  离开当前页面 list普通表清空 shlist sh表单清空 搜索关键字重置 无数据显示 重置 单一表单查询重置 */
      beforeRouteLeave (to, from, next) {
        if(to.name!=='shDetail'){
          this.list = [];
          this.shlist = [];
          this.searchKey = "";
          this.nodata = false;
          this.onelist = false;
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
    font-size: 28px;
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
  .search-text{
    color: aqua;
  }
</style>
<style>
   .mescroll-upwarp .upwarp-tip{
    font-size: 28px;
  }
</style>
