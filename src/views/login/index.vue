<template>
  <div class="container">
    <el-menu text-color="#2d2d2d" id="navid" class="nav" mode="vertical" @select="handleSelect">
 <el-menu-item class="logo" index="0" route="/home">
 <img class="logoimg" alt="logo" />
 </el-menu-item>
 <el-menu-item
 :key="key"
 v-for="(item,key) in leftNavItems"
 :index="item.index"
 :route="item.activeIndex"
 >{{item.name}}</el-menu-item>
 <el-submenu
 style="float:right;width:100px;border:0;"
 class="right-item"
 v-if="Object.keys(rightNavItems).length === 0?false:true"
 index="10"
 >
 <template slot="title">
  <i class="el-icon-s-fold" style="font-size:28px;color:#2d2d2d;"></i>
 </template>
 <el-menu-item style="padding:0;width:100%;"
  :key="key"
  v-for="(item,key) in rightNavItems"
  :index="item.index"
  :route="item.activeIndex"
 >{{item.name}}</el-menu-item>
 </el-submenu>
</el-menu>
  </div>
</template>

<script>
export default {
 data() {
   return {
     form:{
       username:'',
       password:''
     },
      
 screenWidth: document.body.clientWidth,
 navItems: [
 { name: "Home", indexPath: "/home", index: "1" },
 { name: "Subscribe", indexPath: "/subscribe", index: "2"},
 { name: "About", indexPath: "/about", index: "3" },
 { name: "More", indexPath: "/more", index: "4" }
],
     rules:{
       username:[{
         required:true,message:"请输入用户名",trigger:'blur'
       }],
       password:[{
         required:true,message:"请输入密码",trigger:'blur'
       }]
     }
   }
 },
 watch: {
 screenWidth(newValue) {
 // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
 if (!this.timer) {
  // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
  this.screenWidth = newValue;
  this.timer = true;
  setTimeout(() => {
  //console.log(this.screenWidth);
  this.timer = false;
  }, 400);
 }
 }
},
 computed: {

 leftNavItems: function() {
 return this.screenWidth >= 600 ? this.navItems : {};
 },
 rightNavItems: function() {
 return this.screenWidth < 600 ? this.navItems : {};
 }
},
mounted() {
 window.onresize = () => {
 this.screenWidth = document.body.clientWidth
 }
},
 methods:{
   submit(){
     this.$refs.ruleForm.validate((e) =>{
      //  console.log(e);
      if(!e)return;
      //提交表单
       this.$router.push({name:'index'})
     })
     
   },
   handleSelect(){
   
 }
 },
 
}
</script>

<style>
.nav{
  border: 0;
}
ul,li{
  padding: 0;
}
</style>