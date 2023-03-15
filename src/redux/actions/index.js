/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 16:00:27
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-08 12:58:34
 * @FilePath: /react-project/src/redux/actions/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const FUNC_RIGHTS = 'func_rights'
// funcRights 是一个action creator ，每次运行funcRights 都会生成一个新的action

export function funcRights (rights) {
    return  {
        type :FUNC_RIGHTS,
        payload :rights
    }
}