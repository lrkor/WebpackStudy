// document.write('search page');
'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import logo from './images/logo.jpg'
import './search.less'

class Search extends React.Component {

    render() {
        return (
            <div className="search-text">
                Search Text 2222
                热更新
                <img src={logo} alt=""/>
            </div>
        );
    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('root')
)