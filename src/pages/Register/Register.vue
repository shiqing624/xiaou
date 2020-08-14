<template>
  <div class="register">
    
    <label for="username">用户名：</label>
        <input type="text" name="username" id="username" v-model="username">
        <br>
        <br>
        <label for="pwd">密&#8195;码：</label>
        <input type="password" name="pwd" id="pwd" v-model="pwd">
        <br>
        <br>
        <label for="tel">手机号：</label>
        <input type="text" name="tel" id="tel" v-model="tel">
        <br>
        <br>
        <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:"",
      pwd:"",
      tel:"",
      userIf:""
    }
  },
  methods: {
    register(){
      this.$http.post("/register",{
        phone:this.tel,
        nickname:this.username,
        password:this.pwd
      }).then(res=>{
        // console.log(res);
      
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
.register
    text-align center
    margin 3rem 0 0 0
    input 
        height .38rem
        width 3rem
        border 1px solid #ccc
        outline none 
    button 
        height .5rem
        width 1rem
        background #f26b11
        color #fff
</style>