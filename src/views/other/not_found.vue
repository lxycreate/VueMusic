<!--
 * @Description: 404
 * @Author: lixianying
 * @Date: 2019-11-27
 -->
<template>
<div class="not-found">内容不存在</div>
</template>

<script>
import {
  mapActions
} from "vuex"
export default {
  mounted() {
    this.setPageBtnsAction([]);
  },
  methods: {
    ...mapActions(["setPageBtnsAction"]),
  },
}
</script>

<style lang="scss">
.not-found {
  padding-top: 30px;
  text-align: center;
}
</style>
