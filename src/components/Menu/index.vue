<template>
  <div class="whr-side-menu">
    <el-menu
      background-color="rgb(50, 65, 87)"
      text-color="rgb(191, 203, 217)"
      active-text-color="rgb(32, 160, 255)"
      unique-opened
      :default-active="defaultActive"
      :collapse="isCollapse"
    >
      <menu-tree :menus="menus" :handleMenuClick="handleMenuClick"></menu-tree>
    </el-menu>
  </div>
</template>
<script>
import Vue from "vue";
import Fragment from "vue-fragment";
import MenuTree from "./MenuTree";
Vue.component(MenuTree.name, MenuTree);
Vue.use(Fragment.Plugin);
export default {
  name: "Menu",
  props: {
    menus: {
      type: Array,
      default: null,
    },
  },
  computed: {
    defaultActive() {
      let { fileName, vueName } = this.$route.query;
      if (fileName) {
        return "/" + fileName;
      } else if (vueName) {
        return "/" + vueName;
      } else {
        return this.$route.path;
      }
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleMenuClick(obj) {
      let { fileName, children, path, vueName, parentName } = obj;

      if (!children || children.length <= 0) {
        if (fileName) {
          this.$router
            .push({
              path: "Code",
              query: {
                fileName,
              },
            })
            .catch((err) => {});
        } else if (vueName) {
          this.$router
            .push({
              path: "/vuep",
              query: {
                vueName,
              },
            })
            .catch((err) => {});
        } else {
          this.$router.push({ path }).catch((err) => {});
        }
      }
    },
  },
};
</script>
<style>
.el-menu {
  border-right: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.el-menu-item,
.el-submenu__title {
  text-align: left;
}
.el-menu-item:hover {
  background: rgb(40, 52, 70) !important;
}
.el-submenu__title:hover {
  background: rgb(40, 52, 70) !important;
}
</style>
