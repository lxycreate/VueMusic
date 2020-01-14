<!--
 * @Description: 布局
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="layout">
  <music-header></music-header>
  <section class="sidebar-page">
    <side-bar></side-bar>
    <section class="page-container">page-container</section>
  </section>
  <footer class="player-box">footer</footer>
</div>
</template>

<script>
import MusicHeader from "./components/header";
import SideBar from "./components/sidebar";
export default {
  components: {
    MusicHeader,
    SideBar
  }
}
</script>

<style lang="scss">
.layout {
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 960px;
  max-height: 640px;
  background-color: #f8f8f8;
  border-radius: 3px;
  overflow: hidden; 

  .sidebar-page {
    display: flex;
    height: calc(100% - 110px);
  }

  .player-box {
    width: 100%;
    height: 60px;
    background-color: $mainColor;
  }
}
</style>
