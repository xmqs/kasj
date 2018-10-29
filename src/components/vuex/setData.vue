<template>
  <div>
    <div @click="test">123</div>
    <div>{{getUserName}}</div>
    <div>{{getUserPhone}}</div>
    <div @click="jump">跳转</div>
    <div @click="alertNumber">显示数值</div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
      name: "setData",
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getIncludedComponents",
          "getUserPhone",
        ])
      },
      methods: {
        test(){
          this.$store.commit("setUserName","qwqweetergfr");
          this.$store.commit("setUserPhone","setIncludeComponents");
        },
        jump(){
          this.$router.push('/getData');
        },
        alertNumber(){
          alert(this.getUserPhone);
        },
        ...mapMutations({
          setUserId: 'setUserId',
          setUserName: 'setUserName',
          setIncludedComponents: 'setIncludedComponents',
          setUserPhone: 'setUserPhone',
        }),

      }
    }
</script>

<style scoped>

</style>
