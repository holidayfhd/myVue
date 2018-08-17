<template>
<div>
 <Table border :columns="columns7" :data="data6"></Table>
 <div class= "page">
   <Page :total="100" :current="currentPage" :page-size="size" @on-change="getData"/>
 </div>
  <Modal
    v-model="modal1"
    title="detail"
    @on-ok="ok"
    @on-cancel="cancel">
    <Row class="row">
      <Col span="4" class="label">名称</Col>
      <Col span="8">
        <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </Col>
    </Row>
    <Row class="row">
      <Col span="4" class="label">名称</Col>
      <Col span="8">
      <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </Col>
    </Row>
    <Row class="row">
      <Col span="4" class="label">名称</Col>
      <Col span="8">
      <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </Col>
    </Row>
    <Row class="row">
      <Col span="4" class="label">名称</Col>
      <Col span="8">
      <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
      </Col>
    </Row>
  </Modal>


</div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        currentPage:2,
        size:2,
        modal1: false,
        columns7: [
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ]);
    }
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
      data6: []
    }
    },
    created: function () {
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
      },
      remove (index) {
        this.data6.splice(index, 1);
      },
      getList(currentPage){
        this.$http.get('/',{
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
  .page{
    margin-top:20px;
    text-align: right;
  }
  .label{
    line-height:32px;
    text-align: right;
    margin-right:10px;
  }
  .row{
    margin-bottom:10px;
  }
</style>
