import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr:[]
  },
  mutations: {
    setData(state,obj){
      state.arr=obj
    }
  },
  actions: {
    getData({commit}){
      Axios.get("/api/list").then((res)=>{
        commit("setData",res.data.datalist)
      })
    }
  },
  modules: {
  }
})
