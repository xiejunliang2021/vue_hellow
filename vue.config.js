module.exports = {
    lintOnSave: false,
    //代理跨域
  devServer:{
    proxy: {
      "/api": {
      //后台服务器地址
        target: "http://168.138.11.4",
       
      }
    }
  }

}