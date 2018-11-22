<template>
  <div class="phtots">

  </div>
</template>

<script>
export default {
  data(){
    return {
      list:{}
    }
  },
  created(){
    this.getPhotoList();
  },
  methods:{
    // 获取商品图片列表
    getPhotoList(){
      this.$http.get("photos/list").then(result=>{
        console.log(result);
        
      })
    }
  },
}
</script>

<style>

</style>
