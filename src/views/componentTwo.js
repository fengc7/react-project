/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 15:38:03
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-16 16:27:48
 * @FilePath: /react-project/src/views/componentTwo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import Time from "../components/time";
import InputBox from "../components/inputBox";

class ComponentTwo extends Component{
    constructor(){
        super()
        this.state = {
            inputContent:{
                name:'年龄',
                item: 12
            },
            getChild:{}
        }
    }

    getValue = (data)=>{
        this.setState({
            getChild:{
                name:data.name,
                age:data.item
            }
        })
    }
    componentWillUpdate(){
    }

    render() {
        return(
            <div>
                <h3>组件2 {this.state.getChild.age}{this.state.getChild.name}</h3>
               <Time></Time>
               <InputBox inputContent={this.state.inputContent} callback={this.getValue}></InputBox>
            </div>
        )
    }
}
export default ComponentTwo