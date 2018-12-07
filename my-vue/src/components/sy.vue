<!--
    @CreationDate:2018/3/16
    @Author:Joker
    @Usage:
-->
<template>
    <div class="pull-to-refresh-page-app">

        <div class="pull-content">
            <pull-to-refresh @load="load">
                <div v-for="i in players" class="list-item">
                    {{ i }}
                </div>
            </pull-to-refresh>
        </div>
    </div>
</template>
<style >
    .pull-to-refresh-page-app  .pull-content .list-item{

                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #ffffff;
                padding-left: 5px;


    }
</style>
<script>
  import PullToRefresh from 'components/sx'
  export default {
    name: 'PullToRefreshPage',
    components: {
      PullToRefresh
    },
    data(){
      return {
        players: ['kobe', 'fisher', 'jordan', 'shark', 'duncun']
      }
    },
    methods: {
      load(resolve){
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.players.unshift('player No.' + Math.floor(Math.random() * 10) + 1);
          }
          resolve("加载完成");
        }, 1000)
      }
    }
  }
</script>
