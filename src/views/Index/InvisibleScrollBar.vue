<!--
 * @文件描述: 隐形滚动条
 * @创建人: 刘新书
 * @创建时间: 2020-10-20 15:32:51
 * @最后一次修改时间: 2020-10-20 15:32:56
-->
<template>
  <div class="scroll-container">
    <div
      :class="[
        'scroll-wrap',
        autoplay && direction == 'left'
          ? 'from-left-start'
          : direction == 'right'
          ? 'from-right-start'
          : '',
      ]"
      ref="scroll-wrap"
    >
      <div class="scroll-content" ref="scroll-content">
        <slot></slot>
        <p>111111111111111111111111111111</p>
        <p>2222222222222222222222222222</p>
        <p>33333333333333333333333333333</p>
        <p>4444444444444444444444444444444</p>
        <p>5555555555555555555555555555</p>
        <p>6666666666666666666666666666</p>
        <p>777777777777777777777777777777</p>
        <p>88888888888888888888888888888888</p>
      </div>
      <div class="scroll-content" ref="scroll-content2"></div>
    </div>
  </div>
</template>
<script>
let timer;
export default {
  name: "scroll",
  props: {
    autoplay: {
      type: Boolean,
    },
    direction: {
      type: String,
      default: "top",
    },
    step: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      dom: undefined,
      domH: undefined,
      domW: undefined,
      curFunc: undefined,
    };
  },
  methods: {
    fromTopStart() {
      let { dom, domH, step } = this;
      if (dom.scrollTop >= domH) {
        dom.scrollTop = 0;
      } else {
        dom.scrollTop++;
      }
    },
    fromBottomStart() {
      let { dom, domH, step } = this;
      if (dom.scrollTop <= 0) {
        dom.scrollTop = dom.scrollHeight - dom.clientHeight;
      } else {
        dom.scrollTop--;
      }
    },
    fromLeftStart() {
      let { dom, domW, step } = this;
      if (dom.scrollLeft <= 0) {
        dom.scrollLeft = dom.scrollWidth - dom.clientWidth;
      } else {
        dom.scrollLeft--;
      }
    },
    fromRightStart() {
      let { dom, domW, step } = this;
      if (dom.scrollLeft >= domW) {
        dom.scrollLeft = 0;
      } else {
        dom.scrollLeft++;
      }
    },
  },
  mounted() {
    let { autoplay, loop, direction, step } = this;
    let that = this;
    let scrollContent = this.$refs["scroll-content"];
    this.dom = this.$refs["scroll-wrap"];
    this.domH = scrollContent.offsetHeight;
    this.domW = scrollContent.offsetWidth;
    this.$refs["scroll-content2"].innerHTML = scrollContent.innerHTML;
    if (direction == "top" || direction == "bottom") {
      this.dom.onscroll = function() {
        if (!timer) {
          if (that.dom.scrollTop >= that.domH) {
            that.dom.scrollTop = 0;
          }
        }
      };
    }
    if (autoplay) {
      switch (direction) {
        case "left":
          this.curFunc = this.fromLeftStart;
          timer = setInterval(this.fromLeftStart, 6 * step);
          break;
        case "bottom":
          this.curFunc = this.fromBottomStart;
          timer = setInterval(this.fromBottomStart, 6 * step);
          break;
        case "right":
          this.curFunc = this.fromRightStart;
          timer = setInterval(this.fromRightStart, 6 * step);
          break;
        default:
          this.curFunc = this.fromTopStart;
          timer = setInterval(this.fromTopStart, 6 * step);
          break;
      }
      this.dom.onmouseover = () => {
        timer = clearInterval(timer);
      };
      this.dom.onmouseout = () => {
        timer = setInterval(this.curFunc, 6 * step);
      };
    }
  },
  beforeDestroy() {
    timer = clearInterval(timer);
  },
};
</script>
<style scoped lang="scss">
.scroll-container {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  padding-top: 10px;
  .scroll-wrap {
    width: calc(100% + 18px);
    height: 100%;
    overflow-y: auto;
    &.from-left-start,
    &.from-right-start {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      background: turquoise;
      height: calc(100% + 18px);
    }
    &::-webkit-scrollbar {
      width: 18px;
      height: 18px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
      background: transparent;
    }
  }
  .scroll-content {
    text-align: right;
  }
  p {
    &:nth-child(even) {
      background: turquoise;
    }
    &:nth-child(odd) {
      background: red;
    }
  }
}
</style>
