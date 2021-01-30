//设定当前文件所在位置为根目录
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    //切入点
        //a 设定监控文件 
        //b 注意 多js时需 import/export 配合
    entry: ['@babel/polyfill','./src/js/index.js'],

    //输入点 
        //a path:为设定生成路径
            //__dirname为生成文件设定权限
            // 'dist/js' 为生成文件夹路径
        //b filename 设定生成文件名称

    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: 'bundle.js'
    },

    //设置动态监听目录与webpack-dev-server配合
        //监听到的js文件变动直接显示在浏览器
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    //配置Babel
    module: {
        rules:[
            {
                test: /\.js$/, // 使用正则抓取JS文件
                exclude: /node_modules/, // 不包含抓取node_modules文件夹中的内容
                use: {
                    loader: 'babel-loader' // 使用babel-loader加载器
                }
           }
        ]
    },

}