<template>
  <div class="navheader">
    <slot>
    </slot>
    <span id="h_back" @click="headerBack"></span>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    name: "navheader",
    methods:{
      headerBack(){
        this.$router.back(-1);
      }
    }
  }
</script>
<style>
  .navheader{
    height: 96px;
    background:#4D7BFE;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 34px;
    line-height: 96px;
  }
  #h_back{
    display: inline-block;
    width:20px;
    height: 32px;
    background: url('./../../../static/img/Back.png') no-repeat;
    position: absolute;
    left:32px;
    top: 50%;
    margin-top:-16px;
  }
</style>
