<!--
 * @Description: 导航
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="sidebar">
  <a-menu></a-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      sideBtns: []
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  width: $sideBarWidth;

  .ant-menu {
    height: 100%;
    overflow: auto;
  }
}
</style>
