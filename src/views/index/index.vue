<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in counts">
        <el-card class="box-card" shadow="hover">
         <div class="d-flex align-items-center">
           <i class=" border text-center h4 mb-0 text-white mr-3" :class="[item.icon,item.color]" style="width:40px;hright:40px;line-height:40px;"></i>
           <div>
             <h4 class="mb-1">{{item.num}}</h4>
             <small class="text-muted">{{item.desc}}</small>
           </div>
         </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-3">
      <el-col :span="12"  style="height:370px" class="d-flex flex-column">
        <el-card class="box-card  mb-auto" shadow="never">
          <div slot="header" class="clearfix">
            <span>店铺及商品提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="row">
            <div class="col-3">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-3">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-3">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-3">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>交易提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
             <div class="row">
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">60</h4>
              <small>出售中</small>
              </button>
            </div>
          </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card"  style="height:370px" shadow="never">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts:[
        {
        icon:'el-icon-user-solid',
        num:'30',
        desc:'关注人数(个)',
        color:'bg-primary'
        },
        {
        icon:'el-icon-s-finance',
        num:'120',
        desc:'订单总数(笔)',
        color:'bg-success'
        },
        {
        icon:'el-icon-s-order',
        num:'42',
        desc:'今日金额(元)',
        color:'bg-danger'
        },
        {
        icon:'el-icon-s-data',
        num:'100',
        desc:'本月销量(笔)',
        color:'bg-warning'
        }
      ]
    }
  },
};
</script>

<style>
</style>