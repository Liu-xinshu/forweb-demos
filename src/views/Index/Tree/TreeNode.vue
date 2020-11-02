<template>
  <div class="tree-wrap">
    <div v-for="item in treeNodes" :key="item.id">
      <div class="item"></div>
      <span class="label">{{ item.label }}</span>
      <tree-node
        v-for="node in item.children"
        :key="node.id"
        :treeNodes="item.children"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "TreeNode",
  props: {
    treeNodes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped lang="scss"></style>
