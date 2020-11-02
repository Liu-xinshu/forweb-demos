const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const BASE_URL = process.env.VUE_APP_BASE_URL;
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const minify =
  process.env.NODE_ENV === "development"
    ? false
    : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      };
module.exports = {
  assetsDir: "static",
  publicPath: BASE_URL,
  lintOnSave: false, // 关闭eslint
  pages: {
    index: {
      entry: ["./src/main.js"],
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
      minify,
    },
    /**
     * 快速入门
     */
    create3d: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/快速入门"),
      },
      template: "public/static/demos/快速入门/create3d.html",
      filename: "create3d.html",
      chunks: ["chunk-vendors", "chunk-common", "create3d"],
      minify,
    },
    wuqiu: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/快速入门"),
      },
      template: "public/static/demos/快速入门/wuqiu.html",
      filename: "wuqiu.html",
      chunks: ["chunk-vendors", "chunk-common", "wuqiu"],
      minify,
    },
    tiankong: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/快速入门"),
      },
      template: "public/static/demos/快速入门/tiankong.html",
      filename: "tiankong.html",
      chunks: ["chunk-vendors", "chunk-common", "tiankong"],
      minify,
    },
    beijing: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/快速入门"),
      },
      template: "public/static/demos/快速入门/beijing.html",
      filename: "beijing.html",
      chunks: ["chunk-vendors", "chunk-common", "beijing"],
      minify,
    },
    /**
     * 漫游交互
     */
    dingwei: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/dingwei.html",
      filename: "dingwei.html",
      chunks: ["chunk-vendors", "chunk-common", "dingwei"],
      minify,
    },
    diyirencheng: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/diyirencheng.html",
      filename: "diyirencheng.html",
      chunks: ["chunk-vendors", "chunk-common", "diyirencheng"],
      minify,
    },
    fangda: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/fangda.html",
      filename: "fangda.html",
      chunks: ["chunk-vendors", "chunk-common", "fangda"],
      minify,
    },
    feiru: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/feiru.html",
      filename: "feiru.html",
      chunks: ["chunk-vendors", "chunk-common", "feiru"],
      minify,
    },
    feixing: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/feixing.html",
      filename: "feixing.html",
      chunks: ["chunk-vendors", "chunk-common", "feixing"],
      minify,
    },
    gaodujiankong: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/gaodujiankong.html",
      filename: "gaodujiankong.html",
      chunks: ["chunk-vendors", "chunk-common", "gaodujiankong"],
      minify,
    },
    guancha: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/guancha.html",
      filename: "guancha.html",
      chunks: ["chunk-vendors", "chunk-common", "guancha"],
      minify,
    },
    huifu: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/huifu.html",
      filename: "huifu.html",
      chunks: ["chunk-vendors", "chunk-common", "huifu"],
      minify,
    },
    jieping: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/jieping.html",
      filename: "jieping.html",
      chunks: ["chunk-vendors", "chunk-common", "jieping"],
      minify,
    },
    jvjiao: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/jvjiao.html",
      filename: "jvjiao.html",
      chunks: ["chunk-vendors", "chunk-common", "jvjiao"],
      minify,
    },
    niaokan: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/niaokan.html",
      filename: "niaokan.html",
      chunks: ["chunk-vendors", "chunk-common", "niaokan"],
      minify,
    },
    xiangjikongzhi: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/xiangjikongzhi.html",
      filename: "xiangjikongzhi.html",
      chunks: ["chunk-vendors", "chunk-common", "xiangjikongzhi"],
      minify,
    },
    zhuandong: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/漫游交互"),
      },
      template: "public/static/demos/漫游交互/zhuandong.html",
      filename: "zhuandong.html",
      chunks: ["chunk-vendors", "chunk-common", "zhuandong"],
      minify,
    },
    /**
     * 微应用
     */
    wei_1: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_1.html",
      filename: "wei_1.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_1"],
      minify,
    },
    wei_2: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_2.html",
      filename: "wei_2.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_2"],
      minify,
    },
    wei_3: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_3.html",
      filename: "wei_3.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_3"],
      minify,
    },
    wei_4: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_4.html",
      filename: "wei_4.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_4"],
      minify,
    },
    wei_5: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_5.html",
      filename: "wei_5.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_5"],
      minify,
    },
    wei_6: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_6.html",
      filename: "wei_6.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_6"],
      minify,
    },
    wei_7: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_7.html",
      filename: "wei_7.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_7"],
      minify,
    },
    wei_8: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_8.html",
      filename: "wei_8.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_8"],
      minify,
    },
    wei_9: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_9.html",
      filename: "wei_9.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_9"],
      minify,
    },
    wei_10: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_10.html",
      filename: "wei_10.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_10"],
      minify,
    },
    wei_11: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_11.html",
      filename: "wei_11.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_11"],
      minify,
    },
    wei_12: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_12.html",
      filename: "wei_12.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_12"],
      minify,
    },
    wei_13: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_13.html",
      filename: "wei_13.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_13"],
      minify,
    },
    wei_14: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_14.html",
      filename: "wei_14.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_14"],
      minify,
    },
    wei_15: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_15.html",
      filename: "wei_15.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_15"],
      minify,
    },
    wei_16: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_16.html",
      filename: "wei_16.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_16"],
      minify,
    },
    wei_17: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_17.html",
      filename: "wei_17.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_17"],
      minify,
    },
    wei_18: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_18.html",
      filename: "wei_18.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_18"],
      minify,
    },
    wei_19: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_19.html",
      filename: "wei_19.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_19"],
      minify,
    },
    wei_20: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/demos/微应用"),
      },
      template: "public/static/demos/微应用/wei_20.html",
      filename: "wei_20.html",
      chunks: ["chunk-vendors", "chunk-common", "wei_20"],
      minify,
    },
    react: {
      entry: "./src/demos.js",
      output: {
        path: resolve("public/static/reactDemos"),
      },
      template: "public/static/reactDemos/React.html",
      filename: "React.html",
      chunks: ["chunk-vendors", "chunk-common", "react"],
      minify,
    },
  },
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
        // sass-loader v8-，这个选项名是 "data"
        // sass-loader v8 中，这个选项名是 "prependData"
        // sass-loader v10+，这个选项名是 "additionalData"
        /*   
        
                与代码编辑器有冲突 暂时停用
        
        */
        // prependData: `@import "~@styles/global.scss";`,
      },
      postcss: {
        plugins: [
          // require("postcss-plugin-px2rem")({
          //   rootValue: 192, //换算基数， 默认100
          //   unitPrecision: 5, //允许REM单位增长到的十进制数字。
          //   //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          //   // propBlackList: [], //黑名单
          //   exclude: false && /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          //   // selectorBlackList: [], //要忽略并保留为px的选择器
          //   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
          //   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          //   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
          //   minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          // }),
          // 兼容浏览器，添加前缀
          // require("autoprefixer")({
          //   overrideBrowserslist: [
          //     "Android 4.1",
          //     "iOS 7.1",
          //     "Chrome > 31",
          //     "ff > 31",
          //     "ie >= 8",
          //     //'last 2 versions', // 所有主流浏览器最近2个版本
          //   ],
          //   grid: true,
          // }),
        ],
      },
    },
  },
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()],
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
