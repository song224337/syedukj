<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是实战师资页面
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
                activeNav:'teacher'
            }
        },
        head(){
            return{
                title:'实战师资-上元会计'
            }
        }
    }
</script>

<style scoped>

</style>