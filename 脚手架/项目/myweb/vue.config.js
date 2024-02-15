// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer:{
//     // mock数据模拟
//     before(app,server){
//       app.get('/api/cartList',(req,res)=>{
//         res.json({
//           data:[
//             {id:1,title:'vue课程',price:30,count:1,active:true},
//             {id:1,title:'react课程',price:60,count:1,active:true},
//           ]
//         })
//       })
//     }
//   }
// })
module.exports={
  devServer:{
    // mock数据模拟
    // before(app,server){
    //   app.get('/api/cartList',(req,res)=>{
    //     res.json({
    //       data:[
    //         {id:1,title:'vue课程',price:30,count:1,active:true},
    //         {id:1,title:'react课程',price:60,count:1,active:true},
    //       ]
    //     })
    //   })
    // }
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.get('/api/cartList', (req, res) =>{
        res.json({
          data:[
            {id:1,title:'vue课程',price:30,count:1,active:true},
            {id:1,title:'react课程',price:60,count:1,active:true},
          ]
        })
      });
    },
  }
}
