<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是新闻资讯页面
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