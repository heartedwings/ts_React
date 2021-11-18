// 結合するためのもの
import { combineReducers } from "redux";
// 結合されるもの
// import counter from './counter';
import { StoreState } from './StoreState'

// 複数の場合は[,]で区切る
export default combineReducers( { StoreState } )