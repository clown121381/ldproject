// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env:"release-a38306"
})
const todoDB = db.collection('todos_db')
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await todoDB.where({
      _id:_.in(event.ids)
    }).update({
      data:{
        done:true
      }
    })
  }catch(e){

  }
}