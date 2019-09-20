import Vue from 'vue'
import Vuex from 'vuex'

import { constantRoutes, asyncRoutes } from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routers: ''
  },
  mutations: {
    SET_ROUTES: (state)=>{
      //filter menu list
      // let userRouter =  asyncRoutes.filter(item=>{
      //   item.meta;
      // })
      state.routers = constantRoutes.concat(asyncRoutes);
    }
  },
  actions: {
    
  }
})
