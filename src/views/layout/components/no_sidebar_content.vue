<!--
 * @Description: 页面内容（不带侧边导航的组件）
 * @Author: lixianying
 * @Date: 2020-01-19
 -->
<template>
<section class="no-sidebar-content">
  <el-scrollbar>
    <router-view></router-view>
  </el-scrollbar>
  <search-history></search-history>
</section>
</template>

<script>
import SearchHistory from "./search_history";
export default {
  components: {
    SearchHistory
  }
}
</script>

<style lang="scss">
.no-sidebar-content {
  position: relative;
  height: $bodyHeight;

  .el-scrollbar {
    height: 100%;
  }

  .el-scrollbar__view {
    padding: 0 20px;
  }
}
</style>
