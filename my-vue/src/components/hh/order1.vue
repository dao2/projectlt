<template>
       <div style="position: fixed;top: 94px;width: 100%;;bottom: 0" ref="recommend">
           <scroll ref="scroll" class="recommend-content" :pullup="true"  :data="list"
                   @scrollToEnd="scrollToEnd"
                   :listenScroll="true"
                   style="position: relative;overflow: hidden;height:100%" @touchEnd="touchEnd" >
               <div>
              <el-carousel  :height="hh+'px'" >
            <el-carousel-item v-for="item in slider" :key="item.picUrl" >
                <img :src="item.picUrl" style="width:100%;height:auto"  ref="imgheight" @load="imgload">
            </el-carousel-item>
        </el-carousel>
              <div class="recommand-list">
        <h1 class="list-title">热门歌单推荐</h1>
        </div>
                   <!--:height="hh1+'px'"-->
              <div class="goods_wrapper"  style="overflow: hidden; "  >
                       <ul class="content" >
                           <li v-for="item in list" class="commonflex">
                               <img :src="item.imgurl" width="50px" >
                               <div> {{item.dissname}}</div>
                           </li>
                           <div style="text-align: center;color: #333333;line-height: 30px;font-size: 15px">
                               我是有底线的
                           </div>
                       </ul>
                   </div>
               </div>
           </scroll>
    </div>

</template>

<script>
    import {getRecommend,douban,weibo,getDiscList} from 'api/recommand'
    import img from '../../assets/logo.png'
    import scroll from '../scroll'
    let sum;
    sum=0;
   export default{
    data(){
      return{
        slider:[],
        list:[],
        img:img,
        hh:"",
        hh1:"",
        scrollY:0,
        scrolly:0,
        show:false,
      }

    },
     components: {
       scroll
     },
   created(){
     this._getrecommad()
     var h = document.documentElement.clientHeight || document.body.clientHeight;
     this._getDiscList()

   },
    methods:{
      // tiao:function(){
      //   this.$router.push({path:"/info"})
      // },
      // _weibo(){
      //   weibo().then((res)=>{
      //
      //   })
      // },
      // _doubandianying(){
      //   douban().then((res)=>{
      //     if(res.code===0){
      //       // console.log(res.data.slider)
      //       // this.slider = res.data.slider
      //     }
      //   })
      // },
      _getDiscList(){
        getDiscList().then((res)=>{
        if(res.code===0) {
          this.list = res.data.list
        }
      })
     },
      _getrecommad(){
        getRecommend().then((res)=>{
          if(res.code===0){
            this.slider = res.data.slider
          }
        })
      },
      imgload(){
        sum++;
        if(sum===1){
          this.$nextTick(()=>{
            this.hh=this.$refs.imgheight[0].height;
            var h = document.documentElement.clientHeight || document.body.clientHeight;
            this.hh1 =h-(144+this.hh);
            alert(this.hh1)
            this.$refs.scroll.refresh()

            console.log(this.$refs.scroll)

            // this.show==true;
          })
        }
        // if (!this.checkloaded) {
        //   this.checkloaded = true
        //   this.$refs.scroll.refresh()
        // }
      },
      scrollToEnd: function () {
        // alert("123")
      },
      touchEnd:function () {
        alert("1")
      },
      scroll:function (pos) {
        // alert(pos.y)
      }
  },
     mounted () {
       window.addEventListener('resize', () => {
         this.hh = this.$refs.imgheight[0].height
       }, false)
       // window.onresize = function temp() {
       //   // 通过点语法获取img的height属性值
       //   this.hh = this.$refs.imgheight[0].height
       // }
     },
     watch: {
       hh1(val, oldVal) {//普通的watch监听
         setTimeout(() => {

           this.$refs.scroll.refresh()

         },20)


         // this.$refs.scroll.finishPullUp()

       },

     }
  }
</script>

<style scoped>
   .recommand-list{
       line-height: 50px;
          color: #ffcd32;
       font-size:16px;
       text-align: center;
   }
    .commonflex{
        display: flex;
    }
   .commonflex img{
       width: 60px;
       height: 60px;
       margin-left: 10px;
       margin-bottom: 10px;
       border-radius: 5px;
   }
    .commonflex img ,.commonflex div{
        height: 90px;
        line-height: 60px;
        text-align: left;
        padding-left: 10px;
        color:#544f4f;
        flex:1;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #app{
        height: 100%;
    }


</style>