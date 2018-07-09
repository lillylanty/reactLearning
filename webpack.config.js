//引入html-webpck-plugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') //导入在内存中自动生成index页面的插件
//创建一个插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template:  path.join(__dirname,'./src/index.html'),//源文件
    filename: 'index.html' //生成的内存中首页的名称
}) //根据根目录下src/index生成在内存中的首页index.html 且自动把打包好的main.js等文件加到index.html的body结尾

//向外暴露一个打包的配置对象 webpack是基于node构建的，所以支持node的api和语法
module.exports = {
    mode: 'development', //'production',
    entry: {
        main: './src/main.js'
},
plugins:[
    htmlPlugin
],
devtool: "source-map",

module: { //所有第三方模块再次配置
    rules: [
        {test: /\.(js|jsx)$/, use: 'babel-loader', exclude:/node_modules/}, //一定要加exclude
        {test: /\.css$/, use: [
            {
                loader:'style-loader'
            }, {
                loader: 'css-loader'
            },{
                loader: 'px2rem-loader',
                options: {
                    remUni: 75,
                    remPrecision: 4
                }
            }   
            ]
        }, //?modules&localIdentName=[path][name]-[local][hash:5]']},
        {test: /\.(jpg|png|gif|bmp)$/, use:'url-loader'},
        {test: /\.(ttf|woff|woff2|eot|svg)$/, use:['url-loader','file-loader']},
        // {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']}
        {
            test: /\.scss$/,
            // exclude:/node_modules/,
            use: [
                {loader:"style-loader"}, // creates style nodes from JS strings
                {
                    loader:"css-loader",
                     options: {
                         sourceMap: true
                    }
                }, // translates CSS into CommonJS
                {
                    loader:"sass-loader",
                    options: {
                        sourceMap: true
                }
            },
                // {
                //     loader: 'px2rem-loader',
                //     options: {
                //         remUni: 75,
                //         remPrecision: 4
                //     }
                // }
             // compiles Sass to CSS
            ]
        }
    ]
},
resolve:{ 
    extensions: ['.js','.jsx','.json'], //设置引用时文件后缀名省略不写，顺序很重要，先找js,再找jsx
    alias:{
        '@': path.join(__dirname,'./src') //这样就表示项目根目录中src的这个一层绝对路径
    }

}

};


//wp只能处理js，加第三方loader来解析其他文件，资源

// export default {}  不支持es6的向外导出api  import ** from '标识符'
//如果chrome浏览器支持哪些，node则就支持哪些api

