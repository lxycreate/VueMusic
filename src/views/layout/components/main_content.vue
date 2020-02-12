<!--
 * @Description: 侧边导航-页面
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<section class="main-content">
  <side-bar></side-bar>
  <section class="page-container">
    <el-scrollbar class="jsPageScroll" ref="jsPageScroll">
      <keep-alive :include="keepAliveArr" :max="10">
        <router-view></router-view>
      </keep-alive>
    </el-scrollbar>
  </section>
  <search-history></search-history>
</section>
</template>

<script>
import SideBar from "./sidebar";
import SearchHistory from "./search_history";
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  components: {
    SideBar,
    SearchHistory
  },
  computed: {
    ...mapGetters(['keepAliveArr'])
  },
  mounted() {
    this.setJsPageScrollAction(this.$refs.jsPageScroll);
  },
  methods: {
    ...mapActions(['setJsPageScrollAction'])
  }
}
</script>

<style lang="scss">
.main-content {
  position: relative;
  display: flex;
  height: $bodyHeight;

  .page-container {
    width: $contentWidth;
    // height: 100%;
    overflow: auto;
  }

  .el-scrollbar {
    height: 100%;
  }

  .el-scrollbar__view {
    padding: 0 20px;
  }
}
</style>
