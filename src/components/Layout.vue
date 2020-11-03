<template>
  <div class="root-container">
    <el-container>
      <el-header>
        <div class="collapse" @click="handleCollapseClick">
          <span class="el-icon-s-fold" v-if="collapse"></span
          ><span class="el-icon-s-unfold" v-else></span>
        </div>
        <div class="logo">案例集合</div>
        <div class="userInfo">
          <el-avatar
            :size="50"
            src="https://lin-xin.gitee.io/example/work/static/img/img.146655c9.jpg"
          ></el-avatar>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="" command="drop-out"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="auto"><Menu :menus="menus" ref="menu"/></el-aside>
        <el-main>
          <Tabs />
          <router-view></router-view
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "./Menu";
import Tabs from "./Tabs";
export default {
  name: "Layout",
  components: {
    Menu,
    Tabs,
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    tabs: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      collapse: true,
    };
  },

  methods: {
    handleCollapseClick() {
      this.collapse = !this.collapse;
      this.$refs.menu.changeIsCollapse();
    },
    handleCommand(v) {
      // 退出系统
      if (v === "drop-out") {
        sessionStorage.removeItem("token");
        location.reload();
      }
    },
  },
};
</script>
<style scoped lang="scss">
.root-container {
  width: 100%;
  height: 100%;
}
.el-container {
  color: #333;
  height: 100%;
}
.el-header {
  line-height: 70px;
  background: #242f42;
  color: white;
  font-size: 22px;
  clear: both;
  padding: 0 !important;
  height: 70px !important;
  .collapse {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    width: 250px;
    text-align: left;
  }
  .userInfo {
    height: 70px;
    float: right;
    margin-right: 50px;
    display: flex;
    align-items: center;
    /deep/.el-dropdown {
      margin-left: 10px;
      .el-dropdown-link {
        font-size: 14px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
.el-aside {
  text-align: center;
  line-height: 200px;
  background-color: rgb(50, 65, 87);
  height: calc(100vh - 70px);
}

.el-main {
  color: #333;
  text-align: left;
  height: calc(100vh - 70px);
  background: #f0f0f0;
}
</style>
