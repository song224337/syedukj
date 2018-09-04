<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是职称进阶页面
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
                activeNav:'advance'
            }
        },
        head(){
            return{
                title:'职称进阶-上元会计'
            }
        }
    }
</script>

<style scoped>

</style>