<template>
  <div class="Classify">
    <Head class="color">
      <div slot="left" class="headerLeft">
        <span class="iconfont icon-jiantouzuo"></span>
      </div>
      <h2 slot="middle" class="headerMiddleTitle">商品分类</h2>
    </Head>
    <div class="classifyContent">
      <div class="classifyLeft">
        <ul>
          <li v-for="(item,index) in classifyList" :key="item.id" @click="jump(index)">
            <a :class="{'active':idx==index}">{{item.catename}}</a>
          </li>
        </ul>
      </div>
      <div class="classifyRight">
        <ul v-if="classifyList.length>0">
          <li v-for="(item,index) in classifyList[idx].children" :key="index" @click="proMore" :goodsList='goodsList'>
            <img :src="'http://localhost:3000'+item.img" alt />
            <p>{{item.catename}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/header";
export default {
  data() {
    return {
      classifyList: [],
      idx: 0,
      goodsList:[]
    }
  },
  components: {
    Head,
  },
  methods: {
    jump(i) {
      this.idx = i;
    },
    proMore() {
      this.$http.get("/getgoods?" + this.idx).then((res) => {
        this.goodsList = res.data.list
        console.log(this.goodsList)
        this.$router.push('/home/index?fid='+this.idx)
      });
    },
  },
  mounted() {
    this.$http.get("/getcatetree").then((res) => {
      this.classifyList = res.data.list;
    });
  },
};
</script>

<style lang="stylus" scoped>
.Classify
  height 100%
  width 100%
  .classifyContent
    height 100%
    width 100%
    display flex
    overflow hidden
    .classifyLeft
      width 1.65rem
      margin-top 0.18rem
      border-right 1px solid #d9d9d9
      ul
        height 100%
        width 100%
        li
          a
            display block
            height 0.52rem
            line-height 0.52rem
            text-align center
            font-size 0.25rem
            color #333
            margin 0.24rem 0 0.64rem
            border-left 0.09rem solid transparent
            &.active
              color #f26b11
              border-left 0.09rem solid #f26b11
    .classifyRight
      flex 1
      overflow-y auto
      height 100%
      ul
        margin-top 0.18rem
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        box-sizing border-box
        padding 0 0.25rem 0 0.28rem
        li
          width 1.55rem
          height 2.16rem
          text-align center
          color #888888
          font-size 0.24rem
          font-family '微软雅黑'
        img
          width 1.47rem
          height 1.6rem
</style>