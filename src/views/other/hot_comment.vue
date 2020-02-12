<!--
 * @Description: 热门评论
 * @Author: lixianying
 * @Date: 2020-02-11
 -->
<template>
<div class="hot-comment-page">111</div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      type:'' , // 0: 歌曲, 1: mv, 2: 歌单, 3: 专辑, 4: 电台, 5: 视频
    }
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style lang="scss">

</style>
