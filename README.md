# 从零开始用webpack打包
1.使用 npm init -y 快速构建package.json

2.构建目录结构
dist为默认输出文件路径
src里存放index.html 和main.js（作为入口）

3.全局安装webpack 和 webpack-cli
cnpm install webpack-cli -D -g

4.设置webpack打包时的配置，在config.js中以module.exports对象来暴露wp配置。
默认入口是src/index.js,输出是dist/main.js,一定要设置开发模式，production模式会对打包的main.js压缩
不支持es6的特性和api,如export default {},
现在chrome已经支持部分es6的module,所以这些module不能放进webpak打包，直接在页面中引用，在引用script时要加上type='module'让script解析器识别

当更改了main.js时，刷新index.html,并没有更新console，必须要重新webpack打包一下.
使用webpack-dev-server来解决反复的手动的重新打包操作

安装webpack-dev-server,在package.json中添加dev命令，既可以使用npm run dev打包了

webpack-dev-serve打包
 即i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /  服务启动在根目录 / ,点看8080，既可以看到文件目录  
dev-server打包是在内存中，打包好的main.js在，磁盘上即目录中看不到，在根目录中有一个看不到的main.js,在localhost:8080/main.js  ,内存运算快，减少磁盘
所以要修改index.html中的引用，不然引用而还是未更改前的localhost:8080/dist/的那份main.js

设置打包完成后自动打开浏览器，在dev script中添加--open 和端口 压缩和浏览器--open firefox --port 3800 --host 127.0.0.1 --hot --progress --compress(走网络的时候压缩)


cnpm install html-webpack-plugin -D把磁盘中的页面生成到内存中去，如index.html，加快运算速度。
在config中引入插件

4.js文件不支持html,
在js中混写入html的jsx语言需要被转换成从reactElement调用后生成的虚拟dom
const div = <div id='div1'>jsx写法</div>
转换成 const div =React.createElement('div',{id:'div1'},''jsx写法);
安装babel-core babel-loader babel-plugin-transform-runtime
以及安装语法转换的babel-preset-env babel-preset-stage-0 babel-preset-react


在配置文件中配置loader
``` 
rules: [
        {test: /\.js|jsx$/, use: 'babel-loader', exclude:/node_modules/}, //一定要加exclude
    ]
```
再.babelrc配置babel json配置
``` {
    "presets": [
        "env" , "stage-0", "react"
    ],
    "plugins": ["transform-runtime"]
}
```

添加import时省略后缀名的功能，在wp配置中增加resolve extensions


wp不支持其他文件类型，所以添加style-loader css-loader来解析css和url-loader解析图片和其他资源，并安装到配置的module中

react中导入的样式表，默认是在全局生效的，
``` 
import cssObj from '@/css/listCss.css' 不能省略后缀名，不然报错，也可以在wp的resolve中配置。
在cssObj中写的H1元素样式会是所有的该元素的样式改变，cssObj不是{}，因为只有js才会以{}暴露,
```
解决办法：wp配置
在css-loader上加参数modules，即可启用模块化,在导入样式表时，是一个包含类名和随机字符映射的对象了{title:'随机字符',otherClassName:'随机字符'}。cssm模块化只针对类和id，对标签选择器不起作用。

使用localIdentName([relativeRootPath],[cssfilename],[localclassnamemap],[hash:length])来自定义

在样式表中:global(类名)使类不被模块化

在元素中添加多个类名
1.className = {cssObj.title + 'test'}
2.className = {[cssObj.title ,'test'].join('') }

在项目中启用模块化并同时使用bootstrap
1.把自己的样式表，定义为.scss文件
2.第三方的样式吧以.css结尾
添加wp配置loader






