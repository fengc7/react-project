/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 16:00:16
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-08 12:51:36
 * @FilePath: /react-project/src/redux/configStore.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {legacy_createStore as createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { routerReducer  } from 'react-router-redux'
import thunk from 'redux-thunk'
import rightsActions from './store/right'

// compose: 对createStore方法进行增强，并生成新的方法
// compose： compose函数会返回参数项依次累加的函数，调用方法依次从最里面的参数到为外面的参数依次调用，参考reduce方法
const finalCreateStore = compose(
    // appilMiddleware是redux 的api 可以让redux解析各种action 
    applyMiddleware(thunk)
)(createStore)

// combineReducers: 将一个有不同render函数作为value 的object 合并成为一个最终的reducer 函数，这样就可以对这个reducer调用createStore
const reducer =combineReducers(Object.assign({}, {rightsActions},{routing: routerReducer}))


export default function configSore(initialState){
    const store = finalCreateStore(reducer, initialState)
    return store
}