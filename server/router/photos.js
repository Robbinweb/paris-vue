// photos模块
const express=require("express");
var router=express.Router();
// 引入连接池
const pool=require("../config/pool");
// 分页查询客照
router.get("/list",(req,res)=>{
  // 参数 pno pageSize
  var pno = req.query.pno; // 当前页码
  var pageSize = req.query.pageSize; //页大小
  // 设置默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 4;
  }
  // sql 语句查询数据库
  var sql = "SELECT pid,title,dices,clientnames,img_url,href,counts,tagsId FROM `photos_details` LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    obj = result;
    res.send({code:1,msg:obj});
    //测试地址：http://localhost:5000/photos/list?pno=1
  })
});
// 查询商品详情
router.get("/details",(req,res)=>{
  var pdid = req.query.pid;
  var obj={};
  var sql = `SELECT pid,title,dices,clientnames,img_url,href,counts,tagsId FROM photos_details WHERE pid=?`;
  pool.query(sql,[pdid],(err,result)=>{
    if(err)throw err;
    obj.detail=result[0];
    // res.send({code:1,msg:obj});
    var sql=`SELECT pid,img_url,pdid FROM photos WHERE pdid=?`;
    pool.query(sql,[pdid],(err,result)=>{
      obj.imgs=result;
      res.send({code:1,msg:obj});
    })
  //测试地址：http://localhost:5000/photos/details?pid=1
  })
})


module.exports = router;