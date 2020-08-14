<template>
  <div class="searchPro">
    <Head>
      <div slot="left" class="headerLeft">
        <span class="iconfont icon-jiantouzuo"></span>
      </div>
      <div slot="middle" class="headerMiddleTitle">
        <img src="@/assets/logo.jpg" />
      </div>
    </Head>
    <div class="searchProList">
      <div class="searchProInp">
        <input type="text" @keydown.13="fun" :placeholder="icon+' 搜索商品'" class="iconfont"  v-model="val"/>
      </div>
      <ul>
        <li v-for="item in goodsList" :key="item.id" @click="detail(item.id)">
          <div class="proImg">
            <img :src="'http://localhost:3000'+item.img" :alt="item.id" />
          </div>
          <div class="proInf">
            <p>{{item.goodsname}}</p>
            <span>￥{{item.price}}</span>
            <i>1888条评论</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from "../common/header";
export default {
  data() {
    return {
      icon: "\ue63f",
      goodsList:[],
      val:""
    };
  },
  components: {
    Head,
  },
  methods: {
    fun() {
      this.$http.get("/getgoods?keyword="+this.val).then(res=>{
        this.goodsList = res.data.list
      })
    },
    detail(i){
      console.log(this.goodsList);
      this.$router.push("/detail?id="+i)
    }
  },
  watch:{
    val(){
       this.$http.get("/getgoods?keyword="+this.val).then(res=>{
        this.goodsList = res.data.list
      })
    }
  },
  mounted() {
    let id = this.$route.query.fid
       this.$http.get("/getgoods?" + id).then((res) => {
        this.goodsList = res.data.list
    });
  },
};
</script>

<style lang="stylus" scoped>
.searchPro
  height 100%
  width 100%
  .searchProList
    height 100%
    width 100%
    display flex
    flex-direction column
    .searchProInp
      position relative
      text-align center
      input
        margin 0.24rem 0 0.3rem 0
        background-color #f26b11
        outline none
        border-radius 0.5rem
        text-align center
        height 0.76rem
        width 6.28rem
        color #ffffff
        &::placeholder
          color #fff
    ul
      flex 1
      width 100%
      padding 0 0 1.5rem 0
      overflow-y auto
      li
        display flex
        border-bottom: 1px solid #d1d1d1
        padding .28rem 0
        .proImg
          margin 0 .2rem 0 .30rem
          img 
            width 1.55rem
            height 1.55rem
</style>