<!--
 * @Description: 歌单
 * @Author: lixianying
 * @Date: 2020-01-21
 -->
<template>
<div class="play-list-page">
  <!-- 精品歌单封面 -->
  <div class="quality-list-cover" v-if="qualityCover">
    <img class="bg-img" :src="qualityCover.coverImgUrl" />
    <div class="left"><img class="img" :src="qualityCover.coverImgUrl" /></div>
    <div class="right">
      <el-button round size="mini" type="text" icon="el-icon-trophy">精品歌单</el-button>
      <span class="txt name">{{qualityCover.name}}</span>
      <span class="txt copywriter">{{qualityCover.copywriter}}</span>
    </div>
  </div>

  <!-- 歌单分类 -->
  <div class="play-list-tabs">
    <el-tabs v-model="activeTab" @tab-click="cilckTabEvent">
      <el-tab-pane v-for="item in catList" :key="item.name" :label="item.name" :name="item.name">
        <ul class="list-content">
          <li class="list-item" v-for="(item,index) in playList" :key="item.id+index">
            <span class="img-box">
              <span class="play-count">
                <i class="icon el-icon-video-play"></i>
                <span class="count-num">{{(item.playCount/10000).toFixed(0)+"万"}}</span>
              </span>
              <img class="img" :src="item.coverImgUrl" />
            </span>
            <span class="label">{{item.name}}</span>
          </li>
        </ul>

        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync="listProps.pageNum"
          :total="listProps.total"
          :page-size.sync="listProps.pageSize"
          @current-change="handleCurrentChange">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
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
      canRequest: true, //限制请求频率
      activeTab: '全部',
      qualityCover: {},
      listProps: {
        cat: "全部",
        pageNum: 1,
        pageSize: 16,
        total: 0
      },
      catList: [],
      playList: [],
      messageObj: undefined
    }
  },
  created() {
    this.getHotPlayListCatList();
    this.getPlayListByCat();
    this.getQualityPlayListByCat();
  },
  methods: {
    initListProps() {
      this.listProps = {
        cat: "全部",
        pageNum: 1,
        pageSize: 16,
        total: 0
      }
    },

    disableRequest() {
      this.canRequest = false;
    },

    enableRequest() {
      setTimeout(() => {
        this.canRequest = true;
      }, 1000)
    },

    showErrorMesaage() {
      if (!this.messageObj) {
        this.messageObj = this.$message({
          message: '请不要频繁请求!',
          type: 'error',
          duration: 1500,
          onClose: () => {
            this.messageObj = undefined;
          }
        });
      }
    },

    cilckTabEvent(tab, event) {
      this.initListProps();
      this.listProps.cat = this.activeTab;
      if (this.canRequest) {
        this.disableRequest();
      } else {
        this.showErrorMesaage();
        return;
      }
      this.getPlayListByCat();
      this.getQualityPlayListByCat();
      this.enableRequest();
    },

    handleCurrentChange(pageNum) {
      this.listProps.pageNum = pageNum;
      this.getPlayListByCat();
    },

    /**
     * 获取歌单分类列表 
     */
    getHotPlayListCatList() {
      ajaxGetHotPlayListCatList().then(res => {
        if (res && res.tags) {
          this.catList = [{
            name: '全部'
          }, ...res.tags];
        }
      }, res => {})
    },
    /**
     * 根据分类获取歌单
     */
    getPlayListByCat() {
      ajaxGetPlayListByCat({
        params: {
          limit: this.listProps.pageSize,
          offset: (this.listProps.pageNum - 1) * this.listProps.pageSize,
          cat: this.listProps.cat,
        }
      }).then(res => {
        if (res && res.playlists) {
          this.playList = res.playlists;
          this.listProps.total = res.total;
        }
      }, res => {})
    },

    /**
     * 获取精品歌单封面
     */
    getQualityPlayListByCat() {
      ajaxGetQualityPlayListByCat({
        params: {
          limit: 1,
          cat: this.listProps.cat
        }
      }).then(res => {
        if (res && res.playlists.length > 0) {
          this.qualityCover = res.playlists[0];
        } else {
          this.qualityCover = undefined;
        }
      }, res => {})
    }
  },
}
</script>

<style lang="scss">
$qualityColor: #ddb814;

.play-list-page {

  .quality-list-cover {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
    overflow: hidden;
    transform: translateZ(0);

    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(20px);
      border-radius: 3px;
      overflow: hidden;
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
        color: rgba($lightTxtColor, 0.8);
      }
    }
  }

  .play-list-tabs {
    margin-top: 10px;

    .el-tabs__nav-wrap {
      padding: 0;

      &::after {
        display: none;
      }
    }

    .el-tabs__header {
      margin-bottom: 0;
    }

    .el-tabs__nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .el-tabs__item {
      height: 30px;
      padding: 0;

      &.is-active {
        color: $mainColor;
      }
    }

    .el-tabs__active-bar {
      display: none;
    }

    .list-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 10px;

      .list-item {
        margin-top: 10px;
        width: calc((100% - 40px)/4);
      }

      .img-box {
        position: relative;
        display: block;
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
        border-radius: 3px;
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
    }

    .el-pagination {
      padding-bottom: 10px;

      &.is-background .el-pager li:not(.disabled).active {
        background-color: $mainColor;
      }

      &.is-background .el-pager li:not(.disabled):hover {
        color: $mainColor;
      }
    }
  }
}
</style>
