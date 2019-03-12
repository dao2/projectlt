<template>

  <div id="app">
    <transition name="fade">
    <keep-alive>

    <router-view  class="order"></router-view>

      </keep-alive>
    </transition>
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

<style >
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
