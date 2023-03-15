/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-15 16:53:40
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-15 18:28:58
 * @FilePath: /fengc/react-project/src/views/componentThree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import * as IndexActions from '../redux/actions/index'

// bindActionCreators: 将多个ActionCreator 转化为dispatch（action）的函数集合 
import {bindActionCreators} from 'redux'
import img from '../assets/img.png'
import './three.scss';

class ComponentThree extends Component{
    
    state = {
        right:0
    }

    componentWillMount(){

    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps,'next')
        let {rights} = nextProps
        this.setState({right:rights})
        console.log(this.state)
    }
    
    change() {
        let a = this.state.right +1;
        console.log(a,'a')
        this.props.funcRights(a);
    }
    render(){
        return(
            <div className="threeBox">
                <img src={img} alt="" onClick={() => this.change()} />
                {/* img 直接引入图片可能会报错，需要import 来引入再使用 */}
            </div>
        )
    }
}

// mapStateToProps : store 和组件props的关系。
const mapStateToProps = (state) => {
    console.log(state,'state')
    return {
        rights: state.rightsActions.rights
    }
}
// mapDispatchToProps : props 如何对store做修改，和store.dispatch相关联。
const mapDispatchToProps = (dispatch) =>{
    return  bindActionCreators(IndexActions,dispatch)
}

 const mergeProps = (stateProps, actionProps, parentProps) => {
    return {
       ...stateProps,
       ...actionProps,
       ...parentProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ComponentThree)