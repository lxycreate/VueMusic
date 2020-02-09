<!--
 * @Description: 页面内容
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<div class="page-content">
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive">
  </router-view>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
</style>
