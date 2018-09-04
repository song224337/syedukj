<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是职称精英页面
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
                activeNav:'elite'
            }
        },
        head(){
            return{
                title:'职称精英-上元会计'
            }
        }
    }
</script>

<style scoped>

</style>