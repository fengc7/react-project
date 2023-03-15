/*
 * @Author: fengc7 fengchen1202@126.com
 * @Date: 2023-03-07 16:00:44
 * @LastEditors: fengc7 fengchen1202@126.com
 * @LastEditTime: 2023-03-08 12:56:15
 * @FilePath: /react-project/src/redux/store/right.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  {FUNC_RIGHTS} from '../actions'

const initState = {
    rights:0
}

const rightsActions = (state = initState, action) =>{
    let payload = action.payload
        switch (action.type) {
            case FUNC_RIGHTS:
                state.rights = payload
                return {
                    ...state,
                    rights: state.rights
                }
            default:
                return state
        }
}
export default rightsActions
// export default rightsReducer