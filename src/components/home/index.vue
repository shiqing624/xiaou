<template>
  <div class="main">
    <Head>
      <div slot='left' class="headerLeft">
        <img src='@/assets/logo.jpg' alt=""/>
      </div>
      <input type="text" slot='middle' placeholder="寻找商品" class="headerMiddle">
    </Head>
    <div class="mainContent">
      <div class="banner">
        <Swiper ref="mySwiper" :options="swiperOptions" class="swp">
          <SwiperSlide v-for="item in bannerList" :key="item.id">
            <img :src="'http://localhost:3000'+item.img" alt />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="menu">
        <ul>
          <li v-for="(item,index) in menu" :key="index" @click="jump(index)">
            <span :class="['iconfont',item.className]" :style="{'color':item.color}"></span>
            <i>{{item.title}}</i>
          </li>
        </ul>
      </div>
      <div class="goodsTab">
        <div class="goodsTabTop">
          <ul class="goodsTabTopContent">
            <li
              :class="{'active':index==idx}"
              v-for="(item,index) in tabTopList"
              :key="index"
              @click="tap(index)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="goodsTabList">
          <ul v-if="goodsList.length >0">
            <li v-for="(item,index) in goodsList[idx].content" :key="index">
              <div class="imgWarp">
                <img :src="'http://localhost:3000'+item.img" :alt="item.goodsname" />
              </div>
              <div class="goodsInf">
                <h3 class="goodsTitle">{{item.goodsname}}</h3>
                <p class="goodsPrice">￥{{item.market_price}}</p>
                <p class="goodsCount">12313件</p>
                <div class="goodsBuy">立即购买</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// If you use Swiper 6.0.0 or higher
import "swiper/css/swiper.css";
import Head from '@/components/common/header'
export default {
  data() {
    return {
      bannerList: [],
      goodsList: [],
      tabTopList: ["推荐商品", "最热商品", "最新商品"],
      idx: 0,
      swiperOptions: {
        pagination: {},
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        // Some Swiper option/callback...
      },
      menu: [
        {
          className: "icon-naozhong",
          title: "限时抢购",
          color: "#f7975a",
          path:'/home/index'
        },
        {
          className: "icon-shangcheng",
          title: "积分商城",
          color: "#32b323",
          path:'/home/index'
        },
        {
          className: "icon-lianxiwomen",
          title: "联系我们",
          color: "#4ab6f6",
          path:'/home/index'
        },
        {
          className: "icon-fenlei",
          title: "商品分类",
          color: "#f06f1c",
          path:'/Classify'
        },
      ],
    };
  },
  methods: {
    tap(i) {
      this.idx = i;
    },
    jump(i){
      this.$router.push(this.menu[i].path)
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Head
  },
  directives: {
    swiper: directive,
  },
  computed: {

  },
  mounted() {
    this.$http.get("/getbanner").then((res) => {
      this.bannerList = res.data.list;
    });
    this.$http.get("/getindexgoods").then((res) => {
      this.goodsList = res.data.list;
    });
  },
};
</script>

<style lang="stylus" scoped>
.main
  height 100%
  width 100%
  display flex
  flex-direction column
  overflow hidden
  .mainContent
    width 100%
    flex 1
    overflow-y auto
.banner
  height 2.38rem
  width 100%
  img
    height 2.38rem
    width 100%
.menu
  height 1.8rem
  width 100%
  ul
    display flex
    height 1.8rem
    width 100%
    border-bottom 1px solid #ececec
    li
      text-align center
      flex 1
      span
        margin 0.2rem 0 0 0
        font-size 0.65rem
        display block
      i
        display block
        color #6e6e6e
.goodsTab
  margin 0.2rem 0 0 0
  width 100%
  .goodsTabTop
    width 100%
    height 0.7rem
    .goodsTabTopContent
      width 90%
      height 100%
      display flex
      margin 0 0 0 5%
      li
        flex 1
        text-align center
        line-height 0.7rem
        color #333333
        border 1px solid #d0d0d0
        border-right none
        &.active
          color #ffffff
          background-color #f26b11
        &:nth-child(3)
          border-right 1px solid #d0d0d0
  .goodsTabList
    width 100%
    ul
      padding 0 0 0 10%
      width 100%
      li
        margin 0.34rem 0 0 0
        border 0.01rem solid #eeeeee
        box-shadow 0 0 0.1rem 0.06rem #eeeeee
        height 2.99rem
        width 90%
        overflow hidden
        display flex
        .imgWarp
          width 3rem
          height 100%
          text-align center
          img
            width 2.18rem
            height 100%
        .goodsInf
          flex 1
          display flex
          flex-direction column
          justify-content space-between
          padding 0.4rem 0
          .goodsTitle
            font-size 0.28rem
          .goodsPrice
            font-size 0.24rem
            color #e33d49
          .goodsCount
            font-size 0.2rem
            color #666666
          .goodsBuy
            height 0.52rem
            width 1.65rem
            border-radius 0.05rem
            background-color #f26b11
            color #ffffff
            text-align center
            line-height 0.52rem
</style>