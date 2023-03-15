/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-15 16:53:40
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-15 17:49:30
 * @FilePath: /fengc/react-project/src/views/componentThree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from "react";
import img from '../assets/img.png'
import './three.scss';

class ComponentThree extends Component{
    constructor() {
        super()
    }

    render(){
        return(
            <div className="threeBox">
                <img src={img} alt="" />
                {/* img 直接引入图片可能会报错，需要import 来引入再使用 */}
            </div>
        )
    }
}

export default ComponentThree