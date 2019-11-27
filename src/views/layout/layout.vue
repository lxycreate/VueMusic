<!--
 * @Description: 布局
 * @Author: lixianying
 * @Date: 2019-11-26
 -->
<template>
<div class="layout">
    <section class="sidebar-page">
        <section class="sidebar">sidebar</section>
        <section class="page-container">page-container</section>
    </section>
    <footer class="player-box">footer</footer>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.layout {
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 960px;
    max-height: 640px;
    background-color: #f8f8f8;

    .sidebar-page {
        display: flex;
        height: calc(100% - 50px);
    }

    .sidebar {
        width: 200px;
    }

    .page-container {
        width: calc(100% - 200px);
    }

    .player-box {
        width: 100%;
        height: 50px;
    }
}
</style>
