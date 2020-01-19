<!--
 * @Description: 导航
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="sidebar">
  <el-menu>
    <el-menu-item v-for="item in routes" :key="item.path" :class="{'hidden':item.meta.hidden}" @click="updatePageBtns(item)">
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
      sideBtns: []
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((item) =>
        item.path === "/")[0].children;
    }
  },
  mounted() {
    this.loadPageBtns();
  },
  methods: {
    ...mapActions(["setPageBtnsAction"]),
    loadPageBtns() {
      let routeInfo = undefined;
      if (this.$route.meta.hasBtn) {
        routeInfo = this.routes.filter(item => item.path === this.$route.path)[0];
      } else {
        let parentPath = this.$route.matched[this.$route.matched.length - 1].parent.path;
        routeInfo = this.routes.filter(item => item.path === parentPath)[0];
      }
      this.updatePageBtns(routeInfo);
    },
    updatePageBtns(item) {
      if (item && item.children) {
        this.setPageBtnsAction([...item.children]);
      } else {
        this.setPageBtnsAction([]);
      }
    }
  },
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
        font-weight: $baseFontWeight;
      }

      .router-link-active {
        color: $mainColor;
        background-color: rgba($mainColor, 0.1);
      }
    }
  }
}
</style>
