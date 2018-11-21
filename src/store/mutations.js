import state from './state.js'
import * as types from './mutation-types.js'
export default {
    [types.COLLECT](state,payload){
        state.num += payload.value;
        console.log("收藏成功")
    }
}
