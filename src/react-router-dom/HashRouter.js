import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './context';

export default class HashRouter extends Component{
    constructor(props){
        super(props)
        this.state = {
            location:{
                pathname: window.location.hash.slice(1) || '/'
            }
        }
    }

    componentDidMount(){
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange',()=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1) || '/'
                }
            })
        })
    }
    render(){ //provider相当于router
        let value = {
            location: this.state.location
        }
        return (
        <Provider value={value}>
            {this.props.children}
        </Provider>
        )
        
    }
} 