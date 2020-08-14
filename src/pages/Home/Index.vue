<template>
    <div :is="pathTap">
    </div>
</template>

<script>
import Index from "@/components/home/index"
import SearchPro from "@/components/home/SearchPro"
export default {
        data(){
          return{
            pathTap:"Index"
          }
        },
        components:{
          Index,
          SearchPro
        },
        watch: {
          $route:{
            deep:true,
            handler(){
              if(this.$route.query.fid){
                this.pathTap= "SearchPro"
              }else{
                this.pathTap= "Index"
              }
            },
            immediate:true
          }
        },
    }
</script>

<style lang="stylus" scoped>

</style>