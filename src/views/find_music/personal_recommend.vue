<!--
 * @Description: 个性推荐
 * @Author: lixianying
 * @Date: 2020-01-14
 -->
<template>
<div class="personal-recommend-page">
  <!-- 轮播 -->
  <div class="carousel-banner">
    <el-carousel :interval="4000" :autoplay="false" type="card" height="145px">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <div class="img-item">
          <img class="img" :src="item.imageUrl" />
          <span class="type-box">
            <span class="type">
              {{item.typeTitle}}
            </span>
          </span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

  <!-- 推荐歌单 -->
  <div class="recommend-play-list">
    <span class="title">推荐歌单</span>
    <ul class="rec-play-list">
      <li class="list-item" v-for="item in recPlayList" :key="item.id" @click="jumpToListDetail(item.id)">
        <span class="img-box">
          <span class="play-count">
            <i class="icon el-icon-video-play"></i>
            <span class="count-num">{{item.playCount>10000?`${(item.playCount/10000).toFixed(0)}万`:item.playCount}}</span>
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
    <ul class="exclusive-mv-list">
      <li class="mv-item" v-for="item in exclusiveList" :key="item.id">
        <a class="img-box" v-if="item.type===19" :href="item.url" target="_blank">
          <i class="icon el-icon-link" />
          <img class="img" v-lazy="item.picUrl" />
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

  <!-- 最新音乐 -->
  <div class="new-music">
    <span class="title">最新音乐</span>
    <ul class="new-music-list">
      <li class="music-item" v-for="item in newMusicList" :key="item.id">
        <div class="left"><img class="img" v-lazy="item.picUrl" /></div>
        <div class="right">
          <div class="txt-box">
            <span class="music-name">{{item.name}}
              <span class="alias">{{item.song.alias.join('')}}</span>
            </span>
            <span class="artist">{{item.song.artists[0].name}}</span>
          </div>
          <div class="icon-box">
            <i class="icon el-icon-video-play" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {
  ajaxGetBannerList,
  ajaxGetRecPlayList,
  ajaxGetExclusiveList,
  ajaxGetNewAlbumList,
  ajaxGetRecNewSongs
} from "@/api/find_music";
import {
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      // 轮播列表
      carouselList: [],
      // 推荐歌单
      recPlayList: [],
      // 独家放送
      exclusiveList: [],
      // 最新音乐
      newMusicList: []
    }
  },
  computed: {
    ...mapGetters(['jsPageScroll'])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.jsPageScroll.wrap.scrollTop = vm.$route.meta.savedPostion;
    })
  },
  beforeRouteLeave(to, from, next) {
    if (this.$route.meta.keepAlive) {
      this.$route.meta.savedPostion = this.jsPageScroll.wrap.scrollTop;
    }
    next();
  },
  created() {
    this.getBannerList();
    this.getRecPlayList();
    this.getExclusiveList();
    this.getNewMusicList();
  },
  methods: {
    jumpToListDetail(id) {
      this.$router.push({
        path: '/playlist/detail',
        query: {
          id: id,
          type: 'normal'
        }
      })
    },
    /**
     * 获取banners
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
     * 获取最新音乐
     */
    getNewMusicList() {
      ajaxGetRecNewSongs().then(res => {
        if (res && res.result) {
          this.newMusicList = res.result;
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
.personal-recommend-page {
  padding-bottom: 20px;

  .title {
    display: block;
    margin-top: 20px;
    color: $baseTxtActiveColor;
    font-size: 16px;

    text-align: left;
    line-height: 1;
  }

  // 轮播
  .carousel-banner {
    margin-top: 20px;

    .img-item {
      position: relative;
      border-radius: 5px;
      overflow: hidden;
    }

    .img {
      display: block;
      width: 100%;
    }

    .type-box {
      position: absolute;
      display: block;
      top: 100%;
      margin-top: -26px;
      width: 100%;
      text-align: right;
    }

    .type {
      display: inline-block;
      padding: 5px 8px;
      border-top-left-radius: 5px;
      color: $lightTxtColor;
      background-color: $mainColor;
    }

    .el-carousel__button {
      margin: 0 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .el-carousel__indicators--outside button {
      opacity: 0.5;
    }

    .el-carousel__indicator.is-active {
      .el-carousel__button {
        opacity: 0.8;
        background-color: $mainColor;
      }
    }
  }

  // 推荐歌单
  .recommend-play-list {
    .title {
      margin-top: 0px;
    }

    .rec-play-list {
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
        color: $lightTxtColor;
      }

      .count-num {
        margin: 0 5px;
      }

      .img {
        width: 100%;
      }
    }
  }

  .label {
    display: block;
    margin-top: 5px;
    text-align: left;
    color: $baseTxtColor;

    &:hover {
      cursor: pointer;
      color: $baseTxtActiveColor;
    }
  }

  // 独家放送MV列表
  .exclusive-mv-list {
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

    }

    .img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
  }

  // 最新音乐
  .new-music {
    .new-music-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .music-item {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      width: calc(50% - 10px);

      .left {
        width: 60px;
        height: 60px;
      }

      .img {
        display: block;
        width: 100%;
        border-radius: 3px;
      }

      .right {
        display: flex;
        width: calc(100% - 80px);
        align-items: center;
      }

      .txt-box {
        width: calc(100% - 30px);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }

      .alias {
        color: $baseTxtColor;
      }

      .artist {
        display: block;
        margin-top: 10px;
        color: $baseTxtColor;
      }

      .icon-box {
        width: 30px;
        height: 60px;
        line-height: 60px;
      }

      .icon {
        font-size: 20px;
        color: $mainColor;
      }
    }
  }
}
</style>
