// cart模块
const express=require("express");
var router=express.Router();
// 引入连接池
const pool=require("../config/pool");

router.get("/",(req,res)=>{
  var sql=`SELECT * FROM product_details INNER JOIN shopcart ON pid = pro_id WHERE user_id = ? order by id desc`;
  var uid=req.query.uid;
  pool.query(sql,[uid],(err,result)=>{
      res.send(({code:1,msg:result}));
      // 测试路径 http://localhost:5000/cart?uid=1
  })
});

// 添加购物车

// 删除购物车



module.exports=router;
//http://localhost:5000/cart