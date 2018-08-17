import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import VueResource from 'vue-resource'
import HostList from '@/view/host-list'
import Manage from '@/view/manage'


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
      path: '/manage',
      name: 'manage',
      component: Manage,
      children:[
        {
          path: '/host-list',
          component: HostList,
          name: 'host-list',
          meta: [{
            name:'云主机列表'
          }]
        },
        {
          path: '/host-create',
          component: HostList,
          meta: [{
            name:'云主机列表',
            path:'/host-list'
          },
            {
              name:'创建云主机',
              path:'/host-create'
            }]
        }
      ]
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

