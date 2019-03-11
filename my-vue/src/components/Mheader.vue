<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">Chicken Music</h1>

        <router-link tag="div" class="mine" to="/info">
            <i class="icon-mine"></i>
        </router-link>
    </div>
</template>
<script>

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/styles/variable"
    @import "~common/styles/mixin"
    .m-header
        position: relative
        height: 44px
        text-align: center
        color: $color-theme
        font-size: 0
        .icon
            display: inline-block
            vertical-align: top
            margin-top: 6px
            width: 30px
            height: 32px
            margin-right: 9px
            bg-image('logo')
            background-size: 30px 32px
        .text
            display: inline-block
            vertical-align: top
            line-height: 44px
            font-size: $font-size-large
        .mine
            position: absolute
            top: 0
            right: 0
            .icon-mine
                display: block
                padding: 12px
                font-size: 20px
                color: $color-theme

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