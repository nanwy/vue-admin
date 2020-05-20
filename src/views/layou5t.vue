<template>
  <div>
    <el-container style="position:absolute;left:0;top:0;bottom:0;right:0;overflow:hidden;">
      <el-header class="d-flex align-items-center" style="background:#545c64">
        <a class="h5 text-light mb-0 mr-auto">{{$conf.logo}}</a>
        <el-menu
          :default-active="navBar.active"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            :index="index | numToString"
            v-for="(item,index) in navBar.list"
            :key="index"
          >{{item.name}}</el-menu-item>
          <el-submenu index="50">
            <template slot="title">
              <el-avatar
                shape="square"
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>Administrator
            </template>
            <el-menu-item index="2-1">修改</el-menu-item>
            <el-menu-item index="2-2">登出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container style="height:100%;">
        <el-aside width="200px">
          <!-- //侧边布局 -->
          <el-menu default-active="0" @select="slideSelect" style="height:100%;">
            <el-menu-item
              :index="index | numToString"
              v-for="(item,index) in slideActive"
              :key="index"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="border-bottom mb-3" v-if="bran.length>0" style="padding:20px;margin:-20px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in bran" :key="index">{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
              <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import common from "common/mixins/common.js";
export default {
  mixins: [common],
  data() {
    return {
      navBar:[],
      bran:[]
    };
  },
  created(){
    this.navBar = this.$conf.navBar
    this.getRouterBran()
    //初始化菜单
    this.__initNavBar()
  },
  watch: {
    '$route'(to,from){
      
      // console.log(to,from);
      localStorage.setItem('navActive',JSON.stringify({
        top:this.navBar.active || '0',
        left:this.slideMenuActive || '0'
      }))
      this.getRouterBran()
    }
  },
  computed: {
    slideMenuActive: {
      get() {
        return this.navBar.list[this.navBar.active].subActive || '0';
      },
      set(val) {
        this.navBar.list[this.navBar.active].subActive = val;
      }
    },
    slideActive() {
      return this.navBar.list[this.navBar.active].submenu || [];
    }
  },
  methods: {
    __initNavBar(){
      let r =  localStorage.getItem('navActive')
      if(r){
        r = JSON.parse(r)
        // console.log(r);
        this.navBar.active = r.top
        this.slideMenuActive = r.left
      }
    },
    //获取面包屑导航
    getRouterBran(){
      // console.log(this.$route.matched);
      let b = this.$route.matched.filter(val => val.name)
      // console.log(b);
      let arr = []
      b.forEach((v,k) => {
        if(v.name === 'index' || v.name === 'layout') return
        arr.push({
          name:v.name,
          path:v.path,
          title:v.meta.title
        })
        // console.log(arr);
        
        
        
      });
      if(arr.length > 0){
          arr.unshift({
            name:'index',
            path:'/index',
            title:'后台首页'
          })
        }
        this.bran = arr
        // console.log(arr);
    },
    handleSelect(key, keyPath) {
      this.navBar.active = key
      this.slideMenuActive = '0'
      //默认key 0
      if(this.slideActive.length > 0){
        this.$router.push({
        name:this.slideActive[this.slideMenuActive].pathname
      })
      }
       
      // console.log(key, keyPath);
    },
    slideSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.slideMenuActive = key;
      this.$router.push({
        name:this.slideActive[key].pathname
      })
      // console.log(this.slideActive[key].pathname);
      
    },
    
  }
};
</script>

<style scoped>
</style>