<!--
 * @Description: 个性推荐
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<div class="personal-recommend">
  <!-- 轮播 -->
  <div class="carousel-banner">
    <el-carousel :interval="4000" type="card" height="145px">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <div class="img-item">
          <img class="img" :src="item.imageUrl" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

  <!-- 推荐歌单 -->
  <div class="recommend-play-list">
    <!-- 推荐歌单 -->
    <span class="title">推荐歌单</span>
    <ul class="play-list">
      <li class="list-item" v-for="item in recPlayList" :key="item.id">
        <span class="img-box">
          <span class="play-count">
            <i class="icon el-icon-video-play"></i>
            <span class="count-num">{{(item.playCount/10000).toFixed(0)+"万"}}</span>
          </span>
          <img class="img" :src="item.picUrl" />
        </span>
        <span class="label">{{item.name}}</span>
      </li>
    </ul>
  </div>

  <!-- 独家放送 -->
  <div class="exclusive-mv">
    <span class="title">独家放送</span>
    <ul class="mv-list">
      <li class="mv-item" v-for="item in exclusiveList" :key="item.id">
        <a class="img-box" v-if="item.type===19" :href="item.url" target="_blank">
          <i class="icon el-icon-link" />
          <img class="img" :src="item.picUrl" />
          <span class="label">{{item.name}}</span>
        </a>
        <span class="img-box" v-else>
          <i class="icon el-icon-video-play"></i>
          <img class="img" :src="item.picUrl" />
          <span class="label">{{item.name}}</span>
        </span>
      </li>
    </ul>
  </div>
  <!-- 最新专辑 -->
  <div class="new-album">
    <span class="title">最新专辑</span>
  </div>
</div>
</template>

<script>
import {
  ajaxGetRecPlayList,
  ajaxGetExclusiveList,
  ajaxGetNewAlbumList,
  ajaxGetBannerList
} from "@/api/find_music";
export default {
  data() {
    return {
      carouselList: [],
      // 推荐歌单
      recPlayList: [],
      // 独家放送
      exclusiveList: []
    }
  },
  created() {
    this.getBannerList();
    this.getRecPlayList();
    this.getExclusiveList();
    this.getNewAlbumList();
  },
  methods: {
    /**
     * 获取推荐MV 
     */
    getBannerList() {
      ajaxGetBannerList().then(res => {
        if (res && res.banners) {
          this.carouselList = res.banners;
        }
      }, res => {})
    },
    /**
     * 获取推荐歌单
     */
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
    },
    /**
     * 获取独家放送列表 
     */
    getExclusiveList() {
      ajaxGetExclusiveList().then(res => {
        if (res && res.result) {
          this.exclusiveList = res.result;
        }
      }, res => {})
    },

    /**
     * 获取最新专辑 
     */
    getNewAlbumList() {
      ajaxGetNewAlbumList().then(res => {
        console.log(res);
      }, res => {})
    }
  },
}
</script>

<style lang="scss">
.personal-recommend {
  padding-bottom: 20px;

  .title {
    display: block;
    margin-top: 20px;
    color: $baseTxtActiveColor;
    font-size: 16px;
    font-weight: $baseFontWeight;
    text-align: left;
    line-height: 1;
  }

  // 轮播MV
  .carousel-banner {
    margin-top: 20px;

    .img-item {
      border-radius: 3px;
      overflow: hidden;
    }

    .img {
      display: block;
      width: 100%;
    }

    .el-carousel__button {
      margin: 0 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }

  .recommend-play-list {
    .title {
      margin-top: 0px;
    }
  }

  // 歌单
  .play-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .list-item {
      margin-top: 10px;
      width: calc((100% - 40px)/5);
    }

    .img-box {
      position: relative;
      display: block;
      border-radius: 3px;
      overflow: hidden;
    }

    .play-count {
      position: absolute;
      display: block;
      top: 3px;
      left: 0;
      width: 100%;
      font-size: 12px;
      text-align: right;
      font-weight: $baseFontWeight;
      color: $lightTxtColor;

      .icon {
        font-weight: $baseFontWeight;
      }
    }

    .count-num {
      margin: 0 5px;
    }

    .img {
      width: 100%;
    }
  }

  .label {
    display: block;
    margin-top: 5px;
    text-align: left;
    color: $baseTxtColor;
    font-weight: $baseFontWeight;

    &:hover {
      cursor: pointer;
      color: $baseTxtActiveColor;
    }
  }

  // 独家放送MV列表
  .mv-list {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    .mv-item {
      width: calc((100% - 20px)/3);
    }

    .img-box {
      position: relative;
      display: block;
    }

    .icon {
      position: absolute;
      top: 5px;
      left: 5px;
      color: $lightTxtColor;
      font-size: 18px;
      font-weight: $baseFontWeight;
    }

    .img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
  }
}
</style>
