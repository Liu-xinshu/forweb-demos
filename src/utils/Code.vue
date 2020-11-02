<template>
  <div class="code">
    <div class="btns">
      <el-button size="small" type="primary" @click.native="run"
        >运行</el-button
      >
      <el-button size="small" type="primary" @click.native="copy"
        >copy</el-button
      >
    </div>
    <div class="comtent">
      <div class="left" ref="code"></div>
      <div class="right" ref="right"></div>
    </div>
  </div>
</template>
<script>
import * as monaco from "monaco-editor";
import request from "../../utils/request";
export default {
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // 销毁实例
        this.monacoInstance.dispose();
        this.init();
        console.log(this.monacoInstance);
      },
      // 深度观察监听
      deep: true,
    },
  },
  data() {
    return {
      html: ``,
      fileName: "",
      monacoInstance: undefined,
    };
  },
  methods: {
    run() {
      this.appendFrame(this.html);
    },
    copy() {
      let textArea = document.createElement("textarea");
      textArea.value = this.html;
      textArea.style.display = "none";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      this.$message.success("复制成功");
    },
    appendFrame(code = null) {
      this.$refs.right.innerHTML = "";
      if (!code) return this.$message.error("code is required");
      let iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.name = "frame";
      iframe.setAttribute("frameborder", "0");
      this.$refs.right.appendChild(iframe);
      let win = top.frames["frame"];
      win.document.open();
      win.document.write(code);
      win.document.close();
      console.log(win.document);
    },
    init() {
      let fileName = this.$route.query.fileName;
      if (!fileName)
        return (
          this.$router.back(),
          this.$message({
            message: "缺少路由参数！！！",
          })
        );

      this.fileName = fileName;
      let fram = window.frames["fram"];
      request.get(`${this.fileName}.html`).then((html) => {
        this.html = html;
        this.appendFrame(html);
        this.monacoInstance = monaco.editor.create(this.$refs.code, {
          value: [html].join("\n"),
          language: "html",
          theme: "vs-dark",
          automaticLayout: true,
        });
        this.monacoInstance.onDidChangeModelContent(() => {
          const newValue = this.monacoInstance.getValue();
          this.html = newValue;
        });
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped lang="scss">
.code {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .btns {
    line-height: 60px;
  }
  .comtent {
    flex: 1;
    display: flex;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
}
</style>
