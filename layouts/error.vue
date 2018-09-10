<template>
  <div class="container">
    <Header></Header>
    <div v-if="error.statusCode === 404" class="error-box">
      <nuxt-link to="/">
        <img src="~static/images/error.png" alt="">
      </nuxt-link>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
export default {
  props: ['error'],
  layout: 'blog', // 你可以为错误页面指定自定义的布局
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  .error-box{
    width:852px;
    margin:30px auto;
  }
</style>
