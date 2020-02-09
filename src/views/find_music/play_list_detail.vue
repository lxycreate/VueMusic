<!--
 * @Description: 歌单详情
 * @Author: lixianying
 * @Date: 2020-02-09
 -->
<template>
<div class="playlist-detail-page"></div>
</template>

<script>
import {
  ajaxGetPlayListDetail
} from '@/api/find_music'
export default {
  data() {
    return {}
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    getPlayListDetail() {
      ajaxGetPlayListDetail({
        params: {
          id: 1
        }
      }).then(res => {}, res => {})
    }
  }
}
</script>

<style>

</style>
