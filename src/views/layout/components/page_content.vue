<!--
 * @Description: 页面内容
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<div class="page-content">
  <keep-alive :include="keepAliveArr">
    <router-view></router-view>
  </keep-alive>
  <!-- <router-view></router-view> -->
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['keepAliveArr'])
  }
}
</script>

<style lang="scss">
</style>
