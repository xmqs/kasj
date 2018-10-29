<template>
  <div>
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post">
        <input type="search" @keyup.13="search" class="search" placeholder="请输入关键字查询相关问题" ref="input1"
               v-model="searchKey">
      </form>
    </div>
    <div id="wall">
      <div style="text-align: center;padding-top: 32px" v-show="onSearch">
        <img src="./../../../static/img/loading.gif" alt="" width="40px">
      </div>
      <div class="noanswer" v-if="noanswer">-- 未查询到相关问题 --</div>
      <ul class="dataList">
        <li v-for="(item,index) in list">
          <div class="title">
            <div class="question">{{index+1}}、{{item.question}}</div>
            <img v-if="!item.clicked" src="./../../../static/img/down.png" alt="" class="down"
                 @click="changeState(index)">
            <img v-if="item.clicked" src="./../../../static/img/up.png" alt="" class="down" @click="changeState(index)">
          </div>
          <div class="answer" v-if="item.clicked">{{item.answer}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "question",
    data() {
      return {
        list: [],
        title: [],
        key: "",
        searchKey: '',
        noanswer: false,
        onSearch:false,
      }
    },
    mounted() {
      this.key = this.$route.params.key;
    },
    methods: {
      changeState(index) {
        this.list[index].clicked = !this.list[index].clicked;
      },
      search() {
        if (this.searchKey !== "") {
          this.onSearch = true;
          axios.post('/eport-server/gui/data/searchQuestion.do', {
            searchKey: this.searchKey
          }).then((res) => {
            this.onSearch = false;
            let arr = res.data.data;
            if (arr.length == 0) {
              this.noanswer = true;
            } else {
              this.noanswer = false;
            }
            arr.forEach((e) => {
              e.clicked = false;
            })
            this.list = arr;
          })
        }
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
  #wall {
    width: 100%;
    height: 1246px;
    overflow-y: scroll;
  }

  .search {
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

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
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

  .question {
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .title {
    display: flex;
    align-items: center;
  }

  .question {
    width: 620px;
  }

  .down {
    width: 60px;
  }

  .answer {
    padding-top: 6px;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgb(93, 93, 93);
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none; /*此处只是去掉默认的小×*/
  }

  .noanswer {
    text-align: center;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-top: 16px;
  }
</style>
<style>
  .mescroll-upwarp .upwarp-tip{
    font-size: 28px;
  }
</style>
