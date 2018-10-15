// priduct模块
const express = require("express");
var router = express.Router();
// 引入连接池
const pool = require("../config/pool");

// 分页查询商品列表
router.get("/list",(req,res)=>{
  // 1.参数 pno pageSize
  var pno = req.query.pno; //当前页码
  var pageSize = req.query.pageSize; //页大小
  // 2.设置默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 6;
  }
  // sql语句查询数据库
  var sql = `SELECT pid,ptid,title,dices,img_url,mv_url,href,price_old,price_new,stock,concern,add_time FROM product_details LIMIT ?,?`;
  var offset = parseInt((pno-1)*pageSize);
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:result});
    // 测试地址http://localhost:5000/product/list?pno=1
  })
});
// 查询商品详情
router.get("/details",(req,res)=>{
  var pdid = req.query.pid;
  var sql = `SELECT pid,ptid,title,dices,img_url,mv_url,href,price_old,price_new,stock,concern,add_time FROM product_details WHERE pid=?`;
  pool.query(sql,[pdid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:result});
  //测试地址：http://localhost:5000/product/details?pid=1
  })
})


module.exports = router;