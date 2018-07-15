import React,{ Component } from 'react';
// import data from '../../mock/mockMenu';

export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const headers = this.props.menuData;
        const renderLi = (headers)=>{
            
        }
        return <div>
            <img className="logo" src="" alt="logo"/>
           <div>
        {
         headers.map((b,i)=>{
             if(b.name !== '用户中心'){
                 return <a  key={i} href={b.href}>{b.name}</a>
             }
        })
        }  
           </div>
           <div>用户中心</div>    
         </div>
        
    }
        
    
} 