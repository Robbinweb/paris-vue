<template>
  <div class="index">
    
    <main id="main" class="container-fluid p-0">
      <!-- 轮播图 -->
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" class=""></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide w-100" :src="'http://localhost:5000/'+carousels[0].img_url" :alt="carousels[0].title" v-cloak>
          </div>
          <div class="carousel-item">
            <img class="second-slide w-100" :src="'http://localhost:5000/'+carousels[1].img_url" :alt="carousels[0].title" v-cloak>
          </div>
          <div class="carousel-item">
            <img class="third-slide w-100" :src="'http://localhost:5000/'+carousels[2].img_url" :alt="carousels[0].title" v-cloak>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- 楼层 -->
      <div>
        <!--楼层1  -->
        <div class="container py-5">
          <div class="row">
            <div class="col-12 border-bottom text-center">
              <h1 class="font-weight-bold text-danger py-3">客照欣赏</h1>
              <h5 class="text-muted">婚纱照:想你所想，找你所找。</h5>
            </div>
            <div style="height:700px">1</div>
          </div>
        </div>
        <!-- 楼层2 -->
        <div class="container py-5">
          <div class="row">
            <div class="col-12 border-bottom text-center">
              <h1 class="font-weight-bold text-danger py-3">旅拍MV</h1>
              <h5 class="text-muted">旅拍婚纱照&&爱情微电影</h5>
            </div>
            <div style="height:700px">2</div>
          </div>
        </div>
        <!-- 楼层3 -->
        <div class="container py-5">
          <div class="col-12 border-bottom text-center">
            <h1 class="font-weight-bold text-danger py-3">婚品商城</h1>
            <h5 class="text-muted">婚纱照特惠,手快有手慢无啊亲~</h5>
          </div>
          <div style="height:700px">3</div>
        </div>
        <!-- 楼层4 -->
        <div class="container py-5">
          <div class="col-12 border-bottom text-center">
            <h1 class="font-weight-bold text-danger py-3">婚车租赁</h1>
            <h5 class="text-muted">热门婚车品牌</h5>
          </div>
          <div style="height:700px">4</div>
        </div>
        <!-- 楼层5 -->
        <div class="container py-5">
          <div class="col-12 border-bottom text-center">
            <h1 class="font-weight-bold text-danger py-3">客户评价</h1>
            <h5 class="text-muted">愿重要的选择只因喜欢，而非便宜。</h5>
          </div>
          <div style="height:700px">5</div>
        </div>
      </div>
      <!-- 摄影师 -->
      <div class="row p-0 m-0">
        <div class="col-12 p-0"><img src="/static/img/luyi.png" class="img-fluid w-100" alt=""></div>
      </div>
      <!-- 楼层电梯效果 -->
      <div class="btn-group-vertical position-fixed d-none" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">客照<br>欣赏</button>
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">旅拍<br>MV</button>
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">婚品<br>商城</button>
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">婚车<br>租赁</button>
        <button type="button" class="btn btn-secondary btn-sm border-light border-left-0 border-right-0">客户<br>评价</button>
      </div>
    </main>
  </div>
</template>

<script>
  // 楼层滚动
  var $divLift=$("#main>div:last-child");
  $(window).scroll(function(){
    var $fs=$("#main>div:nth-child(2)>div");
    var $f1=$fs.first();
    var scrollTop=$("html,body").scrollTop();
    var offsetTop=$f1.offset().top;
    // 输出查看距顶部的距离
    // console.log(scrollTop,offsetTop);
    // 页面的二分之一+滚动距离>向顶部偏移的距离
    if(innerHeight/2+scrollTop>offsetTop){
      $divLift.removeClass("d-none");
    }else{
      $divLift.addClass("d-none");
    }
    $fs.each((i,f)=>{
      // console.log(i);
      // console.log(f);
      offsetTop=$(f).offset().top;
      // console.log(offsetTop);
      if(innerHeight/2+scrollTop>offsetTop){
        $divLift.children(`:eq(${i})`).addClass("btn-danger").siblings().removeClass("btn-danger");
      }
    });
  });
  $divLift.on("click","button",function(){
    var i=$(this).index();
    var offsetTop = $(`#main>div:nth-child(2)>div:eq(${i})`).offset().top;
    $("html").animate({
      scrollTop:offsetTop
    },500);
  });


export default {
  name: 'index',
  data () {
    return { 
      carousels:[],
      photos:[]
    }
  },
  created(){
  	this.$http.get("index/carousel").then(function(data){
      return data.json()
      // console.log(data.json());
      // console.log(this.blogs);
      }).then(function(data){
        var carouselsArray = [];
        for(let key in data){
          // console.log(key);
          // console.log(data[key]);
          data[key].id = key;
          carouselsArray.push(data[key]);
        }
        // console.log(carouselsArray);
        this.carousels = carouselsArray;
        //console.log(this.carousels);
    });
    // 客照
    this.$http.get("index/photos").then(function(data){
      return data.json()
      console.log(data.json());
    }).then(function(data){
      var photosArray = [];
      for(let key in data){
        // console.log(key);
        data[key].id = key;
        photosArray.push(data[key]);
      }
        // console.log(photosArray);
        this.photos = photosArray;
        // console.log(this.photos);
    })

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/* 楼层电梯效果 */
/*定制电梯按钮的样式*/
#main>.btn-group-vertical{
  top:200px;
  left:10px;
}
#main>.btn-group-vertical>.btn-secondary:hover {
  background-color: #e4393c;
  border-color: #e4393c;
}
</style>
