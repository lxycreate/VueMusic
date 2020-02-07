<!--
 * @Description: 布局
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="layout">
  <music-header></music-header>
  <!-- 此处渲染main_content或no_sidebar_content的内容 -->
  <!-- main_content和no_sidebar_content渲染page_content的内容 -->
  <router-view></router-view>
  <music-footer></music-footer>
</div>
</template>

<script>
import MusicHeader from "./components/header";
import MusicFooter from "./components/footer";
export default {
  components: {
    MusicHeader,
    MusicFooter
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
}
</style>
