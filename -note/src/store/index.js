import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            uid: 0,
            username: ''
        }
    },
    mutations: {
        login(state, payload) {
            state.user.uid = payload.uid;
            state.user.username = payload.username;
        }
    }
});
