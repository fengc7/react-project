/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-16 13:33:21
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-16 16:16:03
 * @FilePath: /react-project/src/components/inputBox.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import './scss/input.scss'

// React.Component和Component没有区别，只是是否需要import Component；
// 子组件接收父组件的值：this.porps.。。。；
// 子组件向父组件传值：通过事件 + callback 来实现；
// 父组件接收子组件的值： 在子组件上定义一个方法接收传值，和vue类似；

class inputBox extends React.Component{
    constructor(props){
        super(props)
        // state：声明保存组件内部的值和状态数据，在constructor中声明初始化，是组件的私有属性，（类似vue的data）外部不可修改和访问，只能通过setState修改，修改state会使组件重新渲染。
        // props：接收组件外传递进来的值。只能读取不能修改。
        this.state = {
            item:'测试',
            name:'姓名'
        }
    }

    componentWillMount() {
        this.setState({
            name:this.props.inputContent.name,
            item:this.props.inputContent.item
        })
    }

    sendValue = (e) =>{
        this.props.callback({
            name:this.state.name,
            item: e.target.value
        })
    }
    render() {
        return (
            <div className="input-box">
                <span>{this.state.name}</span>
                {/* react中给input的value属性赋值，约束性属性，一次改变都要重新给自己赋值 */}
                {/* defaultValue 原生Domd的value属性，react完全不管理输入过程 */}
                <input type="text" defaultValue={this.state.item} onChange={this.sendValue}/>
            </div>
        )
    }
}

export default inputBox