/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-19 13:45:15
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 17:50:50
 * @FilePath: /react-project/src/views/hooks2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React,{useEffect,useRef,useImperativeHandle} from "react";
import {forwardRef} from "react";
import CallBackComponent from '../components/callBackComponent'

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        click: () => {
            inputRef.current.value="Hello";
        }
    }));
    return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);

// const buttonContext = createContext()

const ImperativeHandleTest=() => {
    let ref = useRef(null);
    useEffect(() => {
        console.log(ref);
        ref.current.click();
    })
    return (
        <>
            <FancyInput ref={ref}/>
            <CallBackComponent></CallBackComponent>
        </>
    )
}
export default ImperativeHandleTest
