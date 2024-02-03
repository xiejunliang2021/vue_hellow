import { createStort } from 'vuex'

import {createStore} from 'vuex'
 
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            name: '小米King'
        }
    }
})
 
export default store