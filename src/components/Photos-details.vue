<template>
  <div id="Pdetails">
  {{pid}}
<div class="container">
    <div class="row">
      <div  class="col-9 text-center border">
        <h1>听你说爱情的样子</h1>
        <h4>许先生&陈女士</h4>
        <img class="card-img-top my-2" src="http://localhost:5000/img/photos/1/2212119.jpg" alt="Card image cap">
        <img class="card-img-top my-2" src="http://localhost:5000/img/photos/1/2212111.jpg" alt="Card image cap">
        <img class="card-img-top my-2" src="http://localhost:5000/img/photos/1/2212112.jpg" alt="Card image cap">
      </div>
      <div class="col-3">
        <h3 class="text-center">猜你喜欢</h3>
        <div class="card box-shadow">
          <a href="#"><img class="card-img-top" src="http://localhost:5000/img/photos/2/2206035.jpg" alt="Card image cap"></a>
          <div class="card-body">
            <h3>浪漫巴黎</h3>
            <div class="d-flex  justify-content-between align-items-center">
              <div class="btn-group">
                <a href="#" class="btn btn-sm btn-outline-secondary">查看全部</a>
              </div>
              <small class="text-muted">5 张</small>
            </div>
          </div>
        </div>

      </div>
      
    </div>


  </div>
  </div>
</template>

<script>

export default {
  name: '#Pdetails',
  data () {
    return {
      pid:this.$route.params.pid,
      Pdetails:{}
    }
  },
  created(){
    this.$http.get('photos/PhotosDetails?pid='+this.pid).then(function(data){
      console.log(data);
      this.Pdetails = data.body;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
