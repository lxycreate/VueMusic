<!--
 * @Description: 歌单详情
 * @Author: lixianying
 * @Date: 2020-02-09
 -->
<template>
<div class="playlist-detail-page">
  <div class="cover-box">
    <div class="left">
      <div class="img-box">
        <img class="img" :src="listDetail.coverImgUrl">
      </div>
    </div>
    <div class="right">
      <div class="name">
        <el-tag effect="plain">歌单</el-tag>
        {{listDetail.name}}
      </div>
      <div class="txt-box tags">
        <span class="label"></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  ajaxGetPlayListDetail,
  ajaxGetSongsDetail
} from '@/api/find_music'
export default {
  data() {
    return {
      id: '',
      listDetail: {},
      musicList: []
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getPlayListDetail();
  },
  methods: {
    getPlayListDetail() {
      if (!this.id) {
        this.$message.error('歌单ID不存在');
        return;
      }
      ajaxGetPlayListDetail({
        params: {
          id: this.id
        }
      }).then(res => {
        if (res && res.playlist) {
          this.listDetail = res.playlist;
          this.musicList = res.tracks;
        }
      }, res => {})
    }
  }
}
</script>

<style lang="scss">
.playlist-detail-page {
  .cover-box {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .left {
      width: 150px;
      height: 150px;

      .img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .right {
      width: calc(100% - 170px);
      text-align: left;

      .name {
        display: flex;
        font-size: 20px;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .el-tag {
        margin-right: 5px;
        padding: 0 5px;
        height: 20px;
        line-height: 18px;
        border-color: $mainColor;
        color: $mainColor;
      }
    }
  }
}
</style>
