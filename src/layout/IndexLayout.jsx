import React, { Component } from 'react';
import Header from './Header.jsx';
// import * as data from '@/../mock/mockMenu';
import './indexlayout.scss';

class IndexLayout extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        var data = []
        console.log('mock data',data)
        return (
            <div>
                <header className="header">
                    <Header menuData={data} />
                </header>
                <nav  className="nav"></nav>
                <content  className="content">
                    <aside></aside>
                    <section></section>
                </content>
                <footer  className="footer"></footer>
            </div>
        );
    }
}

export default IndexLayout;
