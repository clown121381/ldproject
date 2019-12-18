// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"release-a38306"
})
const db = cloud.database()
const todos = db.collection('todo_data')
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.ids)
  try{
    return await todos.where({
      _id: _.in(event.ids)
    }).update({
      data:{
        done:true
      }
    })
  }catch(e){
    console.log(e)
  }
}