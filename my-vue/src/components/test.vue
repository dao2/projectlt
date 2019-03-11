<template>
    <div>
        <!--<div class="carousel">test</div>-->
        <!--<div class="recommend">热门歌单推荐</div>-->
        <!--<ul class="recommend-ul">-->
            <!--&lt;!&ndash;<li >情暖夏凉</li>&ndash;&gt;-->
            <!--&lt;!&ndash;<router-link  tag="li"  router.push({ path:'/info' }) >认真的雪</router-link>&ndash;&gt;-->
            <!--<li  v-on:click="greet" >情暖夏凉</li>-->
            <!--&lt;!&ndash;<router-link  tag="li"  to="/info">认真的雪</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;<router-link  tag="li"  to="/info">深深的爱过你</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;<router-view  class="order" ></router-view>&ndash;&gt;-->
        <!--</ul>-->
        <Mheader></Mheader>
        <!--<div>{{username}}</div>-->
        <router-link :to="{ name: 'order'}" tag="div" class="tab" >推荐

        </router-link>
        <router-link :to="{ name: 'singer'}" tag="div" class="tab">歌手</router-link>
        <!--<router-link :to="{ name: 'singer'}" tag="div" class="tab">歌手</router-link>-->
        <router-link :to="{ name: 'waia'}" tag="div" class="tab">排行</router-link>
        <router-link :to="{ name: 'sy'}" tag="div" class="tab">sy</router-link>
        <keep-alive>
            <router-view  class="order">
            </router-view>
        </keep-alive>

    </div>

</template>

<script>
  import Mheader from "components/Mheader"
  export default {
    components:{
      Mheader
    },
    name: "test",
    methods: {
      // greet: function (event) {
      //   this.$router.push({path:"/info"})
      // }
    }
  }
</script>

<style >
 .carousel{
     width: 100%;
     height: 230px;
     border:1px solid #ffffff;
 }
 .el-carousel__indicators li{
     padding:12px 3px!important;
     width: 20px!important;
 }
 .el-carousel__indicators li button{

     width: 100%!important;
 }
    .recommend{
        line-height: 50px;
        font-size: 20px;
        color: wheat;
        text-align: center;
    }
    .recommend-ul{
        padding: 0;
        margin: 0;
        height: auto;
    }
     .recommend-ul li{
         line-height: 40px;
         color: #333333;
         text-align: left;
     }
    body{
        overflow: hidden;
    }
 .active{
     color:#ffcd32!important;
 }
 .tab{
     width:23%;
     line-height: 50px;
     text-align: center;
     color: white;
     display: inline-block;
     height:50px;
 }
 .order{
     width:100%;
     height: auto;
     background-color: #0e0e0e;

 }
</style>