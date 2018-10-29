<template>
  <div>
    <ul>
      <li v-for="item in list" class="park" @click="toParkDetail(item.id)">
        <img :src=item.parkImg alt="" class="parkImg">
        <div class="park_detail">
          <p class="title">{{item.name}}</p>
          <p class="text">{{item.address}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "park",
      data(){
          return{
            list:[]
          }
      },
      methods:{
        toParkDetail(id){
          this.$router.push({path:'/parkDetail/'+id})
        }
      },
      mounted(){
          axios.post('/eport-server/gui/data/queryParks.do',{
            pageNo:1,
            pageSize:50
          }).then((res)=>{
            this.list = res.data.data;
          })
      }
    }
</script>

<style scoped>
  .parkImg{
    width: 686px;
    height: 280px;
    border-radius: 10px;
  }
  .park{
    padding: 16px 32px 16px 32px;
    border-bottom: 1px solid #f5f5f5;
    background-position: 98% center;
    background-size: 50px;
  }
  p {
    word-wrap:break-word;
  }
  .title{
    font-size:32px;
    font-family:PingFangSC-Regular;
    color: rgb(75, 75, 75);
    margin-bottom: 12px;
  }
  .text{
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
  }
</style>
