/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 15:37:50
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-15 18:03:14
 * @FilePath: /react-project/src/views/componentOne.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as IndexActions from '../redux/actions/index'
import { DatePicker } from "antd";
import styles from './one.scss'


class ComponentOne extends Component{
    state = {
        right: 0
    }
    
    componentWillMount() {
        // this.props.funcRights(0)
    }

    componentWillReceiveProps (nextProps) {
        let {rights} = nextProps
        this.setState({right: rights})
    }

    change (){
        let a = this.state.right + 1
        this.props.funcRights(a)
    }
    
    render (){
        let {rights} = this.props
        return (
            <div>
               
                <h3 onClick={() => this.change() }>标题组件1</h3>
                <div className='data'>
                    <li>
                        <span>name：</span>
                        <input className="input" type="text"  value={rights} placeholder='点击标题自加' readOnly/>
                    </li>
                    <li>
                        <span>日期：</span>
                        <div className="inputBox">
                            <DatePicker/>
                        </div>
                    </li>
                    
                </div>

            </div>
        )
    }
}

export default connect((state) =>{
     console.log(state)
    return  {
        rights : state.rightsActions.rights
    }
}, (dispatch) =>{
    return bindActionCreators(IndexActions, dispatch)
}, (stateProps, actionProps, parentProps) =>{
    return {
        ...stateProps,
        ...actionProps,
        ...parentProps
    }
}) (ComponentOne)
