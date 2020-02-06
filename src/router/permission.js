/**
 * @Description: Vue Router守卫函数
 * @Author: lixianying
 * @Date: 2020-01-21
 */
import store from '@/store'
import router from './router';

router.afterEach((to, from) => {
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
})