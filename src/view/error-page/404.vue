<template>
  <error-content :src="src" code="404" desc="Oh~~您的页面好像飞走了~"></error-content>
</template>

<script>
  import errorContent from './error-content.vue'
  import error404 from '@/assets/images/error-404.svg'
export default {
  components:{
    errorContent
  },
  data(){
    return {
      src: error404
    }
  }
}
</script>
<style>

</style>

