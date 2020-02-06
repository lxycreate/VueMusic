<!--
 * @Description: 搜索历史
 * @Author: lixianying
 * @Date: 2020-01-20
 -->
<template>
<div class="search-history">
  <el-drawer
    ref="jsDrawer"
    :modal="false"
    :withHeader="false"
    :visible.sync="showPanel"
    :append-to-body="false"
    :modal-append-to-body="false"
    :before-close="closeSearchPanel">
    <span>我来啦!</span>
  </el-drawer>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'
export default {
  data() {
    return {
      showPanel: false
    }
  },
  computed: {
    ...mapGetters(['showSearchPanel'])
  },
  watch: {
    showSearchPanel(val, oldVal) {
      this.showPanel = val;
    }
  },
  methods: {
    ...mapActions(['setShowSearchPanelAction']),
    closeSearchPanel(done) {
      this.setShowSearchPanelAction(false);
      done();
    }
  },
}
</script>

<style lang="scss">
.search-history {
  .el-drawer__wrapper {
    position: absolute;
  }
}
</style>
