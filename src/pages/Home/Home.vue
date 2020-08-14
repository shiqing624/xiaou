<template>
    <div class="Home">
        <main>
            <router-view></router-view>
        </main>
        <footer>
           <router-link tag="div" to="/home/index">
                <span class="iconfont icon-htmal5icon06"></span>
                <i>首页</i>
           </router-link>
           <router-link tag="div" to="/home/cart">
                <span class="iconfont icon-gouwucheman"></span>
                <i>购物车</i>
           </router-link>
           <router-link tag="div" to="/home/my">
                <span class="iconfont icon-wode"></span>
                <i>我的</i>
           </router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.Home
    display flex
    flex-direction column
    height 100%
    width 100%
    main
        flex 1
        overflow hidden
    footer 
        height 1.2rem
        border-top 1px solid #ebebeb
        display flex
        div 
            flex 1
            text-align center
            color #888888
            span 
                font-size .55rem
                display block
            i 
                font-size .22rem
                display block 
                text-align center   
            &.router-link-active
                color #f26b11
</style>