/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-19 16:23:43
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 18:04:32
 * @FilePath: /react-project/src/components/button2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useImperativeHandle} from "react";
import './scss/button.scss'

const Child = props =>{
    const {count} = props
    console.log(count,'count传值')
    // useImperativeHandle 可以暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef , () =>{
        return {
            func: func,
        }
    })

    function func () {
        console.log('ada')
    }
    return(
        <>子组件</>
    )
}

export default Child