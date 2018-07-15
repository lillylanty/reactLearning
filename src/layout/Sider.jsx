import React,{ Component } from 'react';
// import data from '../../mock/mockMenu';

export default class Sider extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const siders = this.props.data;
        console.log('siders',siders)
        const list = (siders)=>{           
            return siders.map((b,i)=>{
                    if(b.children && b.children.length >0){
                        console.log(b)
                        return list(b.children);
                    } 
                    console.log(b)                   
                    return <li  key={i}><a href={b.href}>{b.name}</a></li>
                })
          
               
        }
        return list(siders) 
    }
        
    
} 