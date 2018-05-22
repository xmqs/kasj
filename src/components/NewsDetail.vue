<template>
  <div class="NewDetail">
    {{this.$route.params.htmlContent}}
  </div>
</template>

<script>
    export default {
        name: "NewsDetail"
    }
</script>

<style scoped>
  .NewDetail{
    padding: 40px  32px 0 32px;
    margin-top: 96px;
  }
  .NewHeader{
    font-size:50px;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    line-height:50px;
  }
  .NewTime{
    height:26px;
    font-size:26px;
    font-family:PingFangSC-Regular;
    color:rgba(153,153,153,1);
    line-height:26px;
    margin-top: 30px;
  }
  .NewBody{
    font-size:40px;
    font-family:PingFangSC-Regular;
    color:rgba(51,51,51,1);
    line-height:64px;
    margin-top: 42px;
  }
</style>
