/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-06 16:58:56
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-15 14:50:27
 * @FilePath: /react-project/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react'
import {createRoot} from 'react-dom/client'
import RouterDom from './views';
import './index.css'

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<RouterDom/>)

// ReactDOM.render(routerDom(), document.getElementById('root'))