import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex);

export default new Vuex.Store({
    /*state:{
        num:0
    },
    mutations:{
        add(state){
            state.num++
        }
    }*/
    state,
    mutations
})
