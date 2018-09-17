<template>
<div>
  <Row class="row">
    <Col span="2" class="label">Name</Col>
    <Col span="10">
      <Input v-model="criteria.name" placeholder="Enter something..." style="width: 300px"/>
    </Col>
  </Row>
  <Row class="row">
    <Col span="2" class="label">Age</Col>
    <Col span="10">
      <Input v-model="criteria.age" placeholder="Enter something..." style="width: 300px"/>
    </Col>
  </Row>
  <Row class="row">
    <Col span="2" class="label">Address</Col>
    <Col span="10">
      <Input v-model="criteria.address" placeholder="Enter something..." style="width: 300px"/>
    </Col>
  </Row>
  <Row class="center">
    <Button type="default" class="btn" @click="cancel()">取消</Button>
    <Button type="primary" class="btn" @click="create()">确定</Button>
  </Row>
 
</div>
</template>
<script>
  import http from '../http/http.js'
  import Url from '../http/url.js'
  export default {
    data () {
      return {
        criteria: {},
    }
    },
    methods: {
      create(){
        http.httpRequest('POST',Url.host.create,this.criteria).then(res=>{
          alert("创建成功")
        })
      },

      cancel(){
        this.$router.push('host-list');
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
  .center{
    text-align: center;
  }
  .btn{
    padding: 5px 40px;
  }
</style>
