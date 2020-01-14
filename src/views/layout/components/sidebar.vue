<!--
 * @Description: 导航
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="sidebar">
  <a-menu>
    <a-menu-item v-for="item in routes" :key="item.path">
      <router-link :to="item.path">
        {{item.meta.title}}
      </router-link>
    </a-menu-item>
  </a-menu>
</div>
</template>

<script>
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
  mounted() {}
}
</script>

<style lang="scss">
.sidebar {
  width: $sideBarWidth;

  .ant-menu {
    height: 100%;
    overflow: auto;
    border: none;
    background-color: $sideBarBg;

    .ant-menu-item {
      margin: 0;
      padding: 0;
      background-color: transparent;
    }
  }

  .router-link-active {
    color: $mainColor;
    background-color: rgba($mainColor, 0.1);
  }
}
</style>
