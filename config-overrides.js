// config-overrides.js
const { override, fixBabelImports,addLessLoader,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const path = require('path');
//打包分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 生产环境是否打包 Source Map
process.env.GENERATE_SOURCEMAP = false;

const addMyPlugin = config => {
  config.plugins.push(new BundleAnalyzerPlugin())
  return config
}
module.exports = override(
    // 生成环境 产生文件分析
    process.env.NODE_ENV === 'production'?addMyPlugin:null,
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // '@primary-color': '#FCC117', // 主色
            // '@text-color': '#1C274A', // 主文本色
            '@font-family': '"PingFang SC","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,-apple-system'
        },
    }),
    addWebpackAlias({
        'comp'  : path.resolve(__dirname, "src/components"),
        'pages'  : path.resolve(__dirname, "src/pages"),
        'lib'   : path.resolve(__dirname, "src/lib"),
        "util"  : path.resolve(__dirname, "src/util"),
        "assets": path.resolve(__dirname, "src/assets"),
        "style" : path.resolve(__dirname, "src/style"),
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "src/icons.js")
    }),
    // (config) => {
    //     config.module.rules.push({
    //       loader: 'webpack-ant-icon-loader',
    //       enforce: 'pre',
    //       include: [
    //         require.resolve('@ant-design/icons/lib/dist')
    //       ]
    //     });
    //     return config;
    // }
);