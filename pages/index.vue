<template>
    <div>
      <!-- 页头 -->
      <Header :activeNav="activeNav"></Header>
      <!-- 内容区域 -->
      <div class="app">
        <!-- 轮播 -->
        <Swiper></Swiper>
        <!-- 图文区域 -->
        <el-row class="content">
          <el-col :span="17">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="最新文章" name="first">
                <div>
                  <ul class="content-list">
                    <li v-for="(item,index) in essay1" :key="index" class="clearFloat" @click="handleClickDetail(1)">
                      <nuxt-link to="">
                        <div class="content-img">
                          <img :src="item.img" alt="" class="fullWidth">
                        </div>
                        <div class="content-detail">
                          <p class="content-title">{{item.title}}</p>
                          <p class="content-text">{{item.detail}}</p>
                          <p class="content-time">{{item.release}}</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最新文章" name="second">
                <div>
                  <ul class="content-list">
                    <li v-for="(item,index) in essay2" :key="index" class="clearFloat">
                      <nuxt-link to="">
                        <div class="content-img">
                          <img :src="item.img" alt="" class="fullWidth">
                        </div>
                        <div class="content-detail">
                          <p class="content-title">{{item.title}}</p>
                          <p class="content-text">{{item.detail}}</p>
                          <p class="content-time">{{item.release}}</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最新文章" name="third">
                <div>
                  <ul class="content-list">
                    <li v-for="(item,index) in essay3" :key="index" class="clearFloat">
                      <nuxt-link to="">
                        <div class="content-img">
                          <img :src="item.img" alt="" class="fullWidth">
                        </div>
                        <div class="content-detail">
                          <p class="content-title">{{item.title}}</p>
                          <p class="content-text">{{item.detail}}</p>
                          <p class="content-time">{{item.release}}</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最新文章" name="fourth">
                <div>
                  <ul class="content-list">
                    <li v-for="(item,index) in essay4" :key="index" class="clearFloat">
                      <nuxt-link to="">
                        <div class="content-img">
                          <img :src="item.img" alt="" class="fullWidth">
                        </div>
                        <div class="content-detail">
                          <p class="content-title">{{item.title}}</p>
                          <p class="content-text">{{item.detail}}</p>
                          <p class="content-time">{{item.release}}</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="最新文章" name="fifth">
                <div>
                  <ul class="content-list">
                    <li v-for="(item,index) in essay5" :key="index" class="clearFloat">
                      <nuxt-link to="">
                        <div class="content-img">
                          <img :src="item.img" alt="" class="fullWidth">
                        </div>
                        <div class="content-detail">
                          <p class="content-title">{{item.title}}</p>
                          <p class="content-text">{{item.detail}}</p>
                          <p class="content-time">{{item.release}}</p>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
            <div class="left-bottom-img">
              <img src="~static/images/banner.jpg" alt="" class="fullWidth">
            </div>
          </el-col>
          <el-col :span="7">
            <div class="right-banner">
              <ul>
                <li v-for="(tmp,index) in rightImg" :key="index">
                  <nuxt-link to="">
                    <div class="right-img-box">
                      <img :src="tmp" alt="" class="fullWidth">
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 页脚 -->
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import Swiper from '~/components/swiper.vue'
export default {
  components: {
    Header,
    Footer,
    Swiper
  },
  data(){
    return {
      activeNav: 'index',
      activeName2: 'first',
      rightImg:[
        'images/01.jpg',
        'images/02.jpg',
        'images/03.jpg',
      ],
      essay1:[
        {
          img: 'images/001.jpg',
          title: '中级会计职称紧张情绪怎么调节？合肥中级会计职称培训哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '注册会计师最近待遇好吗？合肥哪里有好的会计培训机构推荐？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
      ],
      essay2:[
        {
          img: 'images/002.jpg',
          title: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '注册会计师现在考以后会不会就没用了？苏州注册会计培训机构哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
      ],
      essay3:[
        {
          img: 'images/001.jpg',
          title: 'CPA和审计师哪个含金量高？苏州注册会计培训学校哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '零基础考过CPA有什么方法？苏州注册会计培训哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
      ],
      essay4:[
        {
          img: 'images/003.jpg',
          title: '在职人员应该怎么才能高效备考中级会计职称，考中级会计职称培训班哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '2018MACC第二季度成绩公布，上元会计学员再创新高，通过率高达96%！',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
      ],
      essay5:[
        {
          img: 'images/001.jpg',
          title: '2019年除了初级还有哪些证书可以考？会计培训机构哪家好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '2019年初级会计职称报考条件是什么？哪家会计培训机构好？',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/001.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/002.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
        {
          img: 'images/003.jpg',
          title: '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
          detail: '当你初识这世间，你带着两眼的清澈，迫不及待的，遥望着远方的五彩缤纷！当你经过这世间，你带着两眼的冰冷，漫不经心的，漠视你身边的万紫千红！有人说你变了，你却抱怨这个世界变了！或许是一切都变了！人总会是这样的，从开始未经世事的新奇，到后来历经沧桑的厌倦。',
          release: '2018-09-03'
        },
      ],
    }
  },
  head(){
    return{
      title:'上元会计-会计培训'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClickDetail(value){
      console.log(value)
      this.$router.push('news/newsDetail?id='+value)
    }
  }
}
</script>

<style>
.content{
  margin-top:30px;
}
/*tab标签重新定义样式*/
.el-tabs--card>.el-tabs__header{
  border:1px solid #ccc;
}
.el-tabs__item:hover{
  color:#fff;
  background:#003399;
}
.el-tabs__nav{
  width:100%;
  border:0;
}
.el-tabs__nav.is-top{
  margin-top:-1px;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
  border:0;
  width:20%;
  height:60px;
  text-align:center;
  font-size:18px;
  line-height:60px;
}
.el-tabs__item.is-active {
  color:#fff;
  background:#003399;
}
/*列表样式*/
.content-list{
  width:100%;
}
.content-list li{
  width:100%;
  border-bottom:1px solid #ccc;
  padding:20px 0;
}
.content-img{
  width:215px;
  height:140px;
  overflow:hidden;
  float:left;
  margin-right:30px;
}
.content-detail{
  width:600px;
  float:left;
}
.content-title{
  margin-bottom:15px;
  font-size:20px;
  color:#333;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content-text{
  height:60px;
  overflow:hidden;
  line-height:30px;
  margin-bottom:15px;
}
.content-time{
  color:#999;
}
/*右侧广告图*/
.right-banner{
  width:335px;
  position:relative;
  margin-left:15px;
}
.right-banner ul li{
  margin-bottom:30px;
}
.right-img-box{
  width:100%;
  height:200px;
  overflow: hidden;
}
/*底部广告图*/
.left-bottom-img{
  width:100%;
  margin-top:30px;
  margin-bottom:60px;
}
</style>

