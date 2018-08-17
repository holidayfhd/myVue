<template>
  <div id="app">
    <v-menu></v-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import vMenu from '../components/common/menu'
export default {
  components:{
    vMenu
  }
}
</script>
<style>
  #app{
    margin:0 100px;
  }
</style>

