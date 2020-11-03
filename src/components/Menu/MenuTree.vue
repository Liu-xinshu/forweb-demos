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
        <menu-tree
          :menus="item.children"
          :handleMenuClick="handleMenuClick"
        ></menu-tree>
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
    handleMenuClick: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },
};
</script>
