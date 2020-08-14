<template>
  <div class="header">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <span class="more iconfont icon-19"></span>
  </div>
</template>

<script>
export default {
  
};
</script>
<style lang="stylus" scoped>

.header
  display flex
  justify-content space-between
  width 100%
  box-sizing border-box
  padding 0 .1rem 
  height 0.88rem
.headerLeft
    padding .28rem 0
    img
      height 0.3rem
      width 1.5rem
.headerMiddle
    display block
    border-radius .05rem
    margin .27rem 0 0
    width 3.04rem
    height 0.39rem
    outline none
    background #eee
    padding 0 0 0 0.1rem
&::placeholder 
    font-size .16rem
    color #999
    text-align center
.headerMiddleTitle
    font-size .34rem
    margin: 0.67em 0   
    img
      margin .1rem 0 0 0 
      height 0.3rem
      width 1.5rem
.more
    line-height 0.88rem   
.color
    background #f26b11
    color #fff     
</style>