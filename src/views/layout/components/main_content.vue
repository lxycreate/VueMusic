<!--
 * @Description: 侧边导航-页面
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<section class="main-content">
  <side-bar></side-bar>
  <section class="page-container">
    <router-view></router-view>
  </section>
</section>
</template>

<script>
import SideBar from "./sidebar";

export default {
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
.main-content {
  display: flex;
  height: calc(100% - 110px);
}
</style>
