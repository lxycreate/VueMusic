<!--
 * @Description: 布局
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="layout">
  <music-header></music-header>
  <main-content></main-content>
  <footer class="player-box">footer</footer>
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
  width: 100%;
  height: 100%;
  max-width: 960px;
  max-height: 640px;
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
