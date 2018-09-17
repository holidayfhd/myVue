<template>
  <div class="error-page">
    <div class="content">
      <img :src="src" :code="code" :desc="desc">
      <div class="text">
        <h2>{{code}}</h2>
        <h3>{{desc}}</h3>
      </div>
      <back-btn-group class="back-btn-group"></back-btn-group>
    </div>
  </div>
</template>

<script>
  import './error.less'
  import backBtnGroup from './back-btn-group'
  export default {
    components:{
      backBtnGroup
    },
    props:{
      src: String,
      code: String,
      desc: String
    }
  }
</script>


