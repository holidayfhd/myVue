<template>
<div>
  <Button type="text" size="large" @click="backHome">返回首页</Button>
  <Button type="text" size="large">返回上一页{{second}}s</Button>
</div>
</template>

<script>
export default {
  data() {
    return {
      second: 5,
      timer: null
    }
  },
  methods:{
    backHome(){
      this.$router.push('/')
    }
  },
  mounted(){
    this.timer= setInterval(()=>{
      if(this.second == 0){
      this.$router.go(-1);
    }else{
      this.second--;
    }
    },1000)
  },
  destroyed(){
    clearInterval(this.timer)
  }

}

</script>

<style>

</style>
