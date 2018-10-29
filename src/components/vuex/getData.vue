<template>
  <div>
    {{getUserName}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      name: "getData",
      computed: {
        ...mapGetters([
          "getUserId",
          "getUserName",
          "getIncludedComponents",
          "getUserPhone",
        ])
      },
    }
</script>

<style scoped>

</style>
