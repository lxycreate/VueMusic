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
        <img class="img" v-lazy="listDetail.coverImgUrl">
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
          <el-collapse-item :title="`${desTitle}`" name="1">
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
      <el-tab-pane :label="listDetail.commentCount>10000?`评论（${(listDetail.commentCount/10000).toFixed(2)}万）`:`评论（${listDetail.commentCount}）`" name="comment">
        <div class="playlist-detail-comment common-comment">
          <!-- 热评 -->
          <div class="hot-comments" v-if="commentProps.pageNum===1&&commentDetail.hotComments.length>0">
            <span class="title">热门评论</span>
            <ul class="comment-list">
              <li class="comment-item" v-for="item in commentDetail.hotComments" :key="item.commentId">
                <!-- 头像 -->
                <div class="avatar-box">
                  <img class="img" :src="item.user.avatarUrl">
                </div>
                <!-- 评论 -->
                <div class="comment-box">
                  <!-- 回复 -->
                  <div class="reply">
                    <span class="user-name">{{`${item.user.nickname}：`}}</span>{{item.content}}
                  </div>
                  <!-- 被回复 -->
                  <div class="be-replied" v-if="item.beReplied.length>0">
                    <ul class="be-replied-list">
                      <li class="be-replied-item" v-for="beRepliedItem in item.beReplied" :key="beRepliedItem.beRepliedCommentId">
                        <span class="user-name">{{`@${beRepliedItem.user.nickname}：`}}</span>
                        {{beRepliedItem.content}}
                      </li>
                    </ul>
                  </div>
                  <!-- 时间 -->
                  <div class="time-box">
                    <span class="time">{{formateTime(item.time)}}</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="btn-box" v-if="commentDetail.moreHot">
              <el-button size="medium" type="primary" round @click="jumpToHotComment">更多热门评论</el-button>
            </div>
          </div>

          <!-- 评论 -->
          <div class="comments" v-if="commentDetail.comments.length>0">
            <span class="title">{{`最新评论（${commentDetail.total}）`}}</span>
            <ul class="comment-list">
              <li class="comment-item" v-for="item in commentDetail.comments" :key="item.commentId">
                <!-- 头像 -->
                <div class="avatar-box">
                  <img class="img" v-lazy="item.user.avatarUrl">
                </div>
                <!-- 评论 -->
                <div class="comment-box">
                  <!-- 回复 -->
                  <div class="reply">
                    <span class="user-name">{{`${item.user.nickname}：`}}</span>{{item.content}}
                  </div>
                  <!-- 被回复 -->
                  <div class="be-replied" v-if="item.beReplied.length>0">
                    <ul class="be-replied-list">
                      <li class="be-replied-item" v-for="beRepliedItem in item.beReplied" :key="beRepliedItem.beRepliedCommentId">
                        <span class="user-name">{{`@${beRepliedItem.user.nickname}:`}}</span>
                        {{beRepliedItem.content}}
                      </li>
                    </ul>
                  </div>

                  <!-- 时间 -->
                  <div class="time-box">
                    <span class="time">{{formateTime(item.time)}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <el-pagination
            v-show="commentDetail.total>commentProps.pageSize"
            background
            layout="prev, pager, next"
            :current-page.sync="commentProps.pageNum"
            :total="commentProps.total"
            :page-size.sync="commentProps.pageSize"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>

<script>
import {
  routerMixin
} from '@/mixins'
import {
  mapGetters
} from 'vuex'
import {
  ajaxGetPlayListDetail,
  ajaxGetSongsDetail,
  ajaxGetPlayListComments
} from '@/api/find_music'
import {
  formateTime
} from '@/utils/tools.js'
export default {
  name: 'ListDetail',
  mixins: [routerMixin],
  data() {
    return {
      tagTypes: ['', 'success', 'info', 'danger', 'warning'], // 标签类型
      id: '', // 歌单id
      type: '', // 歌单类型，精品歌单还是歌单
      listDetail: {
        commentCount: 0
      },
      musicList: [], // 歌单的歌曲列表
      desTitle: '', // 简介的标题
      activeTab: 'music',
      commentProps: {
        total: 0,
        pageNum: 1,
        pageSize: 20,
        before: '' //分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
      },
      commentDetail: {
        comments: [],
        hotComments: []
      }
    }
  },
  computed: {
    ...mapGetters(['jsPageScroll'])
  },
  watch: {
    activeTab(val, oldVal) {
      if (val === 'comment') {
        this.commentProps.pageNum = 1;
        this.getPlayListComments();
      }
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.type = this.$route.query.type;
    this.getPlayListDetail();
  },
  methods: {
    formateTime: formateTime,
    /**
     * 跳转到热门评论页
     */
    jumpToHotComment() {
      this.$router.push({
        path: '/comment/hot',
        query: {
          id: this.id,
          type: 2
        }
      })
    },
    /**
     * 计算歌曲时长
     */
    computeTime(duration) {
      let tempMinute = parseInt(duration / 60000),
        minute = tempMinute >= 10 ? tempMinute : `0${tempMinute}`,
        tempSecond = parseInt((duration / 1000) % 60),
        second = tempSecond >= 10 ? tempSecond : `0${tempSecond}`;
      return `${minute}:${second}`;
    },

    handleCurrentChange(val) {
      this.commentProps.pageNum = val;
      this.getPlayListComments();
    },

    /**
     * 获取歌单评论
     */
    getPlayListComments() {
      let params = {
        id: this.id,
        limit: this.commentProps.pageSize,
        offset: (this.commentProps.pageNum - 1) * this.commentProps.pageSize
      };
      if (this.commentProps.pageNum * this.commentProps.pageSize > 5000) {
        params.before = this.commentProps.before;
      }
      ajaxGetPlayListComments({
        params: params
      }).then(res => {
        if (res) {
          this.commentDetail = res;
          if (!this.commentDetail.hotComments) {
            this.commentDetail.hotComments = [];
          }
          this.commentProps.before = res.comments[res.comments.length - 1].time;
          this.commentProps.total = res.total;
        }
      }, res => {})
    },

    /**
     * 获取歌单详情
     */
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
            this.desTitle = this.listDetail.description.substring(0, tempIndex);
            this.listDetail.description = this.listDetail.description.substring(tempIndex + 1, this.listDetail.description.length).replace(/\n/g, '<br>')
          } else {
            this.desTitle = this.listDetail.description.substring(0, this.listDetail.description.length);
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

  .playlist-detail-comment {
    margin-top: 10px;

    .title {
      display: block;
      text-align: left;
      font-size: 18px;
    }

    .hot-comments {
      margin-bottom: 30px;
    }

    .comments {
      margin-top: 10px;
    }
  }

}
</style>
