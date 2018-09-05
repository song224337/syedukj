<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        <div class="app">
          <!-- 轮播 -->
          <Swiper></Swiper>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '~/components/header.vue'
import Swiper from '~/components/swiper.vue'
import Footer from '~/components/footer.vue'
    export default {
        components:{
            Header,
            Swiper,
            Footer
        },
        data(){
            return{
                activeNav:'news'
            }
        },
        head(){
            return{
                title:'新闻资讯-上元会计'
            }
        }
    }
</script>

<style scoped>

</style>
