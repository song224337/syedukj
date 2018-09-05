<template>
  <div>
    <Header :activeNav="activeNav"></Header>
    <h1>这是关于我们页面</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
  export default {
    components:{
      Header,
      Footer
    },
    data(){
      return{
        activeNav:'about'
      }
    },
    head(){
      return{
        title:'关于我们-上元会计'
      }
    }
  }
</script>

<style scoped>

</style>
