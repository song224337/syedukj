<template>
  <div class="header">
    <el-row class="header-inner">
      <el-col :span="5">
        <div class="logo01-box">
          <img src="~static/images/logo01.png" alt="">
        </div>
      </el-col>
      <el-col :span="14">
        <div class="nav-header">
          <el-menu :default-active="activeNav" class="el-menu-demo" active-text-color=#023894 mode="horizontal">
            <el-menu-item v-for="(item ,index) in navs" :key="index" class="nav-button" :index="item.name">
              <nuxt-link :to="{name:item.name}">{{item.title}}</nuxt-link>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="hot-tel">
          <i class="icon iconfont icon-dianhua2"></i>
          <span class="number">400-998-7863</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title:'首页',
        active:'0',
        show:false,
        navs:[
          { name:'index', title:'首页' },
          { name:'oper', title:'实操做账' },
          { name:'elite', title:'职称精英' },
          { name:'advance', title:'职称进阶' },
          { name:'teacher', title:'实战师资' },
          { name:'about', title:'关于我们' },
          { name:'news', title:'新闻资讯' },
        ]
      }
    },
    methods:{

    },
    props:['activeNav'],
  }
</script>

<style scoped>
  .el-menu--horizontal{
    border-bottom:none;
  }
  .el-menu-item{
    font-size:16px;
  }
</style>
