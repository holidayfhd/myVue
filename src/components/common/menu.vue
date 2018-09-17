<template>
  <div class="menu">
    <Menu mode="horizontal" :theme="theme1" :active-name="activeName" @on-select="goto">
      <MenuItem name="manage">
        <Icon type="ios-paper" />
         首页
      </MenuItem>
      <Submenu name="[host-list,host-create]">
        <template slot="title">
          <Icon type="ios-stats" />
          云主机管理
        </template>
        <MenuItem name="host-list">云主机列表</MenuItem>
        <MenuItem name="host-create">创建云主机</MenuItem>
      </Submenu>
      <MenuItem name="examine">
        <Icon type="ios-construct" />
        审批中心
      </MenuItem>
      <MenuItem name="echarts">
        <Icon type="ios-construct" />
        图表
      </MenuItem>
      <MenuItem name="user">
        <Icon type="ios-people" />
        用户管理
      </MenuItem>
      <div class="loginInfo">
        <span>{{userName}}</span>
        <Icon type="md-log-out" title="退出" @click="signOut"/>
      </div>
    </Menu>
    <v-bread></v-bread>
  </div>
</template>
<script>
  import vBread from './bread.vue'

  export default {
    components:{
      vBread
    },
    data () {
      return {
        userName: sessionStorage["userName"],
        theme1: 'light',
        mockMenu: {
          firstMenus:[
            {
              name: 'A'
            },
            {
              name: 'B',
              secondMenus:[
                {
                  name:'C'
                }

              ]
            }
          ]
        }

      }
    },
    methods:{
      goto(name) {
        this.$router.push({name:name})
      },
      signOut(){
        window.sessionStorage.clear();
        this.$router.push('/login');
      }
    },
    computed:{
      activeName(){
        console.log(this.$router)
        console.log(this.$route)
        return this.$route.name;

      }
    },
  }
</script>
<style>
  .ivu-menu-drop-list{
    text-align: center;
  }
  .loginInfo{
    float: right;
    margin-right:10px;
  }
  .loginInfo span{
    padding-right:20px;
  }
</style>
