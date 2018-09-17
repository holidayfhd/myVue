import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import VueResource from 'vue-resource'
import HostList from '@/view/host-list'
import HostCreate from '@/view/host-create'
import Manage from '@/view/manage'
import Error404 from '@/view/error-page/404'
import User from '@/view/user'
import UserEdit from '@/view/user-edit'
import Echarts from '@/view/echarts'


Vue.use(Router)
Vue.use(VueResource)

const routing= new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '',
      redirect:'/manage'
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children:[
        {
          path: 'host-list',
          component: HostList,
          name: 'host-list',
          meta: [{
            name:'云主机列表'
          }]
        },
        {
          path: 'host-create',
          component: HostCreate,
          name: 'host-create',
          meta: [{
            name:'云主机列表',
            path:'host-list'
          },
            {
              name:'创建云主机',
              path:'host-create'
            }]
        },
        {
          path: 'user',
          component: User,
          name: 'user',
          meta: [{
            name:'角色管理'
          }]
        },
        {
          path: 'user/edit/:id',
          component: UserEdit,
          name: 'userEdit',
          meta: [{
            name:'角色管理',
            path:"/manage/user"
          },
            {
              name:'账号编辑',
              path:"edit"
            }]
        },
        {
          path: 'echarts',
          component: Echarts,
          name: 'echarts',
          meta: [{
            name:'图表'
          }]
        }
      ]
    },
    {
      path: '*',
      component: Error404
    }

  ]
})

//路由守卫
routing.beforeEach((to,from,next)=>{
  const token= sessionStorage["token"]
  if(!token && to.name != 'login'){
    next({
      name: 'login'
    })
  }else if(!token && to.name == 'login'){
    next() //跳转
  }else if(token && to.name == 'login'){
    next({
      name: 'manage'
    })
  }else{
    next()
  }

})

export default routing

