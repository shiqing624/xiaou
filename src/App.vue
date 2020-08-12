<template>
  <div id="app">
    <router-view/>
    <h2>张三</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      list:[1,23]
    }
  }
}
</script>

<style>

</style>
