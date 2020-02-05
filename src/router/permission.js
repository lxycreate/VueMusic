/**
 * @Description: Vue Router守卫函数
 * @Author: lixianying
 * @Date: 2020-01-21
 */
import store from '@/store'
import router from './router';

router.afterEach((to, from) => {
  setTimeout(() => {
    console.log(store.getters.disPre)
  });
})