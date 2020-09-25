<!--
 * @文件描述: 滚动字幕
 * @创建人: 刘新书
 * @创建时间: 2020-09-24 18:24:09
-->
<template>
  <canvas id="canvas"></canvas>
</template>
<script>
let timer;
export default {
  name: "ScrollText",
  props: {
    option: {
      type: Object,
      default() {
        return {
          color: "#00FF00",
          size: 32,
          direction: "left",
          step: 2,
          text: "Hello world",
        };
      },
    },
  },
  mounted() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let { color, size, direction, step, text } = this.option;
    let width = canvas.width;
    let height = canvas.height;
    let i = 0;
    if (step > 5) {
      step = 5;
    } else if (step < 0) {
      step = 0;
    }

    switch (direction) {
      case "left":
        timer = setInterval(() => {
          left();
          i++;
          if (i > width) {
            console.log(ctx.measureText(text).width);
            i = -ctx.measureText(text).width;
          }
        }, 50 / step);
        break;
      case "right":
        break;
      case "top":
        break;
      case "bottom":
        break;
    }
    canvas.onmouseenter = (e) => {
      timer = clearInterval(timer);
    };
    canvas.onmouseleave = (e) => {
      timer = setInterval(() => {
        left();
        i++;
        if (i > width) {
          i = -ctx.measureText(text).width;
        }
      }, 50 / step);
    };
    function left() {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.font = `${size}px NUMBER`;
      ctx.fillText(text, i, height / 2 + size / 4);
    }
  },
  beforeDestroy() {
    timer = clearInterval(timer);
  },
};
</script>
<style scoped lang = 'scss'>
#canvas {
  width: 1200px;
  height: 600px;
  zoom: 0.333;
}
</style>
