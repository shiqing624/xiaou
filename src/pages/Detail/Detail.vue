<template>
  <div class="detail">
    <Head class="color">
      <div slot="left" class="headerLeft">
        <span class="iconfont icon-jiantouzuo"></span>
      </div>
      <div slot="middle" class="headerMiddleTitle">商品详情</div>
    </Head>
    <div class="detailInf" v-if ="goodsList[0]">
      <div class="detailImg">
        <img :src="'http://localhost:3000'+goodsList[0].img" alt />
      </div>
      <div class="detailcontent">
        <h2>{{goodsList[0].goodsname}}</h2>
        <span class="price">￥{{goodsList[0].price}}</span>
      </div>
    </div>
    <div class="detailFooter">
      <div class="goCart">
        <span class="iconfont icon-gouwuche"></span>
        <i>0</i>
      </div>
      <div class="joinCart">加入购物车</div>
      <div class="buyThePro">立即购买</div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/header";
export default {
  components: {
    Head,
  },
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
    let id = this.$route.query.id;
    this.$http.get("/getgoodsinfo?id=" + id).then((res) => {
      this.goodsList = res.data.list;
      console.log(this.goodsList);
    });
  },
};
</script>

<style lang="stylus" scoped>
.detail
  height 100%
  width 100%
  display flex
  flex-direction column
  overflow hidden
  #f1f1f1
  .detailInf
    flex 1
    width 100%
    overflow-y auto
    .detailImg
      background-color #fff
      width 100%
      text-align center

  .detailFooter
    height 1.15rem
    margin-top .01rem
    background-color #fff
    display flex
    line-height 1.15rem
    text-align center
    background-color #fff
    .goCart
        width 1.74rem
        height 100%
    .joinCart
        flex 1
        color #fff
        height 100%
        background-color #f26b11
    .buyThePro
        flex 1
        color #fff
        height 100%
        background-color #e43a3d
</style>