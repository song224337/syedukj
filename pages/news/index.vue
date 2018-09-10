<template>
    <div>
        <Header :activeNav="activeNav"></Header>
        <div class="app">
          <!-- 轮播 -->
          <Swiper></Swiper>
          <!-- 新闻列表 -->
          <div class="news-list">
            <!-- 面包屑 -->
            <div class="bread-line">
              <span class="icon iconfont icon-home"></span>
              <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 列表 -->
            <div class="news-content">
              <ul>
                <li v-for="(item,index) in newsData" :key="index" class="clearFloat">
                  <nuxt-link to="">
                    <div class="time">
                      <span class="year-month">{{(item.time).slice(0,7)}}</span>
                      <span class="day-num">{{(item.time).slice(8)}}</span>
                    </div>
                    <div class="content-desc">
                      <p class="desc-title">{{item.title}}</p>
                      <p class="desc-text">{{(item.desc).slice(1,120)+'...[详情]'}}</p>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
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
                activeNav:'news',
                newsData:[
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'长跑比赛当中，决定着最终结果的往往是最后几百米甚至最后几十米的距离，对于中级会计职称也是如此，最后二十天甚至最后几天也有着极大的可能性改变最终结果。因此，不管你现在的复习进度和复习成果如何，在最后的这二十天时间里，如果能够放手一搏，那么广大考生通过考试的概率必然会得到很大提升。但是，究竟怎么样放手一搏呢？下面和上元会计小编一起来看看吧！',
                    time:'2018-09-03',
                    id:'a'
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:2
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:3
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:4
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:5
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:6
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:7
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:8
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:9
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:10
                  },
                  {
                    title:'会计培训班学霸CPA一次过六科是怎么做到的？',
                    desc:'那些一次性注册会计师考过6门的学霸是怎么备考注册会计师的呢？相信很多人都会有这个疑惑，那么今天上元会计小编就跟大家一起来看看吧！1、应届毕业生一年过6科这位..',
                    time:'2018-09-03',
                    id:11
                  },
                ]
            }
        },
        head(){
            return{
                title:'新闻资讯-上元会计'
            }
        },
        methods:{
          handleClick (id){
            console.log(id)
            if(/^\d+$/.test(id)){
              this.$router.push("/news/"+id)
            }else{
              alert('参数不正确')
            }
          }
        }
    }
</script>

<style scoped>
 .news-list{
   width:100%;
   margin:30px 0;
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
/*新闻列表*/
.news-content{
  width:100%;
}
.news-content li{
  width:100%;
  border-bottom:1px solid #ccc;
  padding:20px 0;
}
.news-content li:hover{
  background:#fafcff;
}
.news-content li:hover .desc-title{
  color:#023894;
}
.news-content .time{
  width:85px;
  float:left;
  margin-right:30px;
  font-family:'思源黑体 CN';
  font-size:20px;
  font-weight:bold;
  color:#023894;
  text-align:center;
}
.news-content .time .year-month{
  display:block;
  background:#cccc;
}
.news-content .time .day-num{
  display:block;
  width:100%;
  height:85px;
  margin-top:5px;
  line-height:85px;
  background:#023894;
  color:#fff;
  font-size:60px;
}
.content-desc{
  width:1080px;
  float:left;
}
.desc-title{
  font-size:22px;
  color:#333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom:30px;
}

.desc-text{
  font-size:16px;
}
</style>
