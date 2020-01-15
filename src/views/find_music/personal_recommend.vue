<!--
 * @Description: 个性推荐
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<div class="personal-recommend">
  <!-- 推荐歌单 -->
  <div class="recommend-play-list">
    <span class="title">推荐歌单</span>
    <ul class="play-list">
      <li class="list-item" v-for="item in recPlayList" :key="item.id">
        <span class="img-box">
          <span class="play-count">
            
          </span>
          <img class="img" :src="item.picUrl" />
        </span>
        <span class="name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {
  ajaxGetRecPlayList
} from "@/api/find_music";
export default {
  data() {
    return {
      // 推荐歌单
      recPlayList: []
    }
  },
  created() {
    this.getRecPlayList();
  },
  methods: {
    getRecPlayList() {
      ajaxGetRecPlayList({
        params: {
          limit: 10
        }
      }).then(res => {
        if (res && res.result) {
          this.recPlayList = res.result;
        }
      }, res => {})
    }
  },
}
</script>

<style lang="scss">
.personal-recommend {
  margin-top: 20px;

  .title {
    display: block;
    color: $baseTxtColor;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    line-height: 1;
  }

  .play-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: space-between;

    .list-item {
      width: 19%;
    }

    .img-box {
      position: relative;
      display: block;
      border-radius: 3px;
      overflow: hidden;
    }

    .img {
      width: 100%;
    }

    .name {
      display: block;
      margin-top: 5px;
      font-weight: 500;
      text-align: left;
      color: $baseTxtColor;

      &:hover {
        cursor: pointer;
        color: $baseTxtActiveColor;
      }
    }
  }
}
</style>
