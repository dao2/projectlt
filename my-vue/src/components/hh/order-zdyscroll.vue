<template>
    <div style="overflow-y:hidden;">
        <el-carousel  :height="hh+'px'" >
            <el-carousel-item v-for="item in slider" :key="item.picUrl" >
                <img :src="item.picUrl" style="width:100%;height:auto"  ref="imgheight" @load="imgload">
            </el-carousel-item>
        </el-carousel>
        <div class="recommand-list">
            <h1 class="list-title">热门歌单推荐</h1>
        </div>
        <!--:height="hh1+'px'"-->
        <div class="goods_wrapper"  ref="wrapper" style="overflow: hidden; "  >
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
</template>

<script>
  import {getRecommend,douban,weibo,getDiscList} from 'api/recommand'
  import img from '../../assets/logo.png'
  import Bscroll from 'better-scroll'
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
        scrolly:0

      }

    },
    created(){
      this._getrecommad()
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.hh1 =h - 294; //减去页面上固定高度height
      this._getDiscList()
      // this._doubandianying()
      // this._weibo()
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
          if(res.code===0){
            this.list = res.data.list
            this.$refs.wrapper.style.height=this.hh1+"px"
            this.$nextTick(() => {
              if (!this.scroll) {
                this.scroll = new Bscroll(this.$refs.wrapper, {
                  scrollY: true,
                })
                console.log(this.scroll)
                this.scroll.on('touchEnd', (pos) => {
                  // 下拉动作
                  if (pos.y > 50) {
                    console.log("下拉刷新")
                    // alert("下拉刷新")
                    // this.loadData()
                  }
                })
                this.scroll.on('scrollEnd', () => {
                  // 滚动到底部
                  // console.log(this.scroll.y)
                  // console.log(this.scroll.maxScrollY+50)
                  if (this.scroll.y <= ( this.scroll.maxScrollY+ 50)) {
                    console.log("我是有底线的")
                    // this.$emit('scrollToEnd');
                  }
                });
              }
              else {
                // this.scroll.refresh()
              }
            })
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
            this.hh=this.$refs.imgheight[0].height
          })
          // this.scroll.refresh()
          // alert("123")
        }
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