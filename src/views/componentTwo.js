/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 15:38:03
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-10 15:36:47
 * @FilePath: /react-project/src/views/componentTwo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import Time from "../components/time";

class ComponentTwo extends Component{
    render() {
        return(
            <div>
                <h3>组件2</h3>
               <Time></Time>
            </div>
        )
    }
}
export default ComponentTwo