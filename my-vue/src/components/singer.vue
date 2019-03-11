<template>
    <div>
        计算数值
        {{count}}
        <button class="el-col-3"@click="increment">增加 </button>
        <div class="content" >
            <ul v-for="item in a" class="commonflex">
                <p>{{item.title}}</p>
                <div>
                    <li v-for="b in item.item" class="commonflex">
                        <div > {{b.name}}</div>
                    </li>
                </div>
            </ul>
            <div style="text-align: center;color: #333333;line-height: 30px;font-size: 15px">
                我是有底线的
            </div>
        </div>
    </div>
</template>

<script>
// import {mapState,mapGetters} from 'vuex';

import {getsingerlist} from 'src/api/singer';
  export default {
    name: "singer",
    data(){
      return{
        num:"",
        singer:[],
        a:[],
      }
    },
    created(){
      this._getsingerlist()
    },
    methods:{
      increment(){
        this.$store.commit('count/increment')
      },
      _getsingerlist(){
        getsingerlist().then((res)=>{
          if(res.code===0){
            this.singer = this.test(res.data.list)

          }
        })
      },
      test(list){

        let map = {
          hot: {
            title: "热门",
            item: [],
          }

        }
        list.forEach((item,index) => {
          if(index<10){
            map.hot.item.push({name:item.Fsinger_name})
          }
         let key = item.Findex
            if(!map[key]){
               map[key]={
                 title:key,
                 item:[]
               }
            }
          map[key].item.push({name:item.Fsinger_name,id:item.Findex})
          })
        // 为了得到有序列表，我们需要处理 map
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === "热门") {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })


       this.a = hot.concat(ret)


      }
    },
    computed:{
      // ...mapGetters('count', {
      //   doneTodos: 'doneTodos',
      // }),
      count () {

       // this.$store.getters[""num/doneTodos""]
        // return this.$store.getters.doneTodos
        // return this.$store.state.count.count
        // $store.getters.currentUser.email
        // return  this.$store.getters.doneTodos
        // return this.$store.getters.doneTodos.xx
        // return  this.$store.getters.countdoneTodos
        // debugger
        return  this.$store.getters["count/doneTodos"].xx
        // return this.$store.getters.doneTodos.xx
      },
      // ...mapState({
      //   count: state => state.count.count,
      // })
      // 箭头函数可使代码更简练
      // count: getters => getters.count,
      // ...mapGetters([
      //   'doneTodos',
      // ])
    }

  }
</script>

<style scoped>


</style>