<template>
  <div class="tree-wrap"> 
    <tree-node :treeNodes="list" />
  </div>
</template>
<script>
import Vue from "vue";
import TreeNode from "./TreeNode";
Vue.component(TreeNode.name,TreeNode);

export default {
  name: "Tree",
 
  data() {
    return {
      list: [
        {
          id: "1",
          label: "1",
        },
        {
          id: "2",
          label: "2",
        },
        {
          id: "3",
          label: "3",
        },
        {
          id: "4",
          label: "4",
          children: [
            {
              id: "1-1",
              label: "1-1",
            },
            {
              id: "1-2",
              label: "1-2",
            },
            {
              id: "1-3",
              label: "1-3",
            },
            {
              id: "1-4",
              label: "1-4",
              children: [
                {
                  id: "1-1-1",
                  label: "1-1-1",
                },
                {
                  id: "1-1-2",
                  label: "1-1-2",
                },
                {
                  id: "1-1-3",
                  label: "1-1-3",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.tree-wrap {
}
</style>
