<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  },
}
</script>

<style lang="stylus">

html,body,#app
    height 100%
    width 100%
    overflow hidden

</style>