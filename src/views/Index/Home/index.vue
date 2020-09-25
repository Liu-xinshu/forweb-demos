<template>
  <video ref="video" class="video-comp" autoplay controls loop></video>
</template>
<script>
export default {
   name: 'Home',
   data() {
       return {
         
       }
   },
   mounted() {
     let a = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
   
       this.$refs.video.src = a;
   }
}
</script>
<style scoped lang = 'scss'>
</style>
