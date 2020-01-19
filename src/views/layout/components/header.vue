<!--
 * @Description: header
 * @Author: lixianying
 * @Date: 2020-01-13
 -->
<template>
<section class="music-header">
  <div class="left"></div>
  <div class="right">
    <ul class="page-btns">
      <li class="btn-item" v-for="item in pageBtns" :key="item.path">
        <router-link class="btn-link" :to="item.path">
          {{item.meta.title}}
        </router-link>
      </li>
    </ul>
    <div class="right-right">
      <el-input size="small" placeholder="搜索" prefix-icon="el-icon-search"></el-input>
      <ul class="system-btns">
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      systemBtns: []
    };
  },
  computed: {
    ...mapGetters(["pageBtns"])
  }
};
</script>

<style lang="scss">
.music-header {
  display: flex;
  height: 50px;
  background-color: $mainColor;

  .left {
    width: $sideBarWidth;
  }

  .right {
    display: flex;
    padding-right: 10px;
    width: $contentWidth;
    justify-content: space-between;
    align-items: center;

    .btn-link{
      color: #e5e5e5;
      font-weight: $baseFontWeight;

      &:hover{
        color: #ffffff;
      }

      &.router-link-active {
        color: #ffffff;
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
