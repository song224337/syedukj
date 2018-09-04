<template>
  <div>
    <Header :activeNav="activeNav"></Header>
    <h1>这是关于我们页面</h1>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
  export default {
    components:{
      Header
    },
    data(){
      return{
        activeNav:'about'
      }
    }
  }
</script>

<style scoped>

</style>
