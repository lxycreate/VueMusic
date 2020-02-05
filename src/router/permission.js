/**
 * @Description: Vue Router守卫函数
 * @Author: lixianying
 * @Date: 2020-01-21
 */
import store from '@/store'
import router from './router';

router.afterEach((to, from) => {
  if (store.getters.recordFlag) {
    store.dispatch('setHistoryAction', to.path);
    store.dispatch('setCurrentIndexAction',store.getters.currentIndex+1);
  } else {
    store.dispatch('setRecordFlagAction', true);
  }
})