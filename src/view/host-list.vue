<template>
<div>
 <Table border :columns="columns7" :data="data"></Table>
<!-- <div class= "page">
   <Page :total="100" :current="currentPage" :page-size="size" @on-change="getData"/>
 </div>-->
  <div style="margin: 10px;overflow: hidden">
    <div style="float: right;">
      <Page :total="100" :current="currentPage" :page-size="size" @on-change="getData"></Page>
    </div>
  </div>
  <Modal
    v-model="modal1"
    title="detail"
    @on-ok="ok"
    @on-cancel="cancel">
    <Row class="row">
      <Col span="4" class="label">Name</Col>
      <Col span="8">
        <Input v-model="info.name" placeholder="Enter something..." style="width: 300px" disabled/>
      </Col>
    </Row>
    <Row class="row">
      <Col span="4" class="label">Age</Col>
      <Col span="8">
      <Input v-model="info.age" placeholder="Enter something..." style="width: 300px" disabled/>
      </Col>
    </Row>
    <Row class="row">
      <Col span="4" class="label">Address</Col>
      <Col span="8">
      <Input v-model="info.address" placeholder="Enter something..." style="width: 300px" disabled/>
      </Col>
    </Row>
  </Modal>


</div>
</template>
<script>
  import http from '../http/http.js'
  import Url from '../http/url.js'
  export default {
    data () {
      return {
        info: {},
        currentPage:1,
        size:2,
        modal1: false,
        columns7: [
          {
            title: 'Name',
            key: 'name',
            render: (h,params)=>{
              return h('a',{
                on: {
                  click: ()=>{
                    this.$router.push('user')
                  }
                }
                },
                params.row.name)
            }
           /* render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ]);
            }*/
    },
      {
        title: 'Age',
        key: 'age'
      },
      {
        title: 'Address',
        key: 'address'
      },
      {
        title: 'Action',
        key: 'action',
        width: 150,
        align: 'center',
        render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
              this.show(params.index)
          }
      }
      }, 'View'),
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          },
          on: {
            click: () => {
            this.remove(params.index)
        }
      }
      }, 'Delete')
      ]);
      }
      }
    ],
      data: []
    }
    },
    created() {
      this.getList()
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },
      show (index) {
        this.modal1 = true
        http.httpRequest('GET',Url.host.detail,{id:1}).then(res=>{
          this.info= res.data.resultContent
        })
      },
      remove (index) {
        this.data.splice(index, 1);
      },
      getList(currentPage){
       /* this.$http.get('https://easy-mock.com/mock/5b76fd671963881cfe2ba3e5/example/query',{
          page: currentPage,
          size: this.size
        }).then(res=>{
          this.data6=[
          {
            name: 'John Brown'+currentPage,
            age: 18,
            address: 'New York No. 1 Lake Park'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park'
          }
        ]
      })*/

      /*  http.get(Url.common.auth)/!*'https://easy-mock.com/mock/5b76fd671963881cfe2ba3e5/example/query'*!/
          .then(res=>{
          console.log(res)
        })*/

     /*   let promise=[]
        promise.push(http.httpRequest('GET',Url.common.auth,{a:'5b76fd671963881cfe2ba3e5'}).then(res=>{
            console.log(res);
        }));
        promise.push(http.httpRequest('POST',Url.common.user,{a:1}).then(res=>{
            console.log(res);
         }));
        Promise.all(promise).then(()=>{
          http.httpRequest('GET',Url.common.add).then(res=>{
          console.log(res)
          })
        })*/

        http.httpRequest('GET',Url.host.list,{page:1,size:10}).then(res=>{
          this.data= res.data.resultContent;
          console.log(this.data);
      })

      },
      getData(val){
        console.log(val)
        this.getList(val)
      }
    }
  }
</script>
<style>
  /*.page{
    margin-top:20px;
    text-align: right;
  }*/
  .label{
    line-height:32px;
    text-align: right;
    margin-right:10px;
  }
  .row{
    margin-bottom:10px;
  }
</style>
