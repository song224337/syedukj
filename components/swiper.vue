<template>
    <div class="swiper">
        <el-carousel height="400px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src="item" alt="" class="fullWidth">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgs:[
                    'images/1.jpg',
                    'images/2.jpg',
                    'images/3.jpg',
                ]
            }
        }
    }
</script>

<style scoped>
 .swiper{
     width:100%;
     height:400px;
     overflow:hidden;
     margin-top:30px;
 }
</style>