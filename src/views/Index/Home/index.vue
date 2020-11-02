<template>
  <!-- <video ref="video" class="video-comp" autoplay controls loop></video> -->
  <div>
    <scroll autoplay />
  </div>
</template>
<script>
import scroll from "../InvisibleScrollBar";
export default {
  name: "Home",
  components: {
    scroll,
  },
  data() {
    return {};
  },
  mounted() {
    // let a = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    // this.$refs.video.src = a;
  },
};
</script>
<style scoped lang="scss"></style>
