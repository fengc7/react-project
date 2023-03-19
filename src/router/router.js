/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 15:37:23
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-19 13:45:44
 * @FilePath: /react-project/src/router/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ComponentOne from "../views/componentOne";
import ComponentThree from "../views/componentThree";
import ComponentTwo from "../views/componentTwo";
import Hooks  from "../views/hook";
import Hooks2 from '../views/hooks2'

let routes = [
    {
        path:'/',
        component:ComponentOne,
        exact:true
    },{
        path:'/two',
        component:ComponentTwo,
        exact:true
    },{
        path:'/three',
        component:ComponentThree,
        exact:true
    },{
        path:'/hooks',
        component:Hooks,
        exact:true
    },{
        path:'/hooks2',
        component:Hooks2,
        exact:true
    }
]

export default routes