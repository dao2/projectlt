<template>
    <div ref="wrapper" >
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      height:0,
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.$refs.wrapper.style.height=this.height+"px"
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
        console.log("前"+this.scroll)
        if (this.listenScroll) {

          this.scroll.on('scroll', (pos) => {

            this.$emit('scroll', pos)
          })
        }
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {

            console.log(this.scroll.maxScrollY + 50)
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              // console.log("我是有底线的")
              this.$emit('scrollToEnd')
            }
          })
        }
        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 30) {
            this.$emit('touchEnd')
            console.log("下拉刷新")
          }
        })

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data() {
        console.log("后"+this.scroll)
        setTimeout(() => {

          this.refresh()

        },20)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
