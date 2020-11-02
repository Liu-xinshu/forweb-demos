<template>
  <div class="Tabs">
    <div class="tabs-wrap">
      <el-tag
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ active: index === curIndex }"
        :id="`tabsId${index}`"
        effect="dark"
        closable
        size="medium"
        @click="handleTabClick(item, index)"
        @close="handleTabClose(index)"
        >{{ item.name }}</el-tag
      >
    </div>

    <div class="btn-drapdown">
      <el-dropdown
        size="mini"
        split-button
        type="primary"
        @command="handleCommand"
      >
        标签选项
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { findTabName } from "../utils/findTabName";
import { findVueName } from "../utils/findVueName";
export default {
  name: "Tabs",
  watch: {
    $route: {
      handler: function(val, oldVal) {
        let { fileName, vueName } = val.query;
        let obj = {};
        if (fileName) {
          // 示例程序
          obj.to = {
            path: "/Code",
            query: {
              fileName,
            },
          };
          obj.name = findTabName(fileName);
        } else if (vueName) {
          // vue示例程序
          obj.to = {
            path: "/vuep",
            query: {
              vueName,
            },
          };
          obj.name = findVueName(vueName);
        } else {
          obj.to = {
            path: val.path,
          };
          obj.name = val.meta.title;
        }
        let index = this.tabs.findIndex((item) => item.name === obj.name);

        if (index > -1) {
          this.curIndex = index;
        } else {
          if (obj.name) {
            // 标签最多添加八个
            if (this.tabs.length > 8) {
              this.tabs.shift();
            }
            this.tabs.push(obj);
            this.curIndex = this.tabs.length - 1;
          }
        }
      },
      // 深度观察监听
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      tabs: [],
      curIndex: -1,
    };
  },
  methods: {
    handleTabClick(obj, index) {
      this.$router.push({ ...obj.to }).catch(() => {});
    },
    handleTabClose(index) {
      let cur = this.tabs[this.curIndex];
      this.tabs.splice(index, 1);
      if (index === this.curIndex) {
        this.curIndex = this.tabs.length > 0 ? this.tabs.length - 1 : -1;
      } else {
        // 处理删除后高亮的问题
        this.curIndex = this.tabs.findIndex((item) => item.name === cur.name);
      }
      // length 为零 返回首页
      if (this.tabs.length <= 0) {
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },
    handleCommand(v) {
      if (v === "other") {
        this.tabs = this.tabs.filter((item, index) => index === this.curIndex);
        this.curIndex = 0;
      } else if (v === "all") {
        this.tabs.length = 0;
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },
  },
};
</script>
<style lang="scss">
.Tabs {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;

  .tabs-wrap {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .el-tag:not(:first-child) {
    margin-left: 10px;
  }
  .el-tag--dark {
    border-color: #e9eaec;
    background: white;
    color: #666;
    i {
      color: #666 !important;
      &:hover {
        background: transparent;
      }
    }
    &.active {
      background-color: #409eff;
      border-color: #409eff;
      color: white;
      & > i {
        color: white !important;
      }
    }
  }
}
</style>
