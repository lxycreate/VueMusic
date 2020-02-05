/**
 * @Description: 页面信息
 * @Author: lixianying
 * @Date: 2020-01-14
 */
const pageInfo = {
  state: {
    pageBtns: [],  // 页面按钮
  },
  mutations: {
    setPageBtns(state, btns) {
      state.pageBtns = btns;
    }
  },
  actions: {
    setPageBtnsAction({ commit }, btns) {
      commit("setPageBtns", btns);
    }
  },
  getters: {
    pageBtns: state => state.pageBtns,
  }
}

export default pageInfo