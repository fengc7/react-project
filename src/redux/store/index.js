import { CombinedState } from "redux";
import rightsReducer from "./right";

const rootReducer = combineReducers({
    rightsReducer
})

export default rootReducer

export * as rightsActions from '../actions/index'