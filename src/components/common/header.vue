<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <menu-item name="1">
          <Icon type="ios-navigate"></Icon>
          Item 1
        </menu-item>
        <menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          Item 2
        </menu-item>
        <menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </menu-item>
        <menu-item name="4">
          <Icon type="ios-paper"></Icon>
          Item 4
        </menu-item>
      </div>
    </Menu>
  </Header>
</template>
<script>
  export default {
    name: 'vHeader'
  }
</script>
<style>
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
