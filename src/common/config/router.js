let routes = [
  {
    // path:'/',
    // name:'layout',
    redirect:{name:'index'},
    // component:()=> import ("../../views/layout.vue"),
    component:'layout',
    children:[
      {
        // path:'/index',
        // name:'index',
        // component:()=> import('../../views/index/index.vue')
        meta:{title:'后台首页'},
        component:'index/index'
      },
      {
        meta:{title:'商品列表'},
        component:'shop/goods/list'
      }
    ]
  },
  {
    // path:'/login',
    // name:'login',
    meta:{title:'登录'},
    component:'login/index',
    
  },
  {
    path:'*',
    redirect:{name:'index'},
  }
]

//获取路由
let getRoutes = function(){
  //生成路由文件
  createRoute(routes)
  return routes
}

//自动生成路由
function createRoute(arr){
  for (let i = 0; i < arr.length; i++) {
    if(!arr[i].component) return
    let val = removeIndex(arr[i].component)
    arr[i].name = arr[i].name || val.replace(/\//g,'_')
    let componentFun = import (`../../views/${arr[i].component}.vue` )
    arr[i].component = ()=>componentFun
    if(arr[i].children && arr[i].children.length>0){
      createRoute(arr[i].children)
    }
    let pathFun = `/${val}`
    arr[i].path = arr[i].path || pathFun
    // console.log(pathFun);
    
  }
}
//去除index
function removeIndex(str){
  let index = str.lastIndexOf('/')
  let val = str.substring(index+1,str.length)
  if(val === 'index'){
    return str.substring(index,-1)
  }
  return str
}
export default getRoutes()