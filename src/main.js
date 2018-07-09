import React from 'react'
import ReactDom from 'react-dom'
//不做单独的配置的话不能省略.jsx后缀名
// import AppTest from './test/app'
import AppTest from '@/test/app'
import AppTest1 from '@/test/app.1'
import IndexLayout from '@/layout/IndexLayout'
// import cssObj from '@/test/app.scss'
// import css2 from '@/test/app.css'
// console.log(cssObj,css2);



//元素类型；当前dom元素的属性，对象或null； 子节点（包括虚拟dom 获取文本子节点）;其他参数： 其他子节点
// const myH1 = <h1>babel转换成create后的h1</h1>
// const myDiv = React.createElement('div',{id:'mainid'},'这是一个来自main创建的虚拟dom渲染的元素',myH1);
// const divs = AppTest()
const myDiv = <div><IndexLayout/></div>;  //<AppTest /><hr/><AppTest1/>

ReactDom.render(myDiv,document.getElementById('app'))