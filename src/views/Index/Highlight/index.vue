<!--
 * @文件描述: 代码高亮 示例程序
 * @创建人: 刘新书
 * @创建时间: 2020-10-26 10:08:39
 * @最后一次修改时间: 2020-10-30 09:14:21
-->
<template>
  <div class="highlight" v-html="html"></div>
</template>
<script>
import request from "@/utils/request";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  name: "highlight",
  data() {
    return {
      html: "",
    };
  },
  mounted() {
    request.get(`create3d.html`).then((html) => {
      this.html = Prism.highlight(html, Prism.languages.html, "html");
    });
  },
};
</script>
