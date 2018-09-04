<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是实操做账页面
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
                activeNav:'oper'
            }
        },
        head(){
            return{
                title:'实操做账-上元会计'
            }
        }
    }
</script>

<style scoped>

</style>