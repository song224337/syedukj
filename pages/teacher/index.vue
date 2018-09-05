<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        这是实战师资页面
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
