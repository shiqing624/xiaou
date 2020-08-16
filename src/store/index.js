import Vue from "vue"
import Vuex from "vuex"
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state: {
            userInf:{}
        },
        mutations,
        actions,
        plugins:[
            createPersistedstate()
        ]
    }   
)