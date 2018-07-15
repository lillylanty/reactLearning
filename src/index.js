import React,{ Component } from 'react';
import {HashRouter as Router,Route}  from './react-router-dom';
//引入组件
import DataManage from './components/DataManage';
import Overview from './components/Overview.jsx';
import IndexLayout from '@/layout/IndexLayout.jsx'

export default class App extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <Router>
                <div>
                    <Route path='/datamanage' component={DataManage}></Route>
                    <Route path='/overview' component={Overview}></Route>
                    {/* <Route path='/index' component={IndexLayout}></Route> */}
                </div>
            </Router>
        )
    }
}