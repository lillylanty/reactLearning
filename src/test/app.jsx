import React from 'react';
import ReactDom from 'react-dom';
import cssObj from './app.scss'
console.log(cssObj) //结果是空对象{}

export default class AppTest extends React.Component{
    constructor(props){
        super();
        this.test = this.test.bind(this)

    }
   test = function (){
        console.log('outer fuc',this)
    }
    test2(){
        console.log('test2 bind inline',this)
    }
    test3(){
        console.log('test3',arguments, this)
    }

   render(){
    return (
        <div>
            <h1>这是app</h1> 
            <div className={cssObj.test}>12333Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi assumenda non eos, consequuntur fugit! Itaque fugiat, voluptates laudantium maxime dolor inventore, molestias nesciunt, eius et corporis reiciendis corrupti esse.
            <span className={cssObj.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iste neque quia error? Odit hic voluptatibus obcaecati, totam adipisci eius voluptatem. In aliquam laborum dolore, ullam nam quae quod nisi.</span>
            <button onClick={()=>{console.log('inline arrow',this)}} >行内箭头</button>
            <button onClick={this.test} >函数指向</button>
            <button onClick={this.test2.bind(this)} >函数指向2</button>
            <button onClick={()=>this.test3('参数1','参数2')} >函数指向2</button>
            </div>
        </div>
    )           
   }
}