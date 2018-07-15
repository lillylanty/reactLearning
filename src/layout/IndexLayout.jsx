import React, { Component } from 'react';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
import menus from '@/../mock/mockMenu';
import './indexlayout.scss';

class IndexLayout extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        console.log('menus',menus)
        var headers = [];var siders = [];
        menus.map(a=>{
            // if(a.name !== '用户中心'){
                headers.push({
                    name:a.name,
                    href:a.href
                })
            // }
            if(a.children && a.children.length>0){
                siders = siders.concat(a.children)
            }
        })
        return (
            <div className="mainbody">
                <header className="header">
                    <Header menuData={headers} />
                </header>
                {/* <nav  className="nav"></nav> */}
                <content  className="content">
                    <aside><Sider data={siders}/></aside>
                    <section></section>
                </content>
                <footer  className="footer"></footer>
            </div>
        );
    }
}

export default IndexLayout;
