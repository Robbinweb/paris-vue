<template>
  <div id="header" class="bg-danger " > <!-- fixed-top -->
  <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link :to="haeds[2].href" class="navbar-brand">{{haeds[2].navname}}</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto">
            <li v-for="h in haeds.slice(3)" class="nav-item active">
              <router-link :to="h.href" class="nav-link" v-cloak>{{h.navname}}</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" placeholder="输入关键字搜索..." aria-label="输入关键字搜索..." type="text">
          </form>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>

export default {
  name:"app",
  data () {
    return {
      haeds:[],
    }
  },
  created(){
  	this.$http.get("index")
    .then(function(data){
      return data.json()
      // console.log(data.json());
      // this.blogs = data.body.slice(0,10);
      // console.log(this.blogs);
    })
    .then(function(data){
      var haedsArray = [];
      for(let key in data){
        // console.log(key);
        // console.log(data[key]);
        data[key].id = key;
        haedsArray.push(data[key]);
      }
      // console.log(blogsArray);
      this.haeds = haedsArray;
      // console.log(this.haeds);
    });
    

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
