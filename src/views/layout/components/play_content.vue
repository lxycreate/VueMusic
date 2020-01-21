<!--
 * @Description: 播放组件
 * @Author: lixianying
 * @Date: 2020-01-19
 -->
<template>
<section class="play-content">
  <router-view></router-view>
  <!-- <search-history></search-history> -->
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
.play-content {
  position: relative;
  height: calc(100% - 110px);
}
</style>
