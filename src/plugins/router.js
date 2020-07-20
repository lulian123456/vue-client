import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//安装插件

import Detail from '../pages/detail.vue'
import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Error from '../pages/Error.vue'
import Column from '../pages/column.vue'

//路由配置
let routes=[
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/User',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {name:'detail', path:'/detail/:_id',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},
];

let router = new VueRouter({
  routes,
  mode:'history'
});

export default router;