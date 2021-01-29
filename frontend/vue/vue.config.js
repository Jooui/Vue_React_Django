// vue.config.js
module.exports = {
  devServer: {
    proxy: "http://localhost:8000/",
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/scss/_variables.scss";
  //         @import "@/scss/_mixins.scss";
  //       `
  //     }
  //   }
  // }
};
