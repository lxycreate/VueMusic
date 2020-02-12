/**
 * @Description: Vue Router守卫函数
 * @Author: lixianying
 * @Date: 2020-01-21
 */
import store from '@/store'
import router from './router';

router.beforeEach((to, from, next) => {
  cachePage(to, from);
  recordHistory(to);
  next();
})

/**
 * 缓存页面
 */
function cachePage(to, from) {
  console.log('进入页面前,arr');
  console.log(store.getters.keepAliveArr.join(' '));
  console.log(from.path + ' =>  ' + to.path);
  // 跳转到详情页或者热评页，缓存上一页
  if (to.path === '/playlist/detail' || to.path === '/comment/hot') {
    from.meta.savePositionFlag = true;
    store.dispatch('setKeepAliveArrAction', { type: 'add', name: from.meta.name });
  } else {
    from.meta.savePositionFlag = false;
    store.dispatch('setKeepAliveArrAction', { type: 'remove', name: from.meta.name });
  }
  if (to.meta.name) {
    to.meta.savePositionFlag = true;
    store.dispatch('setKeepAliveArrAction', { type: 'add', name: to.meta.name });
  }
  console.log('进入页面后,arr');
  console.log(store.getters.keepAliveArr.join(' '));
  console.log('--------------------')
  console.log('');
}

/**
 * 记录历史记录
 */
function recordHistory(to) {
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
}