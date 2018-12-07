<template>
    <div class="block" >
        <el-carousel  :height="hh+'px'" >
            <el-carousel-item v-for="item in slider" :key="item.picUrl" >
                <img :src="item.picUrl" style="width:100%;height:auto"  ref="imgheight" @load="imgload">
            </el-carousel-item>
        </el-carousel>
        <img :src="img">
    </div>
</template>

<script>
    import {getRecommend,douban,weibo,getDiscList} from 'api/recommand'
    import img from '../../assets/logo.png'
    let sum;
    sum=0;
   export default{
    data(){
      return{
        slider:[],
        img:img,
        hh:""
      }

    },
   created(){
     this._getrecommad()
     this._getDiscList()
     this._doubandianying()
     this._weibo()
   },
    methods:{
      tiao:function(){
        this.$router.push({path:"/info"})
      },
      _weibo(){
        weibo().then((res)=>{

        })
      },
      _doubandianying(){
        douban().then((res)=>{
          if(res.code===0){
            // console.log(res.data.slider)
            // this.slider = res.data.slider
          }
        })
      },
      _getDiscList(){
        getDiscList().then((res)=>{
        if(res.code===0){
          // console.log(res.data.slider)
          // this.slider = res.data.slider
        }
      })
     },
      _getrecommad(){
        getRecommend().then((res)=>{
          if(res.code===0){
            // console.log(res.data.slider)
            this.slider = res.data.slider
          }
        })
      },
      imgload(){
        sum++;
        console.log(sum)
        if(sum===1){
          this.$nextTick(()=>{
            this.hh=this.$refs.imgheight[0].height
          })
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

</style>