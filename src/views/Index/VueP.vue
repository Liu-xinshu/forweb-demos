<template>
  <div class="vuep">
    <vuep v-model="template"></vuep>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // 销毁实例
        let vueName = this.$route.query.vueName;
        if (!vueName)
          return (
            this.$router.back(),
            this.$message({
              message: "缺少路由参数！！！",
            })
          );
        this.vueName = vueName;
        this.init();
      },
      // 深度观察监听
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      template: ``,
      vueName: "",
    };
  },
  methods: {
    init() {
      request(`/static/vueDemos/${this.vueName}.vue`).then((template) => {
        if (template) {
          this.template = template;
        } else {
          this.$message.error("获取示例代码失败,请检查文件路径!!!");
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.vuep {
  width: 100%;
  height: 100%;
}
</style>
