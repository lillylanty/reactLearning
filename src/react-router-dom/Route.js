import React,{ Component } from 'react';

import ReactDOM from 'react-dom';
import {Consumer} from './context';

export default class HashRouter extends Component{
    constructor(props){
        super(props)
    }
    render(){ //provider相当于router
        
        return (<Consumer value={{a:1}}>
        {
            (state)=>{
                let {path,component:Component} = this.props;
                let pathname = state.location.pathname;
                if(path.includes(pathname)){
                    return <Component></Component>
                }
                console.log(state)
                return null
            }
        }
        </Consumer>)
        
    
} 