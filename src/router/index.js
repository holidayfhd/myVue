import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import VueResource from 'vue-resource'
import HostList from '@/view/host-list'
import Manage from '@/view/manage'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: 'login',
      redirectTo:'/'
    },
    {
      path: '/manage',
      component: Manage,
      children:[
        {
          path: '/host-list',
          component: HostList,
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

