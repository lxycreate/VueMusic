<!--
 * @Description: 布局
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="layout">
  <music-header></music-header>
  <router-view></router-view>
  <footer class="player-box"></footer>
</div>
</template>

<script>
import MusicHeader from "./components/header";
import SideBar from "./components/sidebar";
import MainContent from "./components/main_content";
export default {
  components: {
    MusicHeader,
    MainContent
  }
}
</script>

<style lang="scss">
.layout {
  margin: auto;
  width: 960px;
  height: 640px;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  
  .player-box {
    width: 100%;
    height: 60px;
    background-color: $mainColor;
  }
}
</style>
