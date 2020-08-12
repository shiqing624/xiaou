<template>
  <div id="app">
    <!-- <router-view/> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  mounted() {
    console.log(1);
    axios.get('/api/list').then(data=>{
      console.log(data);
    })
  },
}
</script>

<style>

</style>
