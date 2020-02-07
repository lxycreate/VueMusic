<!--
 * @Description: 侧边导航-页面
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<section class="main-content">
  <side-bar></side-bar>
  <section class="page-container">
    <el-scrollbar>
      <router-view></router-view>
    </el-scrollbar>
  </section>
  <search-history></search-history>
</section>
</template>

<script>
import SideBar from "./sidebar";
import SearchHistory from "./search_history";

export default {
  components: {
    SideBar,
    SearchHistory
  }
}
</script>

<style lang="scss">
.main-content {
  position: relative;
  display: flex;
  height: calc(100% - 110px);

  .page-container {
    width: $contentWidth;
    height: 100%;
    overflow: auto;
  }

  .el-scrollbar__wrap {
    padding: 0 20px;
  }
}
</style>
