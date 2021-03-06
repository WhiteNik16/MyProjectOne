import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import actionsOne from "./action/actions";
import apiRequests from "./action/api-requests"

const actions = {...actionsOne, ...apiRequests}

Vue.use(Vuex);



let store = new Vuex.Store( {
    state: {
        searchValue:'',
        products:[],
        cart:[]
    },

    mutations,
    actions,
    getters,

});
export default store;