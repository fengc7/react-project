/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-06 16:58:56
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-15 17:40:13
 * @FilePath: /react-project/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import ComponentOne from '../views/componentOne'
// import ComponentTwo from '../views/componentTwo'
// import ComponentThree from './componentThree'
import routeList from '../router/router'

import configSore from '../redux/configStore'
import { Provider } from 'react-redux'
// provider 可以让容器组件拿到state。provider 在根组件外包裹一层，这样App所以子组件就默认都可以拿到state

import './index.scss'
import { render } from 'less'

const store = configSore()
class routerDom extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        const store = configSore()
        console.log(routeList,"routeList")
        return (
                <Provider store={store}>
                <Router>
                    <div className='primary'>
                        <header>头部</header>
                        <article className='firstBox'>
                            <div className='left'>
                                导航
                            <br/>
                                <Link to='/'>组件一</Link>
                                <br/>
                                <Link to='/two'>组件二</Link>
                                <br/>
                                <Link to='/three'>组件三</Link>
                                
                            </div>
                            <section>内容区
                                <Routes>
                                    {/* <Route path='/' element={<ComponentOne/>}></Route>
                                    <Route path='/two' element={<ComponentTwo/>}></Route>
                                    <Route path='/three' element={<ComponentThree/>}></Route> */}

                                    {routeList.map(route => <Route key={route.path} path={route.path} element={<route.component/>} ></Route>)}
                                </Routes>
                            </section>
                        </article>
                        
                    </div>
                </Router>
                </Provider>
        )
    }
}


export default routerDom

