<template>
  <Table border :columns="columns1" :data="data"></Table>
</template>

<script>
  import http from '../http/http.js'
  import Url from '../http/url.js'
    export default {
      name: "user",
      data() {
        return {
          columns1: [
            {
              title: '名称',
            //  key: 'name',
              render: (h,param)=>{
                return h('a',{
                  on:{
                    click: ()=>{
                      this.$router.push({name:'userEdit',params:{id: param.row.id}})
                    }
                  }
                },param.row.name)
              }
            },
            {
              title: '角色',
              key: 'role'
            },
            {
              title: '状态',
              key: 'status'
            },
            {
              title: '描述',
              key: 'desc'
            },
          ],
          data: []
        }
      },
      created(){
        this.getRoleList()
      },
      methods:{
        getRoleList(){
          http.httpRequest('GET',Url.user.list,{page:1,size:10}).then(res=>{
            this.data= res.data.resultContent
          })
        }
      }
    }
</script>

<style>

</style>
