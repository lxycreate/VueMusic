<!--
 * @Description: 导航
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="sidebar">
  <el-menu>
    <el-menu-item v-for="item in routes" :key="item.path" :class="{'hidden':item.meta.hidden}" @click="updatePageBtns(item.children)">
      <router-link :to="item.path" v-if="!item.meta.hidden">
        {{item.meta.title}}
      </router-link>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import {
  mapActions
} from "vuex"
export default {
  data() {
    return {
      sideBtns: [],
      pageBtnsCache: {}
    }
  },
  computed: {
    routes() {
      // 侧边导航
      return getRouteChildren('/mainpage', this.$router.options.routes);
    }
  },
  mounted() {
    this.loadPageBtns();
  },
  methods: {
    ...mapActions(["setPageBtnsAction"]),
    loadPageBtns() {
      let tempBtns = [];
      if (this.$route.meta) {
        // 有子路由
        if (this.$route.meta.hasBtn) {
          tempBtns = [...this.routes.filter(item => item.path === this.$route.path)[0].children];
        }
        // 有父路由
        else if (this.$route.meta.hasParent) {
          let parentPath = this.$route.matched[this.$route.matched.length - 1].parent.path;
          tempBtns = [...getRouteChildren(parentPath, this.$router.options.routes)]
        }
      }
      this.updatePageBtns(tempBtns);
    },
    updatePageBtns(btns = []) {
      this.setPageBtnsAction(btns);
    }
  },
}

// 获取路由的子路由按钮
function getRouteChildren(path, routeConfig) {
  if (Array.isArray(routeConfig)) {
    let tempLen = routeConfig.length;
    for (let i = 0; i < tempLen; ++i) {
      let temp = routeConfig[i];
      if (temp.path === path) {
        return temp.children || [];
      } else if (temp.children) {
        return getRouteChildren(path, temp.children);
      }
    }
  } else {
    return [];
  }
}
</script>

<style lang="scss">
.sidebar {
  width: $sideBarWidth;

  .el-menu {
    height: 100%;
    overflow: auto;
    border: none;
    background-color: $sideBarBg;

    .el-menu-item {
      margin: 0;
      padding: 0 !important;

      &.hidden {
        display: none;
      }

      a {
        display: block;
        color: $baseTxtColor;
      }

      .router-link-active {
        color: $mainColor;
        background-color: rgba($mainColor, 0.1);
      }
    }
  }
}
</style>
