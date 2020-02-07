<template>
<footer class="music-footer" @click="closeSearchPanelEvent"></footer>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['showSearchPanel']),
  },
  methods: {
    ...mapActions(['setShowSearchPanelAction']),
    closeSearchPanelEvent() {
      if (this.showSearchPanel) {
        this.setShowSearchPanelAction(false);
      }
    }
  }
}
</script>

<style lang="scss">
.music-footer {
  width: 100%;
  height: 60px;
  background-color: $mainColor;
}
</style>
