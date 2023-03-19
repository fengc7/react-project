/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-19 14:45:09
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 15:24:38
 * @FilePath: /react-project/src/components/hooks.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useCallback, useContext,useState} from "react";

const callBackComponent = () =>{
    let  [count , setCount] = useState(1);
    let [num, setNum] = useState(2)

    // useCallBack 优化性能，对依赖项进行监听，接受一个函数和依赖项数组。
    const memoized  = useCallback (() => {
        return num;

    },[count])
    console.log('记忆', memoized())
    console.log('原始',num, count)

    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>count</button>
            <button onClick={() => {setNum(num - 1)}}>num</button>
        </>
    )
}

export default callBackComponent