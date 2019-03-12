<template>
    <div class="bgp">
        <img src="../assets/login-font.png" class="slogan" @click="back" >
        <div class="login-form">
            <p>login</p>
            <input type="text" placeholder="登录名" class="login-btn" v-model="Loginname">
            <input type="text" placeholder="密码"  class="login-btn" v-model="Loginpwd">
            <div class="other_login">
                <img src="../assets/wechat.png">
                <img src="../assets/weibo.png">
                <input type="button" placeholder="GO" class="right-login-btn" value="Go" v-on:click="login">
            </div>
        </div>
    </div>

</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: "info",
    data(){
      return{
       Loginname:"",
       Loginpwd:"",
      }
    },
    created:function(){

      console.log(localStorage.getItem("loginname"))
    },
    methods:{
      back:function(){
        this.$router.go(-1)
      },
      login:function () {
        if(!this.Loginname||!this.Loginpwd){
          MessageBox.alert("用户名或密码不能为空");
        }
        else if(this.Loginpwd.length<6){
          MessageBox.alert("密码不能少于6位");
        }
        else{
          let login = {
            Loginname:this.Loginname,
            Loginpwd:this.Loginpwd
          }
          MessageBox.alert("登录成功");
          this.$store.commit('login/setmyinfo',login)

          setTimeout(()=>{
            this.$router.push('/test/order')
          },1500)


        }
      }
    }
  }
</script>

<style scoped>
    body{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: orange;
        top:0;
        bottom: 0;
    }
   .bgp{
       width: 100%;
       height: 100%;
       position: fixed;
       background-color: orange;
       background: url("../assets/login.jpg") no-repeat;
       background-size: cover;
       top:0;
       bottom: 0;
   }
    .slogan{
       width: 82%;
       display: block;
       margin: 20% auto;
   }
   .login-form{
       width: 82%;
       margin: 0 auto;
       height: 300px;
       padding-top: 30%;

   }
   .login-form p{
       font-size: 30px;
       color: white;
       font-weight: 700;
       text-align: center;
       margin-bottom: 20px;
       font-family: inherit;
   }
   .login-btn{
       width: 90%;

       height: 40px;
       line-height: 40px;
       background-color: rgba(255, 255, 255, 0.7686274509803922);
       border-radius: 5px;
       border:1px solid wheat;
       outline: none;
       display: block;
       margin: 0 auto;
       margin-bottom: 10px;
       padding-left: 15px;
       color: #333333;
   }
   .other_login{
       width: 50%;
       margin: 0 auto;
       padding-left: 12%;
       position: relative;
       /*border: 1px solid;*/
   }
   .other_login img{
       float: left;
       width: 20%;
       margin-top: 10%;
       margin-left: 10%;
       margin-right: 1%;
   }
   .right-login-btn{
       width: 40px;
       height: 40px;
       border-radius: 40px;
       position: absolute;
       right: -50px;
       margin-top: 8px;
       text-align: center;
       color: #333333;
       background-color: #ffffff;
       border: 2px solid #ccc6c6;
   }
    /*p{*/
        /*font-family: "宋体";*/
        /*font-weight: 700;*/
        /*font-size: 18px;*/
        /*color: white;*/
        /*margin-top: 60%;*/
        /*text-align: center;*/
    /*}*/
</style>