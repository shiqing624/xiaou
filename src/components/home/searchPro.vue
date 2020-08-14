<template>
  <div class="searchPro">
   <Head>
      <div slot="left" class="headerLeft">
        <span class="iconfont icon-jiantouzuo"></span>
      </div>
      <div slot="middle" class="headerMiddleTitle">
        <img src="@/assets/logo.jpg"/>
      </div>
    </Head>
    <div class="searchProList">
        <div class="searchProInp">
          <input type="text" @click="fun" />
        </div>
        <ul>
          <li>
            <div class="proImg">
              <img src alt />
            </div>
            <div class="proInf">
                <p></p>
                <span></span>
                <i></i>
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
    
    }
  },
  components: {
    Head,
  },
  props:['goodsList'],
  methods:{
    fun(){
      console.log(this.goosList)
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="stylus" scoped></style>