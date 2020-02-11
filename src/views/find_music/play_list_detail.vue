<!--
 * @Description: 歌单详情
 * @Author: lixianying
 * @Date: 2020-02-09
 -->
<template>
<div class="playlist-detail-page">
  <!-- 封面 -->
  <div class="cover-box">
    <div class="left">
      <div class="img-box">
        <img class="img" :src="listDetail.coverImgUrl">
      </div>
    </div>
    <div class="right">
      <div class="name">
        <el-tag effect="plain">{{type==='normal'?'歌单':'精品歌单'}}</el-tag>
        {{listDetail.name}}
      </div>
      <div class="txt-box tags">
        <span class="label">标签：</span>
        <el-tag v-for="(item,index) in listDetail.tags" :key="item" effect="dark" :type="tagTypes[(index)%4]">
          {{ item }}
        </el-tag>
      </div>
      <div class="txt-box">
        <span class="label">歌曲数：</span>
        <span class="txt">{{listDetail.trackCount}}</span>
        <span class="label play-count">播放数：</span>
        <span class="txt">{{listDetail.playCount>10000?`${(listDetail.playCount/10000).toFixed(2)}万`:listDetail.playCount}}</span>
      </div>
      <div class="txt-box intro">
        <span class="label">简介：</span>
        <el-collapse>
          <el-collapse-item :title="`${title}`" name="1">
            <span v-html="listDetail.description"></span>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>

  <!-- 音乐列表 -->
  <div class="table-box">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="歌曲列表" name="music">
        <el-table stripe :border="false" :data="musicList">
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column show-overflow-tooltip prop="name" label="音乐标题">
            <template slot-scope="scope">
              <span v-if="scope.row.alia.length>0">{{`${scope.row.name}（${scope.row.alia.join(' ')}）`}}</span>
              <span v-else>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="ar" label="歌手" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.ar[0].name}}</span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="al" label="专辑">
            <template slot-scope="scope">
              <span>{{scope.row.al.name}}</span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="dt" label="时长" width="80">
            <template slot-scope="scope">
              <span>{{computeTime(scope.row.dt)}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="listDetail.commentCount>10000?`评论(${(listDetail.commentCount/10000).toFixed(2)}万)`:`评论(${listDetail.commentCount})`" name="comment">评论</el-tab-pane>
    </el-tabs>
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
      tagTypes: ['', 'success', 'info', 'danger', 'warning'],
      id: '',
      type: '',
      listDetail: {
        commentCount: 0
      },
      musicList: [],
      title: '',
      activeTab: 'music'
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.type = this.$route.query.type;
    this.getPlayListDetail();
  },
  methods: {
    computeTime(duration) {
      let tempMinute = parseInt(duration / 60000),
        minute = tempMinute >= 10 ? tempMinute : `0${tempMinute}`,
        tempSecond = parseInt((duration / 1000) % 60),
        second = tempSecond >= 10 ? tempSecond : `0${tempSecond}`;
      return `${minute}:${second}`;
    },

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
          this.musicList = res.playlist.tracks;
          let tempIndex = this.listDetail.description.indexOf('\n');
          if (tempIndex !== -1) {
            this.title = this.listDetail.description.substring(0, tempIndex);
            this.listDetail.description = this.listDetail.description.substring(tempIndex + 1, this.listDetail.description.length).replace(/\n/g, '<br>')
          } else {
            this.title = this.listDetail.description.substring(0, this.listDetail.description.length);
            this.listDetail.description = '';
          }
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

        .el-tag {
          margin-right: 5px;
          padding: 0 5px;
          height: 20px;
          line-height: 18px;
          border-color: $mainColor;
          color: $mainColor;
        }
      }

      .txt-box {
        margin-top: 10px;

        .label {
          display: inline-block;
          height: 25px;
          line-height: 25px;
          white-space: nowrap;
        }

        &.intro {
          display: flex;

          .label {
            vertical-align: top;
          }
        }

        .txt {
          color: $baseTxtColor;
        }

        .play-count {
          margin-left: 15px;
        }

        .el-tag {
          margin-right: 5px;
          height: 25px;
          line-height: 25px;
        }

        .el-collapse {
          display: inline-block;
          border: none;
        }

        .el-collapse-item__header {
          height: auto;
          line-height: 25px;
          border: none;
          color: $baseTxtColor;
        }

        .el-collapse-item__arrow {
          margin-top: 5px;
          align-self: flex-start;
        }

        .el-collapse-item__wrap {
          border: none;
        }

        .el-collapse-item__content {
          color: $baseTxtColor;
        }
      }
    }
  }

  .table-box {
    margin-top: 10px;

    .el-tabs__header {
      margin-bottom: 10px;
    }

    .el-tabs__active-bar {
      color: $mainColor;
    }

    .el-tabs__item {
      &:hover {
        color: $mainColor;
      }

      &.is-active {
        color: $mainColor;
      }
    }

    .el-table {
      padding-bottom: 10px;

      td,
      th {
        padding: 5px 0;
        border: none;
      }
    }

  }

}
</style>
