/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-19 10:04:33
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 18:02:25
 * @FilePath: /react-project/src/views/hook.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import React , { useState,useEffect ,useContext } from "react";
import Child from '../components/button2'

// 
const usePerson = ({name}) => {
    const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState({})

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            setPerson({name})
        },1000)
    },[name])
    return [loading,person]
}
// 
const AsyncPage = (name)=> {
    const [loading,person] = usePerson(name)
    return (
        <>
            {loading?<p>Loading...</p>:<p>{ person.name }</p>}
        </>
    )
}
// 
const PersonPage = ()=> {
    // 
    let ChildRef = React.createRef()
    function handleOnClick() {
        ChildRef.current.func()
    }
// 
    const [state,setState] = useState('')
    const changeName = (name)=> {
        setState(name)
    }
// 

    const AppContext = React.createContext();
    const A = ()=> {
        const { name,age } = useContext(AppContext)
        return (
            <p>
                我是A组件,我的名字是：{ name }；
                我今年{age}
                <span>我是A的子标签：{ name }</span>
            </p>
        )
    }
    const B= ()=> {
        const { name } = useContext(AppContext);
        return (
            <p>我是B组件,名字是： { name }</p>
        )
    }

        // 点击增加
        const [ count,setCount ] = useState(3)
        const addCount = ()=> {
            let newCount = count;
            setCount(newCount +=1)
        }
        // 
        useEffect(() => {
            console.log('类似于componentDidMount，通常在此处调用api获取数据')
          }, [count])
// 

    return (
        <>
            <AsyncPage name={ state } />
            <button onClick={ ()=> { changeName('郭靖')}}>郭靖</button>
            <button onClick={ ()=> { changeName('黄蓉')}}>黄蓉</button>
            <button onClick={handleOnClick}>click</button>
            <Child onRef={ChildRef} count={count}></Child>
            {/*  */}
            <AppContext.Provider value={{ name: '张三',age:120}}>
                 <A />
                 <br/>
                 <B />
                 <br />
                 <span>{count}</span>
                 <button onClick={addCount}>++</button>
             </AppContext.Provider>
        </>
    )
}
export default PersonPage;