/**
 * @Description: Vue Router守卫函数
 * @Author: lixianying
 * @Date: 2020-01-21
 */
import store from '@/store'
import router from './router';

router.beforeEach((to, from, next) => {
  // 只有当从歌单页跳转到歌单详情页时，歌单页才被缓存下来
  if (to.path === '/playlist/detail' || to.path === '/comment/hot') {
    from.meta.keepAlive = true;
    store.dispatch('setKeepAliveListAction', { path: from.path, type: 'add' });
  }
  else {
    from.meta.keepAlive = false;
  }
  if (store.getters.recordFlag) {
    // 上一次操作是前进或后退时要截断历史记录
    if (store.getters.cutFlag) {
      store.dispatch('setCutFlagAction', false);
      store.dispatch('cutHistoryAction', to.path);
    } else {
      store.dispatch('setHistoryAction', to.path);
    }
    store.dispatch('setCurrentIndexAction', store.getters.currentIndex + 1);
  } else {
    store.dispatch('setRecordFlagAction', true);
  }
  next();
})