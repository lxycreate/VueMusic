<!--
 * @Description: header
 * @Author: lixianying
 * @Date: 2020-01-13
 -->
<template>
<section class="music-header" @click="closeSearchPanelEvent">
  <div class="left">
    <el-button type="text" icon="el-icon-arrow-left" :disabled="currentIndex===1" @click="prePage"></el-button>
    <el-button type="text" icon="el-icon-arrow-right" :disabled="currentIndex===historyLength" @click="nextPage"></el-button>
  </div>
  <div class="right">
    <ul class="page-btns">
      <li class="btn-item" v-for="item in pageBtns" :key="item.path">
        <router-link class="btn-link" :to="item.path" v-if="!item.meta.hidden">
          {{item.meta.title}}
        </router-link>
      </li>
    </ul>
    <div class="right-right">
      <el-input
        ref="jsSearch"
        size="mini"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        @click.native="showSearchPanelEvent"></el-input>
    </div>
  </div>
</section>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      iconObj: {},
      inputObj: {}
    }
  },
  computed: {
    ...mapGetters(["pageBtns", 'currentIndex', 'historyLength', 'history', 'showSearchPanel'])
  },
  mounted() {
    this.iconObj = this.$refs.jsSearch.$el.getElementsByClassName('el-input__icon')[0];
    this.inputObj = this.$refs.jsSearch.$el.getElementsByClassName('el-input__inner')[0];
  },
  methods: {
    ...mapActions(['setCutFlagAction', 'setCurrentIndexAction', 'setRecordFlagAction', 'setBrowserEventFlagAction', 'setShowSearchPanelAction']),
    prePage() {
      if (this.currentIndex > 1) {
        this.setCutFlagAction(true);
        this.setRecordFlagAction(false);
        this.setCurrentIndexAction(this.currentIndex - 1);
        this.$router.go(-1);
      }
    },
    nextPage() {
      if (this.currentIndex < this.historyLength) {
        this.setCutFlagAction(true);
        this.setRecordFlagAction(false);
        this.setCurrentIndexAction(this.currentIndex + 1);
        this.$router.go(1);
      }
    },
    showSearchPanelEvent() {
      this.setShowSearchPanelAction(true);
    },
    closeSearchPanelEvent() {
      if (this.showSearchPanel && event.target !== this.iconObj && event.target !== this.inputObj) {
        this.setShowSearchPanelAction(false);
      }
    }
  },
};
</script>

<style lang="scss">
.music-header {
  display: flex;
  height: 50px;
  background-color: $mainColor;

  .left {
    display: flex;
    width: $sideBarWidth;
    justify-content: center;

    .el-button {
      color: $lightTxtColor;

      &.is-disabled {
        color: rgba($lightTxtColor, 0.6);
      }
    }
  }

  .right {
    display: flex;
    padding-right: 10px;
    width: $contentWidth;
    justify-content: space-between;
    align-items: center;

    .btn-link {
      color: #e5e5e5;

      &:hover {
        color: #ffffff;
      }

      &.router-link-active {
        color: #ffffff;
      }
    }

    .page-btns {
      display: flex;
    }

    .btn-item {
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }

    .system-btns {
      display: inline-block;
    }

    .el-input__inner {
      border: none;
    }
  }
}
</style>
