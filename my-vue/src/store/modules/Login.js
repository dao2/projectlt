const state={
    loginname:localStorage.getItem("loginname"),
    loginpwd:localStorage.getItem("loginpwd")
}

const  mutations={
  setmyinfo(state,info){
    // var info =JSON.stringify(info)
    localStorage.setItem('loginname', info.Loginname);
    localStorage.setItem('loginpwd', info.Loginpwd);
    state.loginname = info.Loginname;
    state.loginpwd = info.Loginpwd;
  }
}
export default{
  namespaced: true,
  state,
  mutations
}


