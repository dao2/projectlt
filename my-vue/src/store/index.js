import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/store.js'
import userlogin from './modules/Login.js'
Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   getters:{
//     doneTodos: state => {
//       // state.count=state.count+"123";
//       return state.count+"123"
//     }
//   },
//   mutations: {
//     increment(){
//       setInterval(()=>{
//         state.count++
//       },1000)
//
//     }
//   }
// })

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    count:count,
    login:userlogin,
  }
})
