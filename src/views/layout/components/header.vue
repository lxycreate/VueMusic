<!--
 * @Description: header
 * @Author: lixianying
 * @Date: 2020-01-13
 -->
<template>
<section class="music-header">
  <div class="left"></div>
  <div class="right">
    <ul class="page-btns"></ul>
    <div class="right-right">
      <a-input-search placeholder="搜索" />
      <ul class="system-btns"></ul>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      systemBtns: []
    }
  }
}
</script>

<style lang="scss">
.music-header {
  display: flex;
  height: 50px;
  padding: 0 10px;
  background-color: $mainColor;

  .left {
    width: $sideBarWidth;
  }

  .right {
    display: flex;
    width: $contentWidth;
    justify-content: center;
    align-items: center;

    .system-btns{
      display: inline-block;
    }

    .ant-input-search{
      width: auto;
    }

    .ant-input{
      border: none;
    }
  }
}
</style>
