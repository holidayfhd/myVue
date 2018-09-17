<template>
  <div class="bread">
    <Breadcrumb separator=">">
      <Breadcrumb-item to="/manage">首页</Breadcrumb-item>
      <Breadcrumb-item  v-for="(item,index) in $route.meta" :key="index" :to="item.path">{{item.name}}</Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .bread{
    margin:20px 0;
  }
  .demo-breadcrumb-separator{
    color: #ff5500;
    padding: 0 5px;
  }
</style>
