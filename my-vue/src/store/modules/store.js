
const state={
  count: 0
}

const getters ={
    doneTodos: state => {
      // state.count=state.count+"123";
      return {
        xx:state.count+"123"
      }
    }
  // currentUser: state => {
  //   return {
  //     email: state.login_email,
  //     token: state.login_token,
  //     name: state.login_name
  //   }
  // }
  }
const  mutations={
    increment(){
      // setInterval(()=>{
        state.count++
      // },1000)
    }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations
}


