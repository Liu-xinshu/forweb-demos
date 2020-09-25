const path = require ('path');
const resolve = dir => path.join (__dirname, dir);
const BASE_URL = process.env.VUE_APP_BASE_URL;
const IS_PROD = ['production', 'prod'].includes (process.env.NODE_ENV);

module.exports = {
  assetsDir: "static",
  publicPath: BASE_URL,
  lintOnSave: false, // 关闭eslint
  devServer: {
    port: "8080",
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 全局引入scss
        prependData: `@import "~@styles/css/global.scss";`,
      },
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 192, //换算基数， 默认100
            unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: false && /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ],
      },
    },
  },
  configureWebpack: {
    plugins: [
      //   new MyAwesomeWebpackPlugin()
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias.set("@img", resolve("src/assets/images"));
    config.resolve.alias.set("@assets", resolve("src/assets"));
    config.resolve.alias.set("@public", resolve("public"));
    config.resolve.alias.set("@styles", resolve("src/styles"));
    // 修复HMR
    config.resolve.symlinks(true);

    if (IS_PROD) {
      /* 添加分析工具 */
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        .end();
      config.plugins.delete("prefetch");

      /* 压缩图片 */
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          // webp: { quality: 75 }
        });
    } else {
    }
  },
};
