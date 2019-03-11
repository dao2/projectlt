<template>
       <div style="position: fixed;top: 94px;width: 100%;;bottom: 0" ref="recommend">
           <scroll ref="scroll" class="recommend-content" :pullup="true"  :data="list"
                   @scrollToEnd="scrollToEnd"
                   :listenScroll="true"
                   @scroll="scroll"
                   style="position: relative;overflow: hidden;height:100%" @touchEnd="touchEnd" >
               <div>
            <img src="../xuan.svg" style="width: 45px; height: 45px;margin:0px auto; margin-top-50px;display: block;" v-show="show" ref="imgshow">
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
                               <img v-lazy="item.imgurl" width="50px" >
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
    import {getRecommend,douban1,weibo,getDiscList} from 'api/recommand'
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
     // this._doubandianying()
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
      _doubandianying(){
        douban1().then((res)=>{
          if(res.code===0){
            // console.log(res.data.slider)
            // this.slider = res.data.slider
          }
        })
      },
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
        // this.show=true
        // var _this=this
        // setTimeout(function () {
        //   _this.$refs.imgshow.style.height="0"
        // },1700)
        // _this.$refs.imgshow.style.height="45px"
      },
      scroll:function (pos) {
        console.log(pos.y)

        if(pos.y>25){

          this.show=true
          var _this=this
          setTimeout(function () {
            _this.$refs.imgshow.style.height="0"
          },2000)
          _this.$refs.imgshow.style.height="45px"
        }
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
   svg {
       width: 45px;
       height: 45px;
       margin: 2px;
       display: inline-block;
   }

   /*h1 {*/
       /*text-align: center;*/
       /*color: #fff;*/
       /*margin: 0 0 100px;*/
       /*font-size: 34px;*/
       /*font-weight: 100;*/
       /*text-transform: uppercase;*/
       /*background-color: #e43725;*/
       /*padding: 20px 0;*/
   /*}*/
   /*h1 b {*/
       /*font-weight: 700;*/
   /*}*/

   .made-with-love {
       margin-top: 20px;
       padding: 10px;
       font-size: 10px;
       font-family: arial;
       color: #fff;
   }
   .made-with-love i {
       font-style: normal;
       color: #F50057;
       font-size: 14px;
       position: relative;
       top: 2px;
   }
   .made-with-love a {
       color: #fff;
       text-decoration: none;
   }
   .made-with-love a:hover {
       text-decoration: underline;
   }

</style>