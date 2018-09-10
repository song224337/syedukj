<template>
    <div>
        <Header></Header>
        这是新闻详情页面
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

          }
        }
    }
</script>

<style scoped>

</style>
