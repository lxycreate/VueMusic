/**
 * @Description: 混入
 * @Author: lixianying
 * @Date: 2020-02-12
 */

export const routerMixin = {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.jsPageScroll.wrap.scrollTop = vm.$route.meta.savedPostion;
    })
  },
  beforeRouteLeave(to, from, next) {
    if (this.$route.meta.savePositionFlag) {
      this.$route.meta.savedPostion = this.jsPageScroll.wrap.scrollTop;
    }
    next();
  },
}