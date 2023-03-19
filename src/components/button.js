/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-18 10:10:44
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 18:36:27
 * @FilePath: /react-project/src/components/button.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { data } from "autoprefixer";
import React ,{useImperativeHandle}from "react";
import './scss/button.scss'

class button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '确定',
            status: true
        }
    }
    

    componentWillMount() {
        this.setState({
            item: this.props.item == null ?  '确定': this.props.item
        })
    }
    
    handleSend = ()=>{
        console.log("sendValue")
        
        this.props.click({
            type:'btn'
        })
        
    }

    render() {
        const width = {
            width: this.props.width + 'px'
        }
        const color = {
            color: this.props.color
        }
        const background = {
            background: this.props.background
        }
        let disabled = this.props.disabled == null ? true : false 
        return (
            <div className="buttonBox">
                {disabled ? 
                <button style={{ width, color, background}} onClick={this.handleSend}>
                    {this.state.item}
                </button>
                :
                <button className="buttonDis" >禁用</button>
                }
            </div>
        )

    }
}

export default button