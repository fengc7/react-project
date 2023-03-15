/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-10 14:32:53
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-10 15:35:42
 * @FilePath: /react-project/src/components/time.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"

class Time extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "react",
            now: new Date().toLocaleTimeString()
        }
    }
    render() {
        return (
            <>
              <h4>
                组件类型{this.state.name}: 当前时间是： {this.state.now}
              </h4>
            </>
        )
    }
    // 第一次渲染完毕后会执行，数据已经挂载
    componentDidMount() {
        setInterval(() => {
            // 改变state里的时间=》 render重新渲染 =》更新时间；
            // setState 是react方法 将state里的对象替换掉，作用，改变状态，触发render重新执行。
            this.setState({now:new Date().toLocaleTimeString()})
        }, 1000);
    }
}

export default Time