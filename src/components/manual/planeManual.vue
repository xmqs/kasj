<template>
  <div>
    <div v-for="item in data" class="line" @click="toDetail(item.url)">
      {{item.sourceLabel}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "planeManual",
      data(){
        return{
          data:[]
        }
      },
      mounted(){
          axios.post('/web-editor-web/public/catalog/querySource.do?catalogId=112&catalogAlias=jczn&sourceType=03&pageNo=1&pageSize=10').then((res)=>{
            console.log(res);
            this.data = res.data.data;
          })
      },
      methods:{
          toDetail(res){
            window.location = res;
          }
      }
    }
</script>

<style scoped>
  .line{
    font-size:34px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:42px;
    border-bottom: 1px solid #f5f5f5;
    min-height: 88px;
    line-height: 88px;
    padding: 6px 32px;

    background: url('../../../static/img/right.png') no-repeat;
    background-size: 50px;
    background-position: 98% center;
  }
</style>
