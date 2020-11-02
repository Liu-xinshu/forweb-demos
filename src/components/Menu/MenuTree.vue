<template>
  <fragment>
    <template v-for="(item, index_0) in menus">
      <el-menu-item
        v-if="!item.children || item.children.length == 0"
        :key="index_0"
        :index="item.path ? item.path : item.name"
        @click="handleMenuClick(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <el-submenu
        v-else
        :index="item.path ? item.path : item.name"
        :key="index_0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <menu-tree :menus="item.children"></menu-tree>
      </el-submenu>
    </template>
  </fragment>
</template>
<script>
export default {
  name: "MenuTree",
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleMenuClick(obj) {
      let { fileName, children, path, vueName } = obj;

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
