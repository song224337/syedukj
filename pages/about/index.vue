<template>
  <div>
    <Header :activeNav="activeNav"></Header>
    <div class="app">
      <!-- 轮播 -->
      <Swiper></Swiper>
      <div class="about-us">
        <!-- 面包屑 -->
        <div class="bread-line">
          <span class="icon iconfont icon-home"></span>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 内容 -->
        <div class="about-content">
          <h2 class="kj-title">上元教育</h2>
          <div class="kj-info">
            <p>
              上元教育成立于2005年，总部位于苏州，是职业教育培训行业的领跑者。
              以品牌化运营模式和出色的办学能力发展成为强大的职业培训综合体，
              是华东区域颇具影响力的职业培训机构，更将成为中国职业培训学校的标杆。
            </p>
            <p>
              发展十余年来，已经先后在江苏的苏州、南京、无锡、常州、扬州、泰州、徐州、宿迁、
              浙江的杭州、宁波、金华、嘉兴、绍兴,安徽的芜湖、滁州、以及上海等地成立了分校，
              截止到2017年9月，上元教育的发展版图上已经有近60多所分校，未来还将继续发展壮大，
              到2019年，分校数量将达到100所以上。上元教育目前每年学员数量超120000人次，
              累计为社会培养各类优秀人才达1200000人。
            </p>
          </div>
        </div>
      </div>
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
        activeNav:'about'
      }
    },
    head(){
      return{
        title:'关于我们-上元会计'
      }
    }
  }
</script>

<style scoped>
.about-us{
  width:100%;
  margin:30px 0 100px 0;
}
.bread-line{
  width:100%;
  position:relative;
  border-bottom:1px solid #ccc;
  padding-bottom:10px;
 }
.bread-line .icon{
  font-size:30px;
}
.bread-line .bread{
  width:1000px;
  position:absolute;
  top:10px;
  left:40px;
  font-size:16px;
}
/* 内容 */
.about-content{
  padding:10px 0;
}
.kj-title{
  text-align:center;
  color:#023894;
  margin:30px 0;
}
.kj-info{
  font-size:18px;
  line-height:30px;
  text-indent:35px
}
.kj-info p{
  margin:15px 0;
}
</style>
