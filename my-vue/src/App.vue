<template>
  <div id="app">
    <keep-alive>
    <router-view  class="order"></router-view>
      </keep-alive>
    <!--<router-view name="sub" class="order"></router-view>-->
  </div>
</template>

<script>
  import Mheader from "components/Mheader"
export default {
  components:{
    Mheader
  },
   computed: {
     username () {
       // 我们很快就会看到 `params` 是什么12
       return this.$route
     }
   },
}
</script>

<style>
.active{
  color:#ffcd32!important;
}
  .tab{
    width:24%;
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
