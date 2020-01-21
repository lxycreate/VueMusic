<!--
 * @Description: 歌单
 * @Author: lixianying
 * @Date: 2020-01-21
 -->
<template>
<div class="play-list">
  <!-- 精品歌单封面 -->
  <div class="quality-list-cover">
    <img class="bg-img" :src="qualityCover.coverImgUrl" />
    <div class="left"><img class="img" :src="qualityCover.coverImgUrl" /></div>
    <div class="right">
      <el-button round size="mini" type="text" icon="el-icon-trophy">精品歌单</el-button>
      <span class="txt name">{{qualityCover.name}}</span>
      <span class="txt copywriter">{{qualityCover.copywriter}}</span>
    </div>
  </div>

  <!-- 歌单分类 -->
  <div class="list-tabs">

  </div>
</div>
</template>

<script>
import {
  ajaxGetHotPlayListCatList,
  ajaxGetPlayListByCat,
  ajaxGetQualityPlayListByCat
} from '@/api/find_music'
export default {
  data() {
    return {
      qualityCover: {},
      listProps: {
        cat: "全部",
        pageNum: 1,
        pageSize: 20,
      },
      catList: [],
      playList: []
    }
  },
  created() {
    this.getHotPlayListCatList();
    this.getPlayListByCat();
    this.getQualityPlayListByCat();
  },
  methods: {
    getHotPlayListCatList() {
      ajaxGetHotPlayListCatList().then(res => {
        if (res && res.tags) {
          this.catList = res.tags;
        }
      }, res => {})
    },
    getPlayListByCat() {
      ajaxGetPlayListByCat({
        params: {
          limit: 10,
          offset: 30
        }
      }).then(res => {
        // console.log(res);
      }, res => {})
    },
    getQualityPlayListByCat() {
      ajaxGetQualityPlayListByCat({
        params: {
          limit: 1,
          cat: this.listProps.cat
        }
      }).then(res => {
        if (res && res.playlists) {
          this.qualityCover = res.playlists[0];
        }
      }, res => {})
    }
  },
}
</script>

<style lang="scss">
$qualityColor: #ddb814;

.play-list {
  .quality-list-cover {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
    overflow: hidden;

    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(20px);
    }

    .left {
      position: relative;
      width: 100px;
      height: 100px;

      .img {
        width: 100%;
        border-radius: 3px;
      }
    }

    .right {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: calc(100% - 120px);
      text-align: left;

      .el-button {
        padding: 0;
        color: $qualityColor;
        font-size: 14px;
      }

      .txt {
        display: block;
        width: 100%;
        line-height: 1;
      }

      .name {
        color: $lightTxtColor;
        font-size: 16px;
      }

      .copywriter {
        color: rgba($baseTxtColor, 0.6);
      }
    }
  }
}
</style>
