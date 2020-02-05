/**
 * @Description: 路由信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const routerInfo = {
  state: {
    currentIndex: 0, // 当前记录位置
    recordFlag: false, // 记录历史记录的标志
    history: [], // 路由历史记录
  },
  mutations: {
    setRecordFlag(state, flag) {
      state.recordFlag = flag;
    }
  },
  // actions: {
  //   setPageBtnsAction({ commit }, btns) {
  //     commit("setPageBtns", btns);
  //   }
  // },
  getters: {
    recordFlag: state => state.recordFlag,
  }
}

export default routerInfo