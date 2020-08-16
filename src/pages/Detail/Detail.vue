<template>
  <div class="detail">
    <Head class="color">
      <div slot="left" class="headerLeft">
        <span class="iconfont icon-jiantouzuo"></span>
      </div>
      <div slot="middle" class="headerMiddleTitle">商品详情</div>
    </Head>
    <div class="detailInf" v-if="goodsList[0]">
      <div class="detailImg">
        <img :src="'http://localhost:3000'+goodsList[0].img" alt />
      </div>
      <div class="detailcontent">
        <h2>{{goodsList[0].goodsname}}</h2>
        <span class="price">￥{{goodsList[0].price}}</span>
      </div>
    </div>
    <div class="detailFooter" v-if="goodsList[0]">
      <div class="goCart" @click="goCart">
        <span class="iconfont icon-gouwuche"></span>
        <i>{{proNum}}</i>
      </div>
      <div is-link @click="showPopup" class="joinCart">加入购物车</div>
      <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
        <h3>商品属性</h3>
        <div class="fristAttr">
          <h3>{{goodsList[0].specsname}}</h3>
          <div class="fristAttrIn">
            <span
              v-for="(item,index) in colorList"
              :key="index"
              :class="{'activePro': num==index}"
              @click="fun(index)"
            >{{item}}</span>
          </div>
        </div>
        <div class="proCount">
          <span @click="jian">-</span>
          <span>{{count}}</span>
          <span @click="jia">+</span>
        </div>
        <div class="deil_btn" @click="isUser">加入购物车</div>
      </van-popup>
      <div class="buyThePro" @click="isUser">立即购买</div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/common/header";
import Vue from "vue";
import { Popup, Toast } from "vant";
Vue.use(Popup);
export default {
  components: {
    Head,
  },
  data() {
    return {
      num: 0,
      goodsList: [],
      show: false,
      colorList: [],
      color:"",
      count: 1,
      proNum:0
    };
  },
  computed:{
    user() {
      return this.$store.state.userInf
    }
  },
  methods: {
    showPopup() {
      this.show = true;
      if (this.goodsList[0].specsattr.indexOf(",")) {
        this.colorList = this.goodsList[0].specsattr.split(",");
      }
      this.color=this.colorList[0]
    },
    fun(i) {
      this.num = i;
      this.color = this.colorList[i]
    },
    jian(){
      this.count--;
      if(this.count<2){
        this.count=1
      }
    },
    jia(){
      this.count++;
    },
    isUser(){
      // console.log(this.user)
      if(this.user.uid){
        if(this.color){
          this.$http.post("/cartadd",{
            uid:this.user.uid,
            goodsid:this.goodsList[0].id,
            count:this.count
          }).then(res=>{
            // console.log(res)
            if(res.data.code==200){
              Toast("添加成功！")
              this.proNum += this.count
              this.show=false
            }
          })
        }else{
          Toast({
            message:"请选择商品规格",
            icon:'fail'
          })
        }
      }
    },
    goCart(){
      this.$router.push("/home/cart")
    }
  },
  mounted() {
    let id = this.$route.query.id;
    this.$http.get("/getgoodsinfo?id=" + id).then((res) => {
      this.goodsList = res.data.list;
      // console.log(this.goodsList);
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
  #f1f1f1, .detailInf
    flex 1
    width 100%
    overflow-y auto
    .detailImg
      background-color #fff
      width 100%
      text-align center
  .detailFooter
    width 100%
    overflow hidden
    height 1.15rem
    margin-top 0.01rem
    background-color #fff
    display flex
    background-color #fff
    line-height 1.15rem
    text-align center
    position relative
    .goCart
      width 1.74rem
      height 100%
    .joinCart
      width 100%
      flex 1
      color #fff
      height 100%
      background-color #f26b11
    .fristAttr
      line-height 1
      text-align left
      padding 0 1rem
      h3
        font-size 0.3rem
      .fristAttrIn
        display flex
        border-bottom 1px solid #d1d1d1
        span
          display block
          height 0.5rem
          width 1rem
          text-align center
          line-height 0.5rem
          border 1px solid #ccc
          margin 0.3rem
          border-radius 0.05rem
    .proCount
      margin 0.3rem 0
      padding 0 1rem 0 3rem
      height 0.5rem
      display flex
      span
        line-height 0.5rem
        flex 1
        display block
        border 1px solid #d1d1d1
    .deil_btn
      position absolute
      bottom 0
      height 1.25rem
      line-height 1.25rem
      background #f26b11
      color #ffffff
      width 100%
      font-size 0.3rem
    .buyThePro
      flex 1
      color #fff
      height 100%
      background-color #e43a3d
.activePro
  background-color #f26b11
  color #fff
  border none
</style>