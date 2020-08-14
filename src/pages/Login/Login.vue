<template>
  <div class="login">
    <label for="tel">手机号：</label>
    <input type="text" name="tel" id="tel" v-model="tel" />
    <br />
    <br />
    <label for="pwd">密&#8195;码：</label>
    <input type="password" name="pwd" id="pwd" v-model="pwd" />
    <br />
    <br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      this.$http.post("/login", {
        phone: this.tel,
        password: this.pwd,
      }).then(res=>{
          localStorage.setItem("token",res.data.list.token)
          this.$router.push("/home/index?uid="+res.data.list.uid)
      })
    },
  },
};
</script>

<style lang="stylus" scoped>
.login
  text-align center
  margin 3rem 0 0 0
  input
    height 0.38rem
    width 3rem
    border 1px solid #ccc
    outline none
  button
    height 0.5rem
    width 1rem
    background #f26b11
    color #fff
</style>