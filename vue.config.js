module.exports = {
    lintOnSave: false,
    //代理跨域
  devServer:{
    proxy: {
      "/api": {
        changeOrigin: true, // 是否跨域
      //后台服务器地址
        target: "http://168.138.11.4:8000",
        pathRewrite: {
            '/api': ''
          }
       
      }
    }
  }

}